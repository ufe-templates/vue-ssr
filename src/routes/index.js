import Router from 'vue-router'
import Vue from 'vue'
import routes from './routes'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) return savedPosition
      else return {x: 0, y: 0}
    },
    fallback: true, // 不支持history自动转为hash
    routes
  })
}
