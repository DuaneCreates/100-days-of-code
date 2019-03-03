import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home.vue';
import Component from '@/pages/component.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/component/:day',
      name: 'component',
      component: Component,
    },
  ],
});
