import React, { useState, useEffect } from 'react';
import ProductContent from '../components/ProductItem'; // Import the ProductContent component
import Sidebar from '../components/Sidebar';

function Home() {
  const [matchedProducts, setMatchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make an HTTP request to your Node.js server endpoint
    fetch('http://localhost:4000/api/test') // Update the endpoint as needed
      .then((response) => response.json())
      .then((data) => {
        setMatchedProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
        paddingLeft: "30px"
        
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      
      
        {matchedProducts.map((product, index) => (
          
            <ProductContent key={product.shop1Product._id} index={index + 1} productData={product} />
          
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
