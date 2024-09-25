const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
require('./db/connection');

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});