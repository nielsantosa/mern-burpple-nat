function createRestaurant (db, name, description, address, cuisine, userId) {
    const sql = `
        INSERT INTO restaurants (name, description, address, cuisine, user_id)
        VALUES (?, ?, ?, ?, ?);
    `
    
    return new Promise((resolve, reject) => {
        db.run(
            sql,
            [name, description, address, cuisine, userId],
            (err) => {
                if (err) {
                    reject(false, err);
                } else {
                    resolve(true, null);
                }
            }
        )
    });
}

module.exports = { createRestaurant }