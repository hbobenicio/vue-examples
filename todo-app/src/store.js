import Vue from 'vue'
import Vuex from 'vuex'
import TodoModule from './todo/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo: TodoModule
  }
})
