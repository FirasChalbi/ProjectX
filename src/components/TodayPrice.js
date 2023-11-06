import React from 'react';
import './todayprice.css';

function TodayPrice({ data }) {
  const { shop1Product, shop2Product } = data;

  // Extract low and high prices from the data
  const lowPrice = Math.min(
    parseFloat(shop1Product.product_price.replace(',', '.')),
    parseFloat(shop2Product.product_price.replace(',', '.'))
  ).toFixed(2);

  const highPrice = Math.max(
    parseFloat(shop1Product.product_price.replace(',', '.')),
    parseFloat(shop2Product.product_price.replace(',', '.'))
  ).toFixed(2);

  return (
    <section>
      <div className="tile">
        <div className="flow-items -space-between">
          <h2 id="price-history-head">Today's Price</h2>
        </div>
        <div className="todays-price-cn -active">
          <div className="todays-price">
            <div className="figure-wrapper">
              <div className="fig -min">
                <div>
                  Lowest <br />
                  <span id="pmin">{lowPrice}</span>
                </div>
              </div>
              {/* If you have the usual price, you can include it here as well */}
              {/* <div className="fig -usual" style={{ left: '56.5625%' }}>
                <div>
                  Usually <br />
                  <span id="pusual">£5.87</span>
                </div>
              </div> */}
              <div className="fig -max">
                <div>
                  Highest <br />
                  <span id="pmax">{highPrice}</span>
                </div>
              </div>
            </div>
            <div className="pointer-pos" style={{ left: 'calc(0% - 26px)' }}>
              <div className="pointer-fig">
                <span id="pcurr">{lowPrice}</span> {/* Or you can use the current price here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayPrice;
