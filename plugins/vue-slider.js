import Vue from 'vue'

if (process.client) {
  const VueSlider = require('vue-slider-component')
  Vue.component('vue-slider', VueSlider)
}
