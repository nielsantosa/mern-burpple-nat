function deleteCollectionsByUserId (db, userId, restaurantId) {
    const sql = `
        DELETE FROM restaurant_collections
        WHERE user_id = ? AND restaurant_id = ?;
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

module.exports = { deleteCollectionsByUserId }