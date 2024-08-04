function getCollectionsByUserId (db, userId) {
    const sql = `
        SELECT r.id, r.name, r.description
        FROM restaurants r
        JOIN restaurant_collections rc ON rc.restaurant_id = r.id
        WHERE rc.user_id = ?
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

module.exports = { getCollectionsByUserId }