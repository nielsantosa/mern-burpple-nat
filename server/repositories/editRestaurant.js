function editRestaurant (db, name, description, address, cuisine, id) {
    const sql = `
        UPDATE restaurants 
        SET
            name=?,
            description=?,
            address=?,
            cuisine=?
        WHERE id = ?;
    `
    
    return new Promise((resolve, reject) => {
        db.run(
            sql,
            [name, description, address, cuisine, id],
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

module.exports = { editRestaurant }