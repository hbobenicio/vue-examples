import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Root state object
const state = {
  counter: 0
}

// Functions that actually mutate the state of the app.
// Mutations MUST BE SYNCHRONOUS
// Mutations receive the App State + payload arguments
const mutations = {
  increment: state => state.counter++,
  decrement: state => state.counter--
}

// Actions are functions that cause side effects on the state of the App.
// Actions can be asynchronous
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
}

// Functions to get data from the state.
// Usefull to become a computed property to components of the app.
const getters = {
  counter: state => state.counter
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
