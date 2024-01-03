import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../components/Filter';
import ProductExplore from '../components/ProductExplore';

export const Search = () => {
  const location = useLocation();
  const matchedProducts = location.state?.matchedProducts || [];

  const [isLoading, setIsLoading] = useState(false);

  const handleAddToProduct = async (productData, listId) => {
    try {
      const productId = productData._id;
  
      // Check if productId is null or undefined
      if (!productId) {
        console.error('Product ID is null or undefined.');
        return;
      }
  
      console.log('Product ID:', productId); // Add this line for debugging
  
      setIsLoading(true);
  
      const response = await fetch(`https://barkaa-service.onrender.com/api/lists/${listId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productData._id,
          // Add any other necessary data you want to send to the backend
        }),
        credentials: 'include',
      });
  
      if (!response.ok) {
        console.error('Error adding product to list:', response.statusText);
        // Handle error as needed, maybe show an error message to the user
        return;
      }
  
      // Product successfully added to the list
      console.log('Product added to list:', response);
      console.log('Adding product to list:', productData, 'List ID:', listId);
  
      // Optionally, you can provide user feedback here, e.g., show a success message
    } catch (error) {
      console.error('Error adding product to list:', error);
      // Handle error as needed, maybe show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className='parent'>
      <Filter />  
      <section id="search-results">
        <div className="tile">
          <div className="products-grid-cn">
            <div className="products-grid">
              {matchedProducts.map((product, index) => (
                <ProductExplore
                  key={product._id}
                  index={index + 1}
                  productData={product}
                  onAddToProduct={(productData, listId) => handleAddToProduct(productData, listId)}
                  isLoading={isLoading}
                />
              ))}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
