// models/MatchedProduct.js
const mongoose = require('mongoose');

const matchedProductSchema = new mongoose.Schema({
  shop1Product: {
    _id: {
      $oid: String,
    },
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
  },
  shop2Product: {
    _id: {
      $oid: String,
    },
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
  },
  similarityScoreName: Number,
  similarityScoreBrand: Number,
}, {
  timestamps: true,
});

const MatchedProducts = mongoose.model('MatchedProducts', matchedProductSchema, 'MatchedProducts');

module.exports = MatchedProducts;
