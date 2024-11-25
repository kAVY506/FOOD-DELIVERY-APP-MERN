const Restaurant = require('../models/Restaurant');
const User = require('../models/User');

// Approve restaurant
exports.approveRestaurant = async (req, res) => {
    const { restaurantId } = req.body;
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, { isApproved: true }, { new: true });
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: 'Error approving restaurant' });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users' });
    }
};
