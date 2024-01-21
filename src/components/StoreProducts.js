import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ProductDeals from './ProductDeals';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const StoreProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
  
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
    const fetchData = async () => {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/api/match-products');
        const data = await response.json();
        setMatchedProducts(data);
        
      } catch (error) {
        
        console.error('Error adding product to list:', error);
      }
    };

    fetchData(); // Fetch initial data

    return () => {
      // Cleanup or perform any necessary actions on component unmount
    };
  }, []);

  return (
    <div className='ok'>  
    <div className='okk'>
    <Sidebar />
    
    <div style={{paddingLeft:'20px', width:"fit-content"}}>
        
        <div className='container2' style={{ gap: '10px', marginTop: "30px"}}>
        <div className="flow-items" style={{gap:'15px', cursor:'pointer'}}>
            <div className="_back" onClick={() => navigate(-1)}>
                <svg className="icon -size-xs" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
            </div>
            <h2>Daily Deals at {id}</h2>
        </div>
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
};

export default StoreProducts;
