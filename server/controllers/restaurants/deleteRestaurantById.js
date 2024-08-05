function deleteRestaurantById (req, res, repo) {
    const id = req.params.id

    if (id === null) {
        res.status(400).error('require id')
    }

    repo.deleteRestaurantById(id)
    .then((ok, err) => {
        res.status(200).json({success: true});
    })
    .catch((ok, err) => {
        res.status(400).error(err)
    })
}

module.exports = { deleteRestaurantById }