import '@/assets/css/tailwind.css';

import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import App from './App.vue';
import 'vue-awesome/icons/brands/codepen';
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/brands/instagram';
import 'vue-awesome/icons/regular/window-close';

Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

// FONTS
require('typeface-raleway');
require('typeface-roboto');
require('typeface-montserrat');

new Vue({
  render: h => h(App),
}).$mount('#app');
