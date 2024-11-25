const Order = require('../models/Order');

// Place an order
exports.placeOrder = async (req, res) => {
    const { restaurantId, items } = req.body;
    try {
        const order = await Order.create({ user: req.user.id, restaurant: restaurantId, items });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error placing order' });
    }
};

// Get orders for a user
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('restaurant').populate('items.item');
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching orders' });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error updating order status' });
    }
};
