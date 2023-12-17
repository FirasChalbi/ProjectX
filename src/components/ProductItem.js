import React from 'react';
import numeral from 'numeral';
import add from '../image/add.svg'
import added from '../image/added.svg'
import share from '../image/share.svg'

import CF from '../image/carrefour.svg';
import MP from '../image/monoprix.svg';

import './item.css';

export default function ProductContent({ index, productData }) {

  // Convert the product prices to numerical values
  const price1 = numeral(productData.shop1Product.product_price.replace(' dt', '').replace(',', '')).value() || 0;
  const price2 = numeral(productData.shop2Product.product_price.replace(' dt', '').replace(',', '')).value() || 0;

  // Determine which shop has the minimum price
  let minPriceShop = '';
  let minPrice = 0;
  
  if (price1 < price2) {
    minPriceShop = productData.shop1Product.shop_name;
    minPrice = price1;
  } else {
    minPriceShop = productData.shop2Product.shop_name;
    minPrice = price2;
  }

  // Calculate the price difference
  const priceDifference = Math.max(price1, price2) - Math.min(price1, price2);

  // Calculate the real percentage difference
  const percentageDifference = ((priceDifference / minPrice) * 100).toFixed(0);

  // Format the price difference as a string with leading zeros and commas as thousands separators
  const formattedPriceDifference = `0,${priceDifference.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} dt`;



  const encodedData = encodeURIComponent(JSON.stringify(productData));
  // Your existing functions for click handlers
  const productClick = (e) => {
    // Implement your logic for product click here
  };
  
  const fypStoreClick = (e) => {
    // Implement your logic for store click here
  };
  
  const fypAddToList = (e) => {
    // Implement your logic for adding to the list here
  };
  
  const fypShare = (e) => {
    // Implement your logic for sharing here
  };
  
  return (
    <div n="1" p="1" className="product-content lazy_js -opacity-1 seen-done tv-done" data-id={productData.shop1Product.id}>
      <div>
        <div className="prod-item">
          <a
            className="product-link"
            href={`/product/${productData.shop1Product._id}?data=${encodedData}`}
            onClick={productClick}
            title={productData.shop1Product.name}
          >
            {/* Render product information using productData */}
            <div className="_img">
            <div className="overlay"></div>
              <div className="count">{index}</div>
              <div className="_tag_cn -active">
                <div className="_tag _percent -active">Économisez {formattedPriceDifference} chez {minPriceShop}</div>
                <div className="_tag _percent -active">{percentageDifference}% Moins Cher</div>
              </div>
              <img className="prod-img" src={productData.shop1Product.imageSrc} alt={productData.shop1Product.imageSrc} />
            </div>
          </a>
          
          <div className="product-items">
          <div className="_item toolbar more pc-only">
              <div className="js-add_to_list_menu" onClick={fypAddToList} data-id="CTS136" >
                <button className="add"  style={{display:"flex", flexDirection:"column"}}>
                  <div>
                    <img style={{ marginTop: '5px',marginRight: "6px" }}  src={add} alt="Add Icon" className="icon" /> {/* Use the imported SVG */}
                  </div>
                  <div className='txt'>List</div>
                </button>
                <button className="added" >
                  <div>
                    <img src={added} alt="Add Icon" className="icon" /> {/* Use the imported SVG */}
                  </div> <div className='txt'>List</div>
                </button>
              </div>
              <button onClick={() => fypShare('/product/viakal-spray/CTS136', 'CTS136', 'Viakal Classic Limescale Remover Spray Bathroom Cleaning')} style={{display:"flex", flexDirection:"column"}}>
              <img style={{ width: '35px', height: '35px' }} src={share} alt="Add Icon" className="icon" /> {/* Use the imported SVG */}
              <div className='txt'>Share</div>
              </button>
            </div>
            <div className="_item -prod_names">
              <a href={`/product/${productData.shop1Product._id}?data=${encodedData}`} onClick={productClick} title={productData.shop1Product.name}>
                {/* Product name and brand */}
                <div className="_brand">{productData.shop1Product.brand}</div>
                <div className="_title">{productData.shop1Product.name}</div>
              </a>
              <div className="tag_bar">
                {/* Product size */}
                <div className="tag _size">{productData.shop1Product.description}</div>
              </div>
            </div>
            <div className="_item -stores">
                <h3 className="store_title">Disponible à</h3>
                <div className="_stores">
                    <a
                      className="_store_item"
                      href={productData.shop1Product.product_url}
                      data-store={productData.shop1Product.shop_name}
                      onClick={fypStoreClick}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="_store_logo">
                        <img
                          style={{ marginBottom: '7px' }}
                          src={CF}
                          alt={productData.shop1Product.shop_name}
                          className="store-logo -waitrose"
                        />
                      </div>
                      <div className="_store_price">{productData.shop1Product.product_price}</div>
                    </a>
                  
                    <a
                      className="_store_item"
                      href={productData.shop2Product.product_url}
                      data-store={productData.shop2Product.shop_name}
                      onClick={fypStoreClick}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="_store_logo">
                        <img
                          style={{ marginBottom: '7px' }}
                          src={MP}
                          alt={productData.shop2Product.shop_name}
                          className="store-logo -waitrose"
                        />
                      </div>
                      <div className="_store_price">{productData.shop2Product.product_price}</div>
                    </a>

                  
                </div>
              </div>

            {/* Additional sections
            {productData.stores.length > 3 && (
                    <div className="more-stores" style={{fontWeight:"400"}}>
                      +{productData.stores.length - 3} <br/>STORES
                    </div> */}
            {/* <div className="_item -reviews"> 
              <h3>What people say</h3>
              <div className="_reviews">
                <div>
                  <span className="-filled" style={{ width: '58px' }}>
                    
                  </span>
                  <svg className="icon">
                    <use xlinkHref="#svg_rating"></use>
                  </svg>
                </div>
                
                <div className="count">{productData.reviews.count} reviews from 9 shops</div>
                <div className="-review" style={{ maxWidth: '650px' }}>{productData.reviews.reviewText}</div>
              </div>
                </div> */}
            <div className="_item -reviews">
              <h3>What people say</h3>
              <div className="_reviews">
                <div>
                  <span className="-filled" style={{ width: '58px' }}>
                    <svg className="icon">
                      <use xlinkHref="#svg_rating"></use>
                    </svg>
                  </span>
                  <svg className="icon">
                    <use xlinkHref="#svg_rating"></use>
                  </svg>
                </div>
                <div className="count">12,550 reviews from 9 shops</div>
              </div>
              <div>
                <div className="-review" style={{ maxWidth: '650px' }}>“I love this it works great even on tough disgusting showers, it makes it clean straight away”</div>
              </div>
            </div>
            <div className="_item toolbar mobile-only">
              <div className="js-add_to_list_menu" onClick={fypAddToList} data-id="CTS136">
                <button className="add">
                  <div>
                    <img style={{ marginTop: '5px',marginRight: "6px" }}  src={add} alt="Add Icon" className="icon" /> {/* Use the imported SVG */}
                  </div>
                  <div className='txt'>List</div>
                </button>
                <button className="added">
                  <div>
                    <img src={added} alt="Add Icon" className="icon" /> {/* Use the imported SVG */}
                  </div> <div className='txt'>List</div>
                </button>
              </div>
              <button onClick={() => fypShare('/product/viakal-spray/CTS136', 'CTS136', 'Viakal Classic Limescale Remover Spray Bathroom Cleaning')} style={{}}>
              <img style={{ width: '35px', height: '35px' }} src={share} alt="Add Icon" className="icon" /> {/* Use the imported SVG */}
              <div className='txt'>Share</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
