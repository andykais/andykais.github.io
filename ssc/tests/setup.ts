import { Application } from '../main.ts'
import * as testing from "https://deno.land/std@0.204.0/testing/time.ts";
import * as assert from "https://deno.land/std@0.204.0/testing/asserts.ts";


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
    if (response.status >= 500) {
      throw new Error(`${response.status} Server Error: ` + await response.text())
    }
    const response_body = await response.json()
    return new TestResponse(response.status, response_body, response)
  }
}

interface TestAssert {
  equal: typeof assert.assertEquals
}

interface TestOptions {
  ignore?: boolean
  only?: boolean
}
interface TestContext {
  assert: TestAssert
  client: TestClient
  fake_time: testing.FakeTime
}
const test_assert: TestAssert = {
  equal: assert.assertEquals,
}
function test(test_name: string, fn: (test_context: TestContext) => Promise<void>, test_options?: TestOptions) {
  Deno.test({
    name: test_name,
    fn: async () => {
      const app = new Application({ database_path: ':memory:' })
      const fake_time = new testing.FakeTime();
      const test_context: TestContext = {
        client: new TestClient('http://localhost:8000'),
        assert: test_assert,
        fake_time,
      }
      await app.start()
      try {
        await fn(test_context)
      } catch (e) {
        throw e
      } finally {
        await app.stop()
      }
    },
    ignore: test_options?.ignore,
    only: test_options?.only,
  })
}
test.only = (test_name: string, fn: (test_context: TestContext) => Promise<void>) => { test(test_name, fn, {only: true}) }
test.skip = (test_name: string, fn: (test_context: TestContext) => Promise<void>) => { test(test_name, fn, {ignore: true}) }



export { test }
