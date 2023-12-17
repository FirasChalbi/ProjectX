import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../components/Filter';
import ProductExplore from '../components/ProductExplore'; // Import your ProductItem component

export const Search = () => {
  const location = useLocation();
  const matchedProducts = location.state?.matchedProducts || [];

  return (
    <div className='parent'>
      <Filter />
      <section id="search-results"><div class="tile"><div class="products-grid-cn"><div class="products-grid">
      {matchedProducts.map((product, index) => (
            <ProductExplore key={product.shop1Product._id} index={index + 1} productData={product} />
          ))}
        </div></div></div></section>
      
        
    </div>
  );
};
