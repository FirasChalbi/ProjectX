const mongoose = require('mongoose');

  const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Use ObjectId for unique IDs
    name: String,
    brand: String,
    imageSrc: String,
    description: String,
    size: String,
    category: String,
    regular_price: String,
    product_price: String,
    product_url: String,
    promo: String,
    shop_name: String,
  });
// Define the model based on the schema
const Monoprix = mongoose.model('Monoprix', productSchema, 'Monoprix'); // Specify collection name here

module.exports = Monoprix;
