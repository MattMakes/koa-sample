const Router = require('@koa/router')
const v1 = new Router()

v1.get('/users', require('./controllers/users'))

module.exports = v1
