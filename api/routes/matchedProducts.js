// routes/matchedProducts.js
const express = require('express');
const router = express.Router();
const MatchedProduct = require('../models/Product');

// Route to get all matched products
router.get('/', async (req, res) => {
  try {
    const matchedProducts = await MatchedProduct.find();
    res.json(matchedProducts);
  } catch (err) {
    console.error('Error fetching matched products:', err);
    res.status(500).json({ error: 'Error fetching matched products' });
  }
});

module.exports = router;
