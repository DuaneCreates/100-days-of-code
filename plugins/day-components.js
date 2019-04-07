import Vue from 'vue'

// load each day's result from @/days/results as global components
const results = require.context('..//days/results', true, /\.vue$/i)
results.keys().map(key =>
  Vue.component(
    `day-${
      key
        .split('/')
        .pop()
        .split('.')[0]
    }`,
    results(key).default
  )
)
