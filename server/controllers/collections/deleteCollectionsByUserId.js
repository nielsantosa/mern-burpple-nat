function deleteCollectionsByUserId(req, res, repo) {
    const userId = req.query.user_id
    const restaurantId = req.params.restaurant_id

    // Validate the input data
    if (!userId || !restaurantId) {
        return res.status(400).json({ error: 'Missing user_id or restaurant_id' });
    }

    // Use the Repositories class to create a new restaurant collection
    repo.deleteCollectionsByUserId(userId, restaurantId)
        .then((ok, err) => {
        res.status(200).json({success: true});
        })
        .catch((ok, err) => {
        res.status(500).json({ error: 'Error deleting restaurant collection' });
        });
}

module.exports = { deleteCollectionsByUserId }