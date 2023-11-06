import React, { useState } from 'react';
import down from '../image/down.svg';
import info from '../image/info.svg';
import CF from '../image/carrefour.svg';
import MP from '../image/monoprix.svg';
import './wheretobuy.css';

function WhereToBuy({ data }) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  
  const shop1Product = data.shop1Product;
  const shop2Product = data.shop2Product;

  const items = [
    {
      logo: CF,
      price: shop1Product.product_price,
      discountPrice: shop1Product.regular_price,
      perItemPrice: shop1Product.size,
      offer: shop1Product.promo,
      link: shop1Product.product_url,
    },
    {
      logo: MP,
      price: shop2Product.product_price,
      discountPrice: shop2Product.regular_price,
      perItemPrice: shop2Product.size,
      offer: shop2Product.promo,
      link: shop2Product.product_url,
    },
    
  ];

  const filteredItems = showAll ? items : items.slice(0, 3);

  return (
    <section>
      <div className="tile">
        <div className="flow-items -space-between">
          <h2>Where To Buy</h2>
        </div>
        <div className={`comparison-table ${showAll ? '-active' : ''}`} style={{ maxHeight: '303px' }}>
          {filteredItems.map((item, index) => (
            <div className="_item" key={index}>
              <div>
                <img
                  style={{ marginBottom: '7px' }}
                  src={item.logo}
                  alt="Store Logo"
                  className="store-logo -waitrose"
                />
                <div className="_store-opening -color-grey"></div>
              </div>
              <div style={{ paddingLeft: "20%"}}>
                <div className="_price">
                  <b>{item.price} <del>{item.discountPrice}</del></b>
                  <br />
                  <div className="_per-item -color-grey">{item.perItemPrice}<br /></div>
                </div>
                {item.offer && <div className="_product-offer">{item.offer}</div>}
              </div>
              <div>
                <a className="-comp-visit-btn" href={item.link} rel="noreferrer noopener" target="_blank">VISIT</a>
              </div>
            </div>
          ))}

          {items.length > 4 && (
            <button className="see-more" onClick={toggleShowAll}>
              <div>
                {showAll ? 'See Less' : 'See More'} <img src={down} alt="Add Icon" className="icon" style={{height:"25px",width:"15px",paddingLeft:"5px"}}/>
              </div>
            </button>
          )}

          <div className="disclaimer">
            <img src={info} alt="Add Icon" className="icon" />
            <span>Les prix indiqués ci-dessus, disponibles en ligne, peuvent différer en magasin.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereToBuy;
