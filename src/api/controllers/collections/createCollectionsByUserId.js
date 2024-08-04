function createCollectionsByUserId(req, res, repo) {
    const { user_id, restaurant_id } = req.body;
    const userId = user_id
    const restaurantId = restaurant_id

    // Validate the input data
    if (!userId || !restaurantId) {
        return res.status(400).json({ error: 'Missing user_id or restaurant_id' });
    }

    // Use the Repositories class to create a new restaurant collection
    repo.createCollectionsByUserId(userId, restaurantId)
        .then((ok, err) => {
        res.status(200).json({success: true});
        })
        .catch((ok, err) => {
        res.status(500).json({ error: 'Error creating restaurant collection' });
        });
}

module.exports = { createCollectionsByUserId }