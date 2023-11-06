import React, { useState, useEffect } from 'react';
//import ProductProfile from '../components/ProductProfile';
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
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ></div>
      <h1>Matched Products</h1>
      <ul>
        {matchedProducts.map((product, index) => (
          <li key={index}>
            <p>
              Shop 1:
              Name: {product.shop1Product.name} -
              Brand: {product.shop1Product.brand} -  
              Size: {product.shop1Product.size} -  
              <a href={product.shop1Product.product_url} rel="noreferrer noopener" target="_blank">LINK</a>
            </p>
            <p>
              Shop 2:
              Name: {product.shop2Product.name} -
              Brand: {product.shop2Product.brand} -
              Size: {product.shop2Product.size} - 
              <a href={product.shop2Product.product_url} rel="noreferrer noopener" target="_blank">LINK</a>
            </p>
            Similarity Score: {product.similarityScore}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default MatchedProducts;
