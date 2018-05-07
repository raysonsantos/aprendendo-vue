import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

import Home from './paginas/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
