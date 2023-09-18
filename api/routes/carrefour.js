// src/routes/products.js
const express = require('express');
const router = express.Router();
const Carrefour = require('../models/Carrefour'); // Import the Product model

// Route to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Carrefour.find(); // Retrieve all products from MongoDB
    res.json(products); // Send the products as a JSON response
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

module.exports = router;
    