const Router = require('koa-router')
const axios = require('axios')
const MFS = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const ServerRender = require('./server-render')
const serverConfig = require('../../build/webpack.server')
const serverCompiler = webpack(serverConfig)
const mfs = new MFS()
serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.log(warn))

  const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json')

  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    console.log('稍等, 正在编译')
    return
  }

  const clientManifestResp = await axios.get('http://localhost:9000/vue-ssr-client-manifest.json')

  const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'), 'utf-8')

  const render = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest: clientManifestResp.data
  })

  await ServerRender(ctx, render, template)
}

const router = new Router()
router.get('*', handleSSR)
module.exports = router
