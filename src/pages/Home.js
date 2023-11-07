import React, { useState, useEffect } from 'react';
import ProductContent from '../components/ProductItem'; // Import the ProductContent component
import Sidebar from '../components/Sidebar';
//import SemiCircleIcon from '../components/SemiCircleIcon';
//import icon from '../image/discount.svg'


function Home() {
  const [matchedProducts, setMatchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make an HTTP request to your Node.js server endpoint
    fetch('https://barkaa-service.onrender.com/api/test') // Update the endpoint as needed
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
          padding: "0 20px", // Desktop padding
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
