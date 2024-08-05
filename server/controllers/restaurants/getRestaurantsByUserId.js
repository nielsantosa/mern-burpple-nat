function getRestaurantsByUserId (req, res, repo) {
    const userId = req.query.user_id ? parseInt(req.query.user_id) : null

    if (userId === null) {
        return
    }

    repo.getRestaurantsByUserId(userId)
    .then(restaurants => {
        res.json(restaurants)
    })
    .catch(err => {
        res.error(err)
    })
}

module.exports = { getRestaurantsByUserId }