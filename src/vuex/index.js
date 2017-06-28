import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const demoState = {
  data: {
    count: 1
  }
}
let demo = {
  state: demoState,
  mutations: {
    'UPDATE' (state, count) {
      state.data.count = count
    }
  },
  actions: {
    updateDemoCount ({commit}, count) {
      /*
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('UPDATE', count)
          resolve({b: true, msg: 'success'})
        }, 1000)
      })
      */
      setTimeout(() => {
        // commit('UPDATE', count)
      }, 2000)
    }
  }
}
let debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    demo
  },
  // 严格模式
  strict: debug
})
