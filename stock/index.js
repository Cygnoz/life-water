const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./db/connection'); 

// Import routes
const stockRoutes = require('./routes/router.js'); 

app.use(cors())
app.use(express.json());

// Routes
app.use('/api', stockRoutes); 


// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server listen
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
