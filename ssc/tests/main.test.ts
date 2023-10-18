import { Application } from '../main.ts'
import * as assert from 'https://deno.land/std/assert/mod.ts'


class TestResponse {
  constructor(public status: number, public body: any, public response: Response) {}
}

class TestClient {
  #base_url: string
  constructor(base_url: string) {
    this.#base_url = base_url
  }

  async get(url: string, options?: RequestInit) { return this.#do_request(url, options) }
  async put(url: string, options?: RequestInit) { throw new Error('unimplemented') }
  async post(url: string, options?: RequestInit) { throw new Error('unimplemented') }
  async delete(url: string, options?: RequestInit) { throw new Error('unimplemented') }
  async #do_request(url: string, options?: RequestInit) {
    const response = await fetch(`${this.#base_url}${url}`, options)
    const response_body = await response.json()
    return new TestResponse(response.status, response_body, response)
  }
}

interface TestContext {
  client: TestClient
}
function test(test_name: string, fn: (test_context: TestContext) => Promise<void>) {
  Deno.test({
    name: test_name,
    fn: async () => {
      const app = new Application({ database_path: 'kv.db' })
      const test_context: TestContext = {
        client: new TestClient('http://localhost:8000'),
      }
      await app.start()
      try {
        await fn(test_context)
      } catch (e) {
        throw e
      } finally {
        await app.stop()
      }
    }
  })
}


test('simple', async t => {

  // not a real route
  const not_found = await t.client.get('/')
  assert.equal(not_found.status, 404)

  const track_1 = await t.client.get('/track')
  assert.equal(track_1.status, 200)
  assert.equal(1, track_1.body.unique_site_visits)

  const track_2 = await t.client.get('/track')
  assert.equal(track_2.status, 200)
  assert.equal(1, track_2.body.unique_site_visits)

  const track_3 = await t.client.get('/track', { headers: {'user-agent': 'firefox'}})
  assert.equal(track_3.status, 200)
  assert.equal(2, track_3.body.unique_site_visits)
})
