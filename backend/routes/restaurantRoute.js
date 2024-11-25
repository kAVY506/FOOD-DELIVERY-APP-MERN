const express = require('express');
const { createRestaurant, getAllRestaurants, addMenuItems } = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['Restaurant Owner']), createRestaurant);
router.get('/', getAllRestaurants);
router.post('/menu', authMiddleware, roleMiddleware(['Restaurant Owner']), addMenuItems);

module.exports = router;
