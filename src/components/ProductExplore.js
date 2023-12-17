import React from 'react';
import './productExplore.css'
import add from '../image/add.svg'

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
          <svg className='icon add' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#0F0F0F"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"/>
          </svg>
          <svg className="icon added" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C6.4 15.36 4 12.28 4 9.5 4 6.42 6.42 4 9.5 4c1.74 0 3.41.81 4.5 2.09C16.09 4.81 17.76 4 19.5 4 22.54 4 24 6.46 24 9.5c0 2.78-2.4 5.86-6.55 10.54L12 21.35z" />
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
        <div className="_name">{productData.shop1Product.name}</div>
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
