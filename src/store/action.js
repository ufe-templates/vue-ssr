import { get } from '../util/http'

export default {
  asyncTest({ commit }) {
    return get('/topics').then(data => {
      commit('INIT', data.data.length)
    }).catch(err => {
      console.log(err)
      commit('INIT', 0)
    })
  }
}
