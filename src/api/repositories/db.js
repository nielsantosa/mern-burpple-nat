function initializeDB () {
    const sqlite3 = require('sqlite3').verbose()
    const db = new sqlite3.Database(':memory:')

    // initialize data
    db.serialize(() => {
        db.run(`
            CREATE TABLE restaurants (
                id INTEGER PRIMARY KEY,
                name TEXT,
                description TEXT
            );`
        )
        db.run(`
            CREATE TABLE users (
                id INTEGER PRIMARY KEY,
                name TEXT
            );`
        )
        db.run(`
            CREATE TABLE restaurant_collections (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER REFERENCES users(id),
                restaurant_id INTEGER REFERENCES restaurants(id),
                UNIQUE (user_id, restaurant_id)
            );`
        )
        db.run(`
            INSERT INTO restaurants
            VALUES
                (1, "Pizza Hut", "A pizza restaurant"),
                (2, "McDonalds", "A fast food restaurant"),
                (3, "Burger King", "A fast food restaurant"),
                (4, "Jolibee", "A chicken restaurant")
            ;`
        )
        db.run(`
            INSERT INTO users
            VALUES
                (1, "John"),
                (2, "Jane")
            ;`
        )
        db.run(`
            INSERT INTO restaurant_collections (user_id, restaurant_id)
            VALUES
                (1, 1),
                (1, 2),
                (2, 1),
                (2, 3)
            ;`
        )
    })

    return db
}

module.exports = { initializeDB }