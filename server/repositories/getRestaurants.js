function getRestaurants (db) {
    const sql = 'SELECT id, name, description FROM restaurants'
    
    return new Promise((resolve, reject) => {
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

module.exports = { getRestaurants }