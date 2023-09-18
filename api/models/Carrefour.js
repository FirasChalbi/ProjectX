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
// const Product = mongoose.model('Product', productSchema);
const Carrefour = mongoose.model('Carrefour', productSchema, 'Carrefour'); // Specify collection name here


module.exports = Carrefour;
