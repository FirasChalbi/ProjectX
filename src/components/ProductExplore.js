import React from 'react';
import './productExplore.css'

function ProductItem({ productData }) {
  const get_list_menu = (target) => {
    // Your implementation of get_list_menu here
    // This is where you would add your logic for handling the click event
  };

  const handleAddToList = (event) => {
    event.stopPropagation();
    event.preventDefault();
    get_list_menu(event.target);
  };

  return (
    <div className="product-item lazy_js" data-id={productData.shop1Product.id}>
      <a href={`/product/aperol-aperitivo-11-abv-italian-spritz-cocktail/${productData.shop1Product.id}`} title="Italian Spritz Aperitif 11% ABV Cocktail (100cl)">
        <div className="_img">
          <div className="overlay"></div>
          <button className="_add js-add_to_list_menu" data-id={productData.shop1Product.id} onClick={handleAddToList}>
            <svg className="icon add">
              <use xlinkHref="#svg_add"></use>
            </svg>
            <svg className="icon added">
              <use xlinkHref="#svg_added"></use>
            </svg>
          </button>
          <img className="prod-img" src={productData.shop1Product.imageSrc} loading="lazy" alt="Product" style={{height:"300px", width:"300px", marginTop:"-25%"}}/>
        </div>
        <div className="_tag" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <div className="_size">
            <div>{productData.shop1Product.size}</div>
          </div>
        </div>
        <div className="_info">
          <div className="_brand">{productData.shop1Product.brand}</div>
          <div className="_desc">{productData.shop1Product.description}</div>
          <div className="_reviews">
            <div>
              <span className="-filled" style={{ width: '55px' }}>
                <svg className="icon">
                  <use xlinkHref="#svg_rating"></use>
                </svg>
              </span>
              <svg className="icon">
                <use xlinkHref="#svg_rating"></use>
              </svg>
            </div>
            <div className="count">129</div>
          </div>
          <div className="_price">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', textTransform: 'uppercase' }}>{productData.shop1Product.product_price}</div>
            <div className="_per-item">1 DT per 100ml</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductItem;
