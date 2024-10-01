const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
require('./db/connection'); // Ensure the path to your MongoDB connection is correct

// Import routes
const staffRoutes = require('./routes/router.js'); // Adjust the path based on your project structure
const routeRoute = require('./routes/router.js');
const vehicleRoute = require('./routes/router.js');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', staffRoutes); // This prefixes all your staff routes with '/api'
app.use('/api', routeRoute);
app.use('/api',vehicleRoute);

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
