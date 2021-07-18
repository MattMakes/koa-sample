const startup = () => {
  process.on('unhandledRejection', exception => {
    console.log({
      level: 'error',
      message: '========= unhandledRejection =========',
      err: exception
    })
  })

  process.on('uncaughtException', exception => {
    console.log({
      level: 'error',
      message: `========= unhandledException - Exception ======= ${exception}`,
      err: exception
    })
  })
}

module.exports = startup
