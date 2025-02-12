function getRestaurantById (db, id) {
    const sql = 'SELECT id, name, description, address, cuisine, user_id FROM restaurants WHERE id = ?'
    
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