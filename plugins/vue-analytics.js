import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

const info = require('../info.js')

const isProd = process.env.NODE_ENV === 'production'
const trackingId = info.ga_code

if (trackingId) {
  Vue.use(VueAnalytics, {
    id: trackingId,
    debug: {
      enabled: !isProd,
      sendHitTask: isProd
    }
  })
}
