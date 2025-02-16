const express = require('express');
const cors = require('cors');
require('dotenv').config();

// make sure this comes AFTER dotenv config
const productsRouter = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');

const pool = require('./database');

const app = express();

// Middleware
// setup for RESTFul API
// disable global express.json so that it won't interfere
// with the webhook
// app.use(express.json()); // indicate that we are reciving JSON payloads in requests
app.use(cors()); // enable cross origin resources sharing

// Routes
app.use('/api/products', express.json(), productsRouter);
app.use('/api/users', express.json(), userRoutes);
app.use('/api/cart', express.json(), cartRoutes);
app.use('/api/checkout', checkoutRoutes);

// app.use('/api/products', productsRouter);
// app.use('/api/users', userRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/checkout', checkoutRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.listen(4242, () => console.log('Running on port 4242'));
