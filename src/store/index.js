import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getter'
import actions from './action'
import mutations from './mutation'
import state from './state'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })

  if (module.hot) {
    module.hot.accept([
      './action.js',
      './getter.js',
      './mutation.js',
      './state.js'
    ], () => {
      const newState = require('./state').default
      const newActions = require('./action').default
      const newGetters = require('./getter').default
      const newMutations = require('./mutation').default

      store.hotUpdate({
        state: newState,
        actions: newActions,
        mutations: newMutations,
        getters: newGetters
      })
    })
  }

  return store
}
