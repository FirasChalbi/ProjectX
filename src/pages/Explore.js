import React, { useState, useEffect } from 'react';
import ProductExplore from '../components/ProductExplore';
import './explore.css'
import Sidebar from '../components/Sidebar';

function MatchedProducts() {
  const [matchedProducts, setMatchedProducts] = useState([]);

  useEffect(() => {
    // Make an HTTP request to your Node.js server endpoint
    fetch('https://barkaa-service.onrender.com/api/match-products') // Update the endpoint as needed
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
<div className='ok'>  
<div className='okk'>
<Sidebar />

<div style={{paddingLeft:'20px', width:"fit-content"}}>
    <div className='container2' style={{ gap: '10px', marginTop: "30px"}}>

    <div className="flow-items" style={{gap:"10px",textAlign: "left" }}><h2>What's Popular</h2></div>
    <div className="tile">
      <div className="products-grid-cn">
        <div className="products-grid">
        {matchedProducts.map((product, index) => (          
          <ProductExplore key={product.shop1Product._id} index={index + 1} productData={product} />        
      ))}          
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

</div>


  );
}

export default MatchedProducts;
