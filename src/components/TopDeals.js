import React, { useState } from 'react';
import './topdeals.css';
import aziza from '../image/aziza.jpg';
import carrefour from '../image/carrefour.svg';
import monoprix from '../image/monoprix.svg';
import mg from '../image/mg.jpg';
import geant from '../image/geant.jpg';


const storeData = [
  { id: 1, name: 'Aziza', image: aziza },
  { id: 2, name: 'carrefour', image: carrefour },
  { id: 3, name: 'Monoprix', image: monoprix },
  { id: 4, name: 'Mg', image: mg },
  { id: 6, name: 'Geant', image: geant },
];

export const TopDeals = ({ titre }) => {
  const [selectedStoreId, setSelectedStoreId] = useState(null);

  const handleStoreClick = (storeId) => {
    setSelectedStoreId(storeId === selectedStoreId ? null : storeId);
  };

  return (
    <div className='top'>
      <div className='containerr store-items -scrollable' style={{ gap: '10px', marginTop: '20px' }}>
        <h2>{titre}</h2>
      </div>
      <div style={{ margin: '20px 0 40px' }}>
        <div className='containerr store-items -scrollable'>
          {storeData.map((store) => (
            <div key={store.id} className="item">
              <a href={`/deals/${store.name}`} onClick={() => handleStoreClick(store.id)}>
                <img src={store.image} alt={store.name} className="store-logo" />
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


