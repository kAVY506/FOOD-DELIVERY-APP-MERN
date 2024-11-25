const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');
const restaurantRoutes = require('./routes/restaurantRoute');
const orderRoutes = require('./routes/orderRoute');
const adminRoutes = require('./routes/adminRoute');
const config = require('./config/config');
const cors = require('cors');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
