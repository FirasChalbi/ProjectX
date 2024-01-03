// routes/lists.js
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/auth');
const {
  createList,
  getUserLists,
  addProductToList,
  getSpecificList,
} = require('../controllers/lists');

// Create a new list
router.post('/', ensureAuthenticated, createList);

// Get user's lists
router.get('/', ensureAuthenticated, getUserLists);

// Get a specific list
router.get('/:listId', ensureAuthenticated, getSpecificList);

// Add a product to a list
router.post('/:listId', ensureAuthenticated, addProductToList);

module.exports = router;
