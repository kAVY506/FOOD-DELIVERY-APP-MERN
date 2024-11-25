const express = require('express');
const { approveRestaurant, getAllUsers } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.patch('/approve', authMiddleware, roleMiddleware(['Admin']), approveRestaurant);
router.get('/users', authMiddleware, roleMiddleware(['Admin']), getAllUsers);

module.exports = router;
