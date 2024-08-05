function createRestaurant(req, res, repo) {
    const { name, description, address, cuisine, user_id } = req.body;
    const userId = user_id

    // Validate the input data
    if (!userId) {
        return res.status(400).json({ error: 'Missing user_id' });
    }

    // Use the Repositories class to create a new restaurant collection
    repo.createRestaurant(name, description, address, cuisine, userId)
        .then((ok, err) => {
        res.status(200).json({success: true});
        })
        .catch((ok, err) => {
        res.status(400).json({ error: 'Error creating restaurant collection' });
        });
}

module.exports = { createRestaurant }