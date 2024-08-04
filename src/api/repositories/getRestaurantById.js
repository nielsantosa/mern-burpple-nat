function getRestaurantById (db, id) {
    const sql = 'SELECT * FROM restaurants WHERE id = ?'
    
    return new Promise((resolve, reject) => {
        db.get(sql, [id], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

module.exports = { getRestaurantById }