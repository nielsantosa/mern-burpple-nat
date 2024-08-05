function initializeDB () {
    const sqlite3 = require('sqlite3').verbose()
    const db = new sqlite3.Database(':memory:')

    // initialize data
    db.serialize(() => {
        db.run(`
            CREATE TABLE restaurants (
                id INTEGER PRIMARY KEY,
                name TEXT,
                description TEXT,
                address TEXT,
                cuisine TEXT,
                user_id REFERENCES users(id)
            );`
        )
        db.run(`
            CREATE TABLE users (
                id INTEGER PRIMARY KEY,
                name TEXT
            );`
        )
        db.run(`
            INSERT INTO users
            VALUES
                (1, "John"),
                (2, "Jane")
            ;`
        )
        db.run(`
            INSERT INTO restaurants (id, name, description, address, cuisine, user_id)
            VALUES
                (1, "Pizza Hut", "A pizza restaurant", "123 Main St", "Italian", 1),
                (2, "McDonalds", "A fast food restaurant", "456 Main St", "American", 1),
                (3, "Burger King", "A fast food restaurant", "789 Main St", "American", 1),
                (4, "Jolibee", "A chicken restaurant", "123 Main St", "American", 1)
            ;`
        )
    })

    return db
}

module.exports = { initializeDB }