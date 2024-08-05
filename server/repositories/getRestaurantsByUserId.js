function getRestaurantsByUserId(db, userId) {
    const sql = 'SELECT id, name, description, address, cuisine, user_id FROM restaurants WHERE user_id = ?'
    
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

module.exports = { getRestaurantsByUserId }