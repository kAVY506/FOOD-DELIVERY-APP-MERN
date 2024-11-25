const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
    const { name } = req.body;
    try {
        const restaurant = await Restaurant.create({ name, owner: req.user.id });
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: 'Error creating restaurant' });
    }
};

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find().populate('menu');
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching restaurants' });
    }
};

// Add menu items to a restaurant
exports.addMenuItems = async (req, res) => {
    const { restaurantId, items } = req.body;
    try {
        const menu = await Menu.create({ restaurant: restaurantId, items });
        await Restaurant.findByIdAndUpdate(restaurantId, { $push: { menu: menu._id } });
        res.status(201).json(menu);
    } catch (error) {
        res.status(400).json({ message: 'Error adding menu items' });
    }
};
