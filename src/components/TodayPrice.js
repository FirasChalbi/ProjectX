import React from 'react'
import  './todayprice.css'

function TodayPrice() {
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
              <span id="pmin">£2.25</span>
            </div>
          </div>
          <div className="fig -usual" style={{ left: '56.5625%' }}>
            <div>
              Usually <br />
              <span id="pusual">£5.87</span>
            </div>
          </div>
          <div className="fig -max">
            <div>
              Highest <br />
              <span id="pmax">£8.65</span>
            </div>
          </div>
        </div>
        <div className="pointer-pos" style={{ left: 'calc(0% - 26px)' }}>
          <div className="pointer-fig">
            <span id="pcurr">£2.25</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default TodayPrice