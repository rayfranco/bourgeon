{{#if vuex}}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  increment (state) {
    state.count++
  }
}

const actions = {
  increment: ({ commit }) => commit('increment')
}

const getters = {
  countPlural: ({ count }) => Math.min(count, 2)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
{{else}}
export default {}
{{/if}}
