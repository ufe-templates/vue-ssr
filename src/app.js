import Vue from 'vue'
import App from './App.vue'
import createRouter from './routes'
import createStore from './store'
import { sync } from 'vuex-router-sync'
import Meta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(Meta)

export default function createApp () {
  const store = createStore()
  const router = createRouter()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
