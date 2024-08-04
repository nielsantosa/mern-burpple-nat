function getRestaurantsWithIsUser (db, userId) {
    const sql = `
        SELECT
        r.id,
        r.name,
        r.description,
        CASE WHEN rc.user_id = ? THEN TRUE ELSE FALSE END AS is_user_restaurant
        FROM restaurants r
        LEFT JOIN restaurant_collections rc ON r.id = rc.restaurant_id
    `
    
    return new Promise((resolve, reject) => {
        db.all(sql, [userId], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

module.exports = { getRestaurantsWithIsUser }