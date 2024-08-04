function getRestaurants (req, res, repo) {
    const userId = req.query.user_id ? parseInt(req.query.user_id) : null

    if (userId !== null) {
        repo.getRestaurantsWithIsUser(userId)
        .then(restaurants => {
            res.json(restaurants)
        })
        .catch(err => {
            res.error(err)
        })
        return
    }

    repo.getRestaurants()
    .then(restaurants => {
        res.json(restaurants)
    })
    .catch(err => {
        res.error(err)
    })
}

module.exports = { getRestaurants }