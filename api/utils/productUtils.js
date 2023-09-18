const fuzz = require('fuzzball');

function matchProducts(shop1Products, shop2Products) {
  const matchedProducts = [];

  for (const product1 of shop1Products) {
    for (const product2 of shop2Products) {
      // Calculate a similarity score between the two product names
      const similarityScore = fuzz.token_sort_ratio(product1.name, product2.name);
      const similarityScore2 = fuzz.token_sort_ratio(product1.brand, product2.brand);
      // Set a threshold for considering names as similar (adjust as needed)
      const threshold = 50;

      if (
        similarityScore >= threshold &&
        similarityScore2 >= threshold 
      ) {
        matchedProducts.push({
          shop1Product: product1,
          shop2Product: product2,
          similarityScore: similarityScore, // Optionally store the similarity score
        });
      }
    }
  }

  return matchedProducts;
}

module.exports = {
  matchProducts,
};
