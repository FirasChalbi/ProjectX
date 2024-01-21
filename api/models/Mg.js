const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  time_added: { type: Date, default: Date.now }, 
});

const Mg = mongoose.model('MG', productSchema, 'MG');

module.exports = Mg;
