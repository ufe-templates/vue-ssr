const Router = require('koa-router')
const VueServerRender = require('vue-server-renderer')
const serverRender = require('./server-render')
const fs = require('fs')
const path = require('path')
const clientManifest = require('../../dist/vue-ssr-client-manifest.json')
const bundle = require('../../dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'), 'utf-8')
const renderer = VueServerRender.createBundleRenderer(bundle, {
  inject: false,
  clientManifest
})

const router = new Router()

router.get('*', async (ctx) => {
  await serverRender(ctx, renderer, template)
})

module.exports = router
