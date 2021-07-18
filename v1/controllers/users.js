module.exports = (ctx, next) => {
  ctx.body = {
    data: {
      users: [{
        username: 'abraham'
      }, {
        username: 'moses10'
      }]
    }
  }
}
