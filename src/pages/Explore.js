import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductExplore';
import './explore.css'
import Sidebar from '../components/Sidebar';

function MatchedProducts() {
  const [matchedProducts, setMatchedProducts] = useState([]);

  useEffect(() => {
    // Make an HTTP request to your Node.js server endpoint
    fetch('http://localhost:4000/api/test') // Update the endpoint as needed
      .then((response) => response.json())
      .then((data) => {
        setMatchedProducts(data);
        console.log('hi')
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array means this effect runs once on component mount

  return (
    <div>
      <Sidebar />
      
    <div className='tile'>
    
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: "40px"
        }}
      >
      
      <div className="flow-items" style={{gap:"10px",textAlign: "left" }}><h2>What's Popular</h2></div>
      <div className='products-grid-cn' style={{width:"70%"}}>
    <div className='products-grid'> 
        {matchedProducts.map((product, index) => (
          
            <ProductItem key={product.shop1Product._id} index={index + 1} productData={product} />
          
        ))}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default MatchedProducts;
