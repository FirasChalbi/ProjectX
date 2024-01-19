import React from 'react';
import './productExplore.css';
import CF from '../image/carrefour.svg';
import MP from '../image/monoprix.svg';

function ProductItem({ productData, onAddToProduct }) {
  const encodedData = encodeURIComponent(JSON.stringify(productData));

  const productClick = (e) => {
    // Implement your logic for product click here
  };

  const handleAddToList = async (event) => {
    event.stopPropagation();
    event.preventDefault();
  
    const list = await get_list_menu(event.target);
    
    // Check if list is not null before calling onAddToProduct
    if (list) {
      onAddToProduct(productData, list._id); // Assuming list object has an '_id' property
      console.log(list._id)
    }
  };
  
  const get_list_menu = async (target) => {
    try {
      const response = await fetch('https://barkaa-service.onrender.com/api/lists', {
        credentials: 'include', // Include credentials for authenticated requests
      });
  
      if (!response.ok) {
        console.error('Error fetching lists:', response.statusText);
        return null;
      }
  
      const lists = await response.json();
  
      if (lists.length === 0) {
        const createListConfirmation = window.confirm('You have no lists. Do you want to create one?');
        if (createListConfirmation) {
          // Implement logic to create a new list
        }
        return null;
      } else {
        const selectedList = window.prompt('You have multiple lists. Enter the name of the list to add the product:');
        if (selectedList === null) {
          return null;
        }
  
        const matchingList = lists.find((list) => list.name === selectedList);
        if (matchingList) {
          return matchingList;
        } else {
          alert('List not found. Please enter a valid list name.');
          return null;
        }
      }
    } catch (error) {
      console.error('Error fetching lists:', error);
      return null;
    }
  };
  
  const getCheapestShop = () => {
    const shop1Product = productData.shop1Product;
    const shop2Product = productData.shop2Product;

    const price1 = parseFloat(shop1Product.product_price.replace(',', ''));
    const price2 = parseFloat(shop2Product.product_price.replace(',', ''));

    return price1 < price2 ? shop1Product : shop2Product;
  };

  const cheapestShop = getCheapestShop();

  return (
    <div className="product-item lazy_js" data-id={productData.shop1Product.id}>
        <div class="_time">10 mins ago</div>
      <a
        className="product-link"
        href={`/product/${productData.shop1Product._id}?data=${encodedData}`}
        onClick={productClick}
        title={productData.shop1Product.name}
      >
        <div className="_img">
          <button className="_add js-add_to_list_menu" data-id={productData.shop1Product.id} onClick={handleAddToList}>
            <svg className='icon add' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#0F0F0F"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"/>
            </svg>
            <svg className="icon added" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C6.4 15.36 4 12.28 4 9.5 4 6.42 6.42 4 9.5 4c1.74 0 3.41.81 4.5 2.09C16.09 4.81 17.76 4 19.5 4 22.54 4 24 6.46 24 9.5c0 2.78-2.4 5.86-6.55 10.54L12 21.35z" />
            </svg>
          </button>
          <img className="imgprod" src={productData.shop1Product.imageSrc} loading="lazy" alt="Product"/>
        </div>
        <div className="_tag" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <div className="_size">
            <div>{productData.shop1Product.size}</div>
          </div>
        </div>
        <div className="_info">
          <div className="_brand">{productData.shop1Product.brand}</div>
          <div className="_name">{productData.shop1Product.name}</div>
          <div className="_desc">{productData.shop1Product.description}</div>
          <div className="_reviews">
            <div className="Stars" style={{ '--rating': 3.4 }} aria-label="Rating of this product is 2.3 out of 5.">
              {/* Your content goes here */}
            </div>
            <div className="count">129</div>
          </div>
          <div className="_price">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', textTransform: 'uppercase' }}>
              <div className="_store_logo">
                <img
                  style={{ marginBottom: '7px' }}
                  src={cheapestShop.shop_name === "Carrefour" ? CF : MP}
                  alt={cheapestShop.shop_name}
                  className="store-logo -waitrose"
                />
              </div>
            </div>
            {cheapestShop.product_price}
            <div class="_saving -price-changes -less"><strike>4,250 DT</strike> &nbsp;1.75 DT less</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductItem;
