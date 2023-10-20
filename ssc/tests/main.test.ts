import { test } from './setup.ts'


test('basic usage', async t => {
  // not a real route
  const not_found = await t.client.get('/')
  t.assert.equal(not_found.status, 404)

  const track_1 = await t.client.get('/track', { headers: {'user-agent': 'chrome'}})
  t.assert.equal(track_1.status, 200)
  t.assert.equal(1, track_1.body.unique_site_visits)
  t.assert.equal(1, track_1.body.unique_site_visits_today)

  const track_2 = await t.client.get('/track', { headers: {'user-agent': 'chrome'}})
  t.assert.equal(track_2.status, 200)
  t.assert.equal(1, track_2.body.unique_site_visits)
  t.assert.equal(1, track_2.body.unique_site_visits_today)

  const track_3 = await t.client.get('/track', { headers: {'user-agent': 'firefox'}})
  t.assert.equal(track_3.status, 200)
  t.assert.equal(2, track_3.body.unique_site_visits)
  t.assert.equal(2, track_3.body.unique_site_visits_today)

  // advance 1 day
  t.fake_time.tick(1000 * 60 * 60 * 24)

  // daily visits should reset (to 1) and total visits should remain the same (2)
  const track_4 = await t.client.get('/track', { headers: {'user-agent': 'firefox'}})
  t.assert.equal(track_4.status, 200)
  t.assert.equal(2, track_4.body.unique_site_visits)
  t.assert.equal(1, track_4.body.unique_site_visits_today)

  const track_5 = await t.client.get('/track', { headers: {'user-agent': 'chrome'}})
  t.assert.equal(track_5.status, 200)
  t.assert.equal(2, track_5.body.unique_site_visits)
  t.assert.equal(2, track_5.body.unique_site_visits_today)
})
