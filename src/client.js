import * as sapper from '@sapper/app'
import { googleAnalytics } from './google-analytics'

sapper.start({
  target: document.getElementById('sapper')
})

if (process.env.TRACKING_ID) googleAnalytics(process.env.TRACKING_ID)
