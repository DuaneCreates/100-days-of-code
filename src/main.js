import '@/assets/css/tailwind.css';

import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import VueMarkdown from 'vue-markdown';
import Cleave from 'vue-cleave-component';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';

import 'vue-awesome/icons/brands/codepen';
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/brands/instagram';
import 'vue-awesome/icons/regular/plus-square';
import 'vue-awesome/icons/regular/minus-square';
import 'vue-awesome/icons/check';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/brands/cc-visa';
import 'vue-awesome/icons/brands/cc-jcb';
import 'vue-awesome/icons/brands/cc-discover';
import 'vue-awesome/icons/brands/cc-diners-club';
import 'vue-awesome/icons/brands/cc-amex';
import 'vue-awesome/icons/brands/cc-mastercard';

Vue.use(Cleave);

Vue.component('vue-markdown', VueMarkdown);

// load each day's result from @/days/results as global components
const results = require.context('@/days/results', true, /\.vue$/i);
results.keys().map(key => Vue.component(`result-${key.split('/').pop().split('.')[0]}`, results(key).default));

Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === 'production';
const trackingId = process.env.VUE_APP_GA;
if (trackingId) {
  Vue.use(VueAnalytics, {
    id: trackingId,
    debug: {
      enabled: !isProd,
      sendHitTask: isProd,
    },
  });
}

// FONTS
require('typeface-raleway');
require('typeface-roboto');
require('typeface-montserrat');

new Vue({
  render: h => h(App),
}).$mount('#app');
