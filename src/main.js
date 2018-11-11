import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import User from './components/User.vue'
import Enterprise from './components/Enterprise.vue'
import Provider from './components/Provider.vue'


const routes = [
  { path: '/user', component: User },
  { path: '/enterprise', component: Enterprise },
  { path: '/provider', component: Provider }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')