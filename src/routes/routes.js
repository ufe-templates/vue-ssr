export default [
  { path: '/', redirect: '/list' },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "list" */'../views/list.vue'),
    name: 'list',
    meta: {
      title: 'simple vue ssr home',
      description: 'simple demo for vue ssr'
    }
  },
  {
    path: '/item',
    component: () => import(/* webpackChunkName: "item" */'../views/item.vue'),
    name: 'item',
    meta: {
      title: 'item page',
      description: 'with webpack 4'
    }
  }
]
