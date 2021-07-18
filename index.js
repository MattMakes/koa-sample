const Koa = require('koa')
const KoaRouter = require('@koa/router')
const yamljs = require('yamljs')
const { koaSwagger } = require('koa2-swagger-ui')
const startup = require('./utils/startup')
startup()

const app = new Koa()
const router = new KoaRouter()
const port = 2400

// function * separatelyDeclaredLogic (ctx) {
//   ctx.body = ''
//   return `${ctx.params.id}`
// }

router.get('/', (ctx, next) => {
  try {
    ctx.body = 'Welcome to my Koa.js Server'
  } catch (ex) {
    ctx.throw(500, 'Sample error message')
  }
})

router.use('/v1', require('./v1').routes())

// router.get('/:id', (ctx) => {
//   ctx.body = `We see you ${this.params.id}`
// })

// router.get('/users/:id', separatelyDeclaredLogic)

// router.get('/users', (ctx) => {
//   ctx.body =
// })

// function * sendIdAndName () {
//   this.body = 'id: ' + this.params.id + ' and name: ' + this.params.name
// }

// router.get('/things/:name/:id', sendIdAndName)

const spec = yamljs.load('./swagger/sample.yaml')

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: { spec }
  }))

app.listen(port, () => console.log(`Server running on port: ${port}`))
