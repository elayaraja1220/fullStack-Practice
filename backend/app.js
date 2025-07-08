const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productRoutes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.get('/', (req, res) => {
  res.send('🚀 Backend API is running!');
});

module.exports = app;