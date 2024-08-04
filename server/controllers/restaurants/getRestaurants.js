function getRestaurants (req, res, repo) {
    repo.getRestaurants()
    .then(restaurants => {
        res.json(restaurants)
    })
    .catch(err => {
        res.error(err)
    })
}

module.exports = { getRestaurants }