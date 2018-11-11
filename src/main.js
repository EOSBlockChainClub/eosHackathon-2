import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import User from './views/User.vue'
import Enterprise from './views/Enterprise.vue'
import Provider from './views/Provider.vue'

import { store } from "./store";

const routes = [
  { path: '/user', component: User },
  { path: '/enterprise', component: Enterprise },
  { path: '/provider', component: Provider }
]

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
