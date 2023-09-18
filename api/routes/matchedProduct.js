// Import required libraries and modules
const fuzz = require('fuzzball'); // Import the fuzzball library
const express = require('express');
const router = express.Router();
const { matchProducts } = require('../utils/productUtils'); // Import the matchProducts function
const Carrefour = require('../models/Carrefour'); // Import the Carrefour model
const Monoprix = require('../models/Monoprix'); // Import the Monoprix model
const async = require('async'); // Import the async library
const LRUCache = require('lru-cache'); // Import the lru-cache library

// Create an LRU cache with a maximum size
const cache = new LRUCache({ max: 5000 }); // Adjust the maximum size as needed

// Create a Set for deduplication
const deduplicatedProducts = new Set();

// Define a route for matching products
router.get('/', async (req, res) => {
  try {
    // Fetch a sample of products from Carrefour and Monoprix
    const [carrefourProducts, monoprixProducts] = await Promise.all([
      Carrefour.aggregate([{ $sample: { size: 1500 } }]), // Sample 100 products
      Monoprix.aggregate([{ $sample: { size: 1500 } }]), // Sample 100 products
    ]);

    // Match products asynchronously
    const batchSize = 150; // Adjust the batch size as needed
    const matchedProducts = [];

    // Define a function to match a batch of products
    const matchBatch = async (carrefourBatch) => {
      const batchMatches = [];

      for (const product1 of carrefourBatch) {
        for (const product2 of monoprixProducts) {
          // Check if the similarity score is already in the cache
          const cacheKey = `${product1._id}-${product2._id}`;
          let similarityScore = cache.get(cacheKey);
          let similarityScore2 = 0; // Initialize the brand similarity score to 0

          if (similarityScore === undefined) {
            // Calculate the similarity scores if they're not in the cache
            similarityScore = fuzz.token_sort_ratio(product1.name, product2.name);
            similarityScore2 = fuzz.token_sort_ratio(product1.brand, product2.brand);

            cache.set(cacheKey, similarityScore); // Cache the name similarity score
          }

          // Set a threshold for considering names and brands as similar (adjust as needed)
          const nameThreshold = 70;
          const brandThreshold = 70;

          if (similarityScore >= nameThreshold && similarityScore2 >= brandThreshold && product1.size == product2.size) {
            const uniqueProductIdentifier = `${product1._id}-${product2._id}`;

            // Check if the product is already in the deduplicated set
            if (!deduplicatedProducts.has(uniqueProductIdentifier)) {
              // Add the product to the matched list and the deduplicated set
              batchMatches.push({
                shop1Product: product1,
                shop2Product: product2,
                similarityScoreName: similarityScore,
                similarityScoreBrand: similarityScore2,
              });

              deduplicatedProducts.add(uniqueProductIdentifier);
            }
          }
        }
      }

      return batchMatches;
    };

    // Divide the Carrefour products into batches and match each batch asynchronously
    const carrefourBatches = [];
    for (let i = 0; i < carrefourProducts.length; i += batchSize) {
      carrefourBatches.push(carrefourProducts.slice(i, i + batchSize));
    }

    await async.eachLimit(carrefourBatches, 5, async (batch) => {
      const matches = await matchBatch(batch);
      matchedProducts.push(...matches);
    });

    // Return the matched products as JSON
    res.json(matchedProducts);
  } catch (error) {
    console.error('Error fetching products or matching:', error);
    res.status(500).json({ error: 'Error fetching products or matching' });
  }
});

module.exports = router;


