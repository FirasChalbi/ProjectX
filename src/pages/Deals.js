import React, { useEffect, useState } from 'react';
//import ProductProfile from '../components/ProductProfile';
import Sidebar from '../components/Sidebar';
import { TopDeals } from '../components/TopDeals';
import ProductDeals from '../components/ProductDeals';
import './deals.css';


function MatchedProducts() {

  const [matchedProducts, setMatchedProducts] = useState([]);

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
        <TopDeals titre="Filter by store" />
        <div className='container2' style={{ gap: '10px', marginTop: "30px"}}>
        <h2>Daily Deals</h2>
        <div className="tile">
          <div className="products-grid-cn">
            <div className="products-grid">
              {matchedProducts.map((product, index) => (
                <ProductDeals
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
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default MatchedProducts;
