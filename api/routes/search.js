// routes/search.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const searchQuery = req.query.q;

  try {
    if (!searchQuery) {
      return res.status(400).json({ error: 'Bad Request - Missing search query' });
    }

    const products = await Product.find({
      $or: [
        { 'shop1Product.name': { $regex: new RegExp(searchQuery, 'i') } },
        { 'shop2Product.name': { $regex: new RegExp(searchQuery, 'i') } },
        // Add more fields to search as needed
      ],
    });

    res.json(products);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
