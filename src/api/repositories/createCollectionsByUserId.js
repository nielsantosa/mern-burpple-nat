function createCollectionsByUserId (db, userId, restaurantId) {
    const sql = `
        INSERT INTO restaurant_collections (user_id, restaurant_id)
        VALUES (?, ?);
    `
    
    return new Promise((resolve, reject) => {
        db.run(
            sql,
            [userId, restaurantId],
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

module.exports = { createCollectionsByUserId }