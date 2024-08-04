function getRestaurantById (req, res, repo) {
    id = req.params.id

    repo.getRestaurantById(id)
    .then(restaurant => {
        res.json(restaurant)
    })
    .catch(err => {
        res.error(err)
    })
}

module.exports = { getRestaurantById }