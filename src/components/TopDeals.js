import React from 'react';
import './topdeals.css';
import aziza from '../image/aziza.jpg';
import carrefour from '../image/carrefour.svg';
import monoprix from '../image/monoprix.svg';
import mg from '../image/mg.jpg';
import geant from '../image/geant.jpg';

const storeData = [
  { id: 1, name: 'aziza', image: aziza },
  { id: 2, name: 'carrefour', image: carrefour },
  { id: 3, name: 'monoprix', image: monoprix },
  { id: 4, name: 'mg', image: mg },
  { id: 6, name: 'geant', image: geant },
];

export const TopDeals = () => {

  return (
    <div className='top'>
      <div className='containerr store-items -scrollable' style={{ gap: '10px', marginTop: "30px"}}>
        <h2>Today's Top Deals</h2>
      </div>
      <div style={{ margin: '20px 0 40px' }}>
        <div className='containerr store-items -scrollable'>
          {storeData.map((store) => (
            <a key={store.id} className="item" href={`/deals/?stores=${store.id}`}>
              <img src={store.image} alt={store.name} className="store-logo" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
