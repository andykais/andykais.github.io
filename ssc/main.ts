import { encodeHex } from "https://deno.land/std@0.202.0/encoding/hex.ts";
import * as pattern from 'npm:ts-pattern@5.0.5'


abstract class HttpError extends Error {
  abstract status: number
}
class HttpNotFound extends HttpError {
  status = 404
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
    // console.log({user_agent, ip: connection_info.remoteAddr, hash})
    const result = await this.#database.set(['telemetry', 'fingerprint', hash], 1, { expireIn: 1000 * 60 * 60 * 24 })
    // console.log(result)

    // const transaction_result = await this.#database.atomic()
    //   .check({key: ['telemetry', 'fingerprint', 'daily', 'hashes', hash], versionstamp: null})
    //   .set(['telemetry', 'fingerprint', 'daily', 'hashes', hash], 1)
    //   .sum(['telemetry', 'fingerprint', 'total_count'], 1n)
    //   .sum(['telemetry', 'fingerprint', 'daily', 'count'], 1n)
    //   .commit()
    // console.log(transaction_result)

    const fingerprint_count = await this.#count_fingerprints()
    return {unique_site_visits: fingerprint_count}
  }

  async #count_fingerprints() {
    let count = 0
    for await (const value of this.#database.list({prefix: ['telemetry', 'fingerprint']})) {
      count += 1
    }
    return count
  }

}


if (import.meta.main) {
  const app = new Application({})
  await app.start()
}

export { Application }
