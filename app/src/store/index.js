import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import message from './message'
import token from './token'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    message,
    token
  }
})
