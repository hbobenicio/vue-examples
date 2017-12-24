import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'https://vue-examples-axios-01.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'something'

// Registers a new Request Interceptor
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

// Registers a new Response Interceptor
const resInterceptor = axios.interceptors.response.use(config => {
  console.log('Response Interceptor', config)
  return config
})

// Unregistering Interceptors
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
