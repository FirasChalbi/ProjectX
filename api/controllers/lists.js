// controllers/lists.js
const List = require('../models/List');
const Product = require('../models/Product'); // You may need to adjust the path

// Create a new list
exports.createList = async (req, res) => {
  const { name } = req.body;
  const userId = req.user._id;

  try {
    const newList = await List.create({ name, user: userId });
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get user's lists
exports.getUserLists = async (req, res) => {
  const userId = req.user._id;

  try {
    const userLists = await List.find({ user: userId });
    res.json(userLists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Add a product to a list
exports.addProductToList = async (req, res) => {
  const { productId } = req.body;
  const { listId } = req.params;

  try {
    // Check if the product exists
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the list with the product
    const updatedList = await List.findByIdAndUpdate(
      listId,
      { $push: { products: productId } },
      { new: true }
    );

    // Add the product to the user's product list
    await product.updateOne({ $push: { lists: listId } });

    res.json(updatedList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get a specific list
exports.getSpecificList = async (req, res) => {
  const { listId } = req.params;

  try {
    const list = await List.findById(listId);
    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};