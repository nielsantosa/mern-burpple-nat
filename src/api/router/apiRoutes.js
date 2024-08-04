const { getRestaurants } = require('../controllers/restaurants/getRestaurants')
const { getRestaurantById } = require('../controllers/restaurants/getRestaurantById')
const { getCollectionsByUserId } = require('../controllers/collections/getCollectionsByUserId')
const { createCollectionsByUserId } = require('../controllers/collections/createCollectionsByUserId')
const { deleteCollectionsByUserId } = require('../controllers/collections/deleteCollectionsByUserId')

function registerApiRoutes (server, repo) {
    server.get('/api/ping', (req, res) => {
        res.json({ message: 'pong' })
    })

    // restaurants
    server.get('/api/restaurants', (req, res) => {
        return getRestaurants(req, res, repo)
    })
    server.get('/api/restaurants/:id', (req, res) => {
        return getRestaurantById(req, res, repo)
    })

    // collections
    server.get('/api/collections/restaurants', (req, res) => {
        return getCollectionsByUserId(req, res, repo)
    })
    server.post('/api/collections/restaurants', (req, res) => {
        return createCollectionsByUserId(req, res, repo)
    })
    server.delete('/api/collections/restaurants/:restaurant_id', (req, res) => {
        return deleteCollectionsByUserId(req, res, repo)
    })
};

module.exports = { registerApiRoutes }