function editRestaurant(req, res, repo) {
    const { name, description, address, cuisine, user_id } = req.body;
    const restaurantId = req.params.id;
    const userId = user_id

    // Validate the input data
    if (!userId || !restaurantId) {
        return res.status(400).json({ error: 'Missing user_id or restaurant_id' });
    }

    // Get restaurant first
    repo.getRestaurantById(restaurantId)
    .then(
        restaurant => {
            if (restaurant.user_id != userId) {
                res.status(400).json({ error: 'User is not the restaurant owner' });
                return
            }

            repo.editRestaurant(name, description, address, cuisine, restaurantId)
            .then(
                (ok, err) => {
                    res.status(200).json({success: true});
                    return
                }
            )
            .catch(
                (ok, err) => {
                res.status(400).json({ error: 'Error editing restaurant collection' });
                return
                }
            );
        }
    )
    .catch(err => {
        res.error(err)
    })
}

module.exports = { editRestaurant }