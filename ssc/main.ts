import * as datetime from 'https://deno.land/std@0.202.0/datetime/mod.ts'
import { encodeHex } from "https://deno.land/std@0.202.0/encoding/hex.ts";
import * as pattern from 'npm:ts-pattern@5.0.5'


abstract class HttpError extends Error {
  abstract status: number
}
class HttpNotFound extends HttpError {
  status = 404
}

interface DatabaseKeys {
  total_count: Deno.KvKey
  daily_count: Deno.KvKey
  total_entries: Deno.KvKey
  daily_entries: Deno.KvKey
}

interface ApplicationConfig {
  database_path?: string
}

class Application {
  #config: ApplicationConfig
  #database!: Deno.Kv
  #server!: Deno.Server

  constructor(config: ApplicationConfig) {
    this.#config = config
  }

  async start() {
    this.#server = Deno.serve(async (request, connection_info) => {
      const url = new URL(request.url)
      try {
        const response_body =  await pattern.match(url.pathname)
          .with('/track', () => this.#track_request(request, connection_info))
          .with('/info', () => 'info')
          .otherwise(() => { throw new HttpNotFound(`Url ${url.pathname} Not Found`)})

        return new Response(JSON.stringify(response_body))
      } catch (e) {
        if (e instanceof HttpError) {
          return new Response(JSON.stringify({ message: e.message }), { status: e.status })
        } else {
          return new Response(`Unhandled Exception: ${e}`, { status: 500 })
        }
      }
    })
    this.#database = await Deno.openKv(this.#config.database_path)
  }

  async stop() {
    await this.#server.shutdown()
    this.#database.close()
  }

  async #track_request(request: Request, connection_info: Deno.ServeHandlerInfo) {
    const user_agent = request.headers.get('user-agent')
    const unique_request_str = `${user_agent}+${connection_info.remoteAddr.hostname}`
    const unique_request_buffer = new TextEncoder().encode(unique_request_str);
    const hash_buffer = await crypto.subtle.digest("SHA-1", unique_request_buffer);
    const hash = encodeHex(hash_buffer);

    const now = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDay() + 1)
    tomorrow.setHours(tomorrow.getHours() + 1) // add an extra hour for those weird time windows
    const todays_date = datetime.format(now, 'yyyy-MM-dd')
    const time_until_tomorrow = datetime.difference(now, tomorrow)

    const keys: DatabaseKeys = {
      total_count: ['telemetry.fingerprint.total_count'],
      daily_count: ['telemetry.fingerprint.daily_count', todays_date],
      total_entries: ['telemetry.fingerprint.total_entries', hash],
      daily_entries: ['telemetry.fingerprint.daily_entries', todays_date, hash],
    }
    const fotd_transaction_result = await this.#database.atomic()
      .check({ key: keys.daily_count, versionstamp: null })
      .set(keys.daily_count, new Deno.KvU64(0n), { expireIn: time_until_tomorrow.milliseconds })
      .commit()

    const total_transaction_result = await this.#database.atomic()
      .check({ key: keys.total_entries, versionstamp: null })
      .set(keys.total_entries, true)
      .sum(keys.total_count, 1n)
      .commit()

    const daily_transaction_result = await this.#database.atomic()
      .check({ key: keys.daily_entries, versionstamp: null })
      .set(keys.daily_entries, true, { expireIn: time_until_tomorrow.milliseconds })
      .sum(keys.daily_count, 1n)
      .commit()

    return await this.#count_fingerprints(keys, todays_date)
  }

  async #count_fingerprints(keys: DatabaseKeys, todays_date: string) {
    const [daily_count, total_count] = await this.#database.getMany([keys.daily_count, keys.total_count])
    const [unique_site_visits_today, unique_site_visits] = [daily_count, total_count].map(bigint => Number(bigint.value))
    return { unique_site_visits_today, unique_site_visits, todays_date }
  }

}


if (import.meta.main) {
  const app = new Application({})
  await app.start()
}

export { Application }
