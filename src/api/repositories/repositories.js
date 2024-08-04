const { getRestaurants } = require('./getRestaurants')
const { getRestaurantById } = require('./getRestaurantById')
const { getCollectionsByUserId } = require('./getCollectionsByUserId')
const { createCollectionsByUserId } = require('./createCollectionsByUserId')
const { deleteCollectionsByUserId } = require('./deleteCollectionsByUserId')
const { initializeDB } = require('./db')


class Repositories {
    constructor() {
        this.db = initializeDB()
    }

    getRestaurants () {
        return getRestaurants(this.db)
    }

    getRestaurantById (id) {
        return getRestaurantById(this.db, id)
    }

    getCollectionsByUserId (userId) {
        return getCollectionsByUserId(this.db, userId)
    }

    createCollectionsByUserId (userId, restaurantId) {
        return createCollectionsByUserId(this.db, userId, restaurantId)
    }

    deleteCollectionsByUserId (userId, restaurantId) {
        return deleteCollectionsByUserId(this.db, userId, restaurantId)
    }
}

function newRepositories () {
    return new Repositories()
}

module.exports = { newRepositories }