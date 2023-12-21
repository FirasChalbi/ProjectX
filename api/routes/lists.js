// routes/lists.js
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/auth'); // Adjust the path accordingly
const {
  createList,
  getUserLists,
  addProductToList,
} = require('../controllers/lists'); // Adjust the path accordingly

// Create a new list
router.post('/', ensureAuthenticated, createList);

// Get user's lists
router.get('/', ensureAuthenticated, getUserLists);

// Add a product to a list
router.post('/:listId/products', ensureAuthenticated, addProductToList);

module.exports = router;
