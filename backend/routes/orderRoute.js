const express = require('express');
const { placeOrder, getUserOrders, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/', authMiddleware, getUserOrders);
router.patch('/status', authMiddleware, updateOrderStatus);

module.exports = router;
