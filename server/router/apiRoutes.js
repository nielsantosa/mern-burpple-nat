const { getRestaurantsByUserId } = require('../controllers/restaurants/getRestaurantsByUserId')
const { getRestaurantById } = require('../controllers/restaurants/getRestaurantById')
const { createRestaurant } = require('../controllers/restaurants/createRestaurant')
const { editRestaurant } = require('../controllers/restaurants/editRestaurant')
const { deleteRestaurantById } = require('../controllers/restaurants/deleteRestaurantById')

function registerApiRoutes (server, repo) {
    server.get('/api/ping', (req, res) => {
        res.json({ message: 'pong' })
    })

    // restaurants
    server.get('/api/restaurants', (req, res) => {
        return getRestaurantsByUserId(req, res, repo)
    })
    server.get('/api/restaurants/:id', (req, res) => {
        return getRestaurantById(req, res, repo)
    })
    server.post('/api/restaurants', (req, res) => {
        return createRestaurant(req, res, repo)
    })
    server.put('/api/restaurants/:id', (req, res) => {
        return editRestaurant(req, res, repo)
    })
    server.delete('/api/restaurants/:id', (req, res) => {
        return deleteRestaurantById(req, res, repo)
    })
};

module.exports = { registerApiRoutes }