function deleteRestaurantById (db, restaurantId) {
    const sql = `
        DELETE FROM restaurants
        WHERE id = ?;
    `
    
    return new Promise((resolve, reject) => {
        db.run(
            sql,
            [restaurantId],
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

module.exports = { deleteRestaurantById }