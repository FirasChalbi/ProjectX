const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Define your product model

router.get('/api/search', async (req, res) => {
  const searchQuery = req.query.q;

  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: new RegExp(searchQuery, 'i') } },
        // Add more fields to search as needed
      ],
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
