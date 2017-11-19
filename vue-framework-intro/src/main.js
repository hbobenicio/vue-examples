import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import User from './components/User.vue'
import Blog from './components/Blog.vue'
import Account from './components/Account.vue'

const routes = [
  { path: '/', component: User },
  { path: '/blog', component: Blog },
  { path: '/account', component: Account }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history' // Only works if the server which serves this app
                  // handles 404 by redirecting to index.html.
                  // Otherwise
})

Vue.use(VueRouter)
Vue.component('app-user', User)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
