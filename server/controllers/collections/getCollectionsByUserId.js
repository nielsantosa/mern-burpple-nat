function getCollectionsByUserId(req, res, repo) {
    userId = req.query.user_id;

    if (userId == null) {
        res.status(400).json({ error: 'user_id is required' })
        return
    }

    repo.getCollectionsByUserId(userId)
    .then(restaurants => {
        res.json(restaurants)
        return
    })
    .catch(err => {
        res.status(400).json(err)
        return
    })
}

module.exports = { getCollectionsByUserId }