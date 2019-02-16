import '@/assets/css/tailwind.css';

import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import App from './App.vue';

Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
