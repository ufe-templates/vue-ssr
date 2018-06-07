const Koa = require('koa')
const app = new Koa()
const isDev = process.env.NODE_ENV === 'development'
const ssrRouter = isDev ? require('./routes/dev-ssr') : require('./routes/ssr')
const koaSend = require('koa-send')
const path = require('path')
const staticRouter = require('./routes/static')
const apiRouter = require('./routes/api')
const body = require('koa-bodyparser')

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log('server error: ', err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await koaSend(ctx, '/favicon.ico', {
      root: path.resolve(__dirname, '../')
    })
  } else {
    await next()
  }
})

app.use(body())

app.use(staticRouter.routes())
  .use(staticRouter.allowedMethods())
app.use(apiRouter.routes())
  .use(apiRouter.allowedMethods())
app.use(ssrRouter.routes())
  .use(ssrRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server started at ${HOST}:${PORT}`)
})
