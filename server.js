const express = require('express')
const next = require('next')
const { registerApiRoutes } = require('./src/api/router/apiRoutes')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // register api urls
  registerApiRoutes(server)

  // register next pages urls
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})