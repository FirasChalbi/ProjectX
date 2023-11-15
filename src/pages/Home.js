import React, { useState, useEffect } from 'react';
import ProductContent from '../components/ProductItem';
import Sidebar from '../components/Sidebar';
import { TopDeals } from '../components/TopDeals';


function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
          <TopDeals />
          {displayedProducts.map((product, index) => (
            <ProductContent key={index} index={index + 1} productData={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
