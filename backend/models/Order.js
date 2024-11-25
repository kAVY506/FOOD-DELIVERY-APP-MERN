const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu.items', required: true },
        quantity: { type: Number, required: true },
    }],
    status: { type: String, enum: ['New', 'Preparing', 'Out for Delivery', 'Delivered'], default: 'New' },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
