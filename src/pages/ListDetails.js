import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './listDetails.css';
import imgSvg from '../image/img.svg';

const ListDetail = () => {
  const { id } = useParams();
  const [isRenameActive, setIsRenameActive] = useState(false);
  const [listName, setListName] = useState('FF');
  const [listItems, setListItems] = useState([]); // State to track list items

  const handleAddToProduct = (productId, productName) => {
    // Implement your logic for adding a product to the current list
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      productId,
      productName,
    };

    setListItems([...listItems, newItem]);
  };

  const handleListNameClick = () => {
    setIsRenameActive(true);
  };

  const handleListNameBlur = () => {
    setIsRenameActive(false);
    console.log('List name blurred:', listName);
  };

  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleDeleteList = () => {
    if (window.confirm('Are you sure to delete this list?')) {
      console.log('List deleted');
    }
  };

  return (
    <div className="parent">
      <div className="list2 -large-screen-view">
        <section style={{ paddingBottom: 0 }}>
          <div className="tile">
            <div className="flow-items -gap-m -padding-bottom-none -space-between">
              <h2 style={{ flexGrow: 1 }}>
                <input
                  type="text"
                  value={listName}
                  className={`list_name ${isRenameActive ? 'rename-list' : ''}`}
                  readOnly={!isRenameActive}
                  onClick={handleListNameClick}
                  onBlur={handleListNameBlur}
                  onChange={handleListNameChange}
                />
              </h2>
              <div style={{ position: 'relative' }}>
                <button className="flow-items js-open-menu">
                  <span>
                    <svg className="icon">
                      <use xlinkHref={`${imgSvg}#svg_more-horiz`} />
                    </svg>
                  </span>
                  <menu className="" style={{ right: '299px', top: '153.2px' }}>
                    <div className="_item rename-list" onClick={handleListNameClick}>
                      Rename
                    </div>
                    <div className="_item delete-list" onClick={handleDeleteList}>
                      Delete
                    </div>
                  </menu>
                </button>
              </div>
            </div>
            <div className="flow-items -space-between">
              <div className="flow-items -gap-m">
                <div>
                  Total <b>12.50 DT</b>
                </div>
                <div>
                  Items <b>{listItems.length}</b>
                </div>
              </div>
              <div className="flow-items shops-menu -gap-m -align-top">
                <div>
                  <button className="flow-items view-menu-btn js-open-menu">
                    <svg className="icon -size-xs">
                      <use xlinkHref={`${imgSvg}#svg_layout`}></use>
                    </svg>
                    <menu>
                      <div
                        onClick={() => {
                          console.log(`Switching to single view for list ${id}`);
                        }}
                        className="_item"
                      >
                        List
                      </div>
                      <div
                        onClick={() => {
                          console.log(`Switching to store view for list ${id}`);
                        }}
                        className="_item"
                      >
                        Group by Stores
                      </div>
                    </menu>
                  </button>
                </div>
                <div className="shops-menu-btn {stores_applied}">
                  <button>
                    <svg className="icon -size-xs">
                      <use xlinkHref={`${imgSvg}#svg_store`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="list_data">
          <section>
            <div className="tile {class_name}">
              {/* List items and details */}
              {listItems.map((item) => (
                <div key={item.id} className="lists-item flow-items -space-between -gap-l -js-open_modal" data-id={id} style={{ flexGrow: 1 }}>
                  <div className="-img-wrapper">
                    <img className="product-img" src="/img/product/VZW755" alt="Product" />
                  </div>
                  <div className="product-name">
                    <b>{item.productName}</b>
                    <div id={`product_alert_${id}`} className="product_alert cheaper-tag">
                      Alerts off
                    </div>
                  </div>
                  <div className="_qty">4x</div>
                  <div className="_price">
                    <span style={{ fontWeight: 500 }}>
                      <span id={`pc${id}`}>1.50 DT</span>
                    </span>
                    <button onClick={() => handleAddToProduct(item.productId, item.productName)}>Add</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
