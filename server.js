const express = require('express')
const next = require('next')
const { registerApiRoutes } = require('./server/router/apiRoutes')
const { newRepositories } = require('./server/repositories/repositories')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  // setup express
  const server = express()

  // parse request bodies (req.body)
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))

  // register api urls
  const repo = newRepositories()
  registerApiRoutes(server, repo)

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