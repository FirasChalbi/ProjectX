import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import Sidebar from '../components/Sidebar';
import { TopDeals } from '../components/TopDeals';

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
   // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/api/match-products');
        const data = await response.json();
        setAllProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData(); // Fetch initial data

    return () => {
      // Cleanup or perform any necessary actions on component unmount
    };
  }, []); // Empty dependency array to ensure it runs only once

  useEffect(() => {
    // Display a random set of 20 products when allProducts is available
    if (allProducts.length > 0) {
      const randomProducts = getRandomProducts(allProducts, 20);
      setDisplayedProducts(randomProducts);
    }
  }, [allProducts]);

  const getRandomProducts = (sourceArray, count) => {
    const shuffledArray = sourceArray.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };

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
  
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='parent'>
      <Sidebar />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '0 20px', // Desktop padding
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TopDeals titre={"Today's Top Deals"} />
          {displayedProducts.map((product, index) => (
            <ProductItem
              key={index}
              index={index + 1}
              productData={product}
              onAddToProduct={(productData, listId) => handleAddToProduct(productData, listId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
