const { getRestaurantsByUserId } = require('./getRestaurantsByUserId')
const { getRestaurantById } = require('./getRestaurantById')
const { createRestaurant } = require('./createRestaurant')
const { editRestaurant } = require('./editRestaurant')
const { deleteRestaurantById } = require('./deleteRestaurantById')
const { initializeDB } = require('./db')


class Repositories {
    constructor() {
        this.db = initializeDB()
    }

    getRestaurantsByUserId (userId) {
        return getRestaurantsByUserId(this.db, userId)
    }

    getRestaurantById (id) {
        return getRestaurantById(this.db, id)
    }

    createRestaurant (name, description, address, cuisine, userId) {
        return createRestaurant(this.db, name, description, address, cuisine, userId)
    }

    editRestaurant (name, description, address, cuisine, userId) {
        return editRestaurant(this.db, name, description, address, cuisine, userId)
    }

    deleteRestaurantById (id) {
        return deleteRestaurantById(this.db, id)
    }
}

function newRepositories () {
    return new Repositories()
}

module.exports = { newRepositories }