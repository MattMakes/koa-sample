require('./utils/startup')()
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const yamljs = require('yamljs')
const { koaSwagger } = require('koa2-swagger-ui')

const app = new Koa()
const router = new KoaRouter()
const port = 2400

router.get('/', (ctx, next) => {
  try {
    ctx.body = 'Welcome to my Koa.js Server'
  } catch (ex) {
    ctx.throw(500, 'Sample error message')
  }
})

router.use('/v1', require('./v1').routes())

const spec = yamljs.load('./swagger/sample.yaml')

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: { spec }
  }))

app.listen(port, () => console.log(`Server running on port: ${port}`))
