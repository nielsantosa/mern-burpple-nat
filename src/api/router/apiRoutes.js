function registerApiRoutes (server) {
    server.get('/api/*', (req, res) => {
        res.json({ message: 'Hello World!' })
    })
};

module.exports = { registerApiRoutes }