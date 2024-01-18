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

// Route to get a specific product by ID
router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const matchedProduct = await MatchedProduct.findById(productId);

    if (!matchedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(matchedProduct);
  } catch (err) {
    console.error(`Error fetching product with ID ${productId}:`, err);
    res.status(500).json({ error: 'Error fetching product' });
  }
});

module.exports = router;
