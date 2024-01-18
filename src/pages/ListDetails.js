import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './listDetails.css';
import imgSvg from '../image/img.svg';

const ListDetail = () => {
  // Extract id from URL parameters
  const { id } = useParams();

  // State to manage renaming and list details
  const [isRenameActive, setIsRenameActive] = useState(false);
  const [listName, setListName] = useState('');
  const [listItems, setListItems] = useState([]);

  // Function to add a product to the list
  const handleAddToProduct = (productId, productName) => {
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      productId,
      productName,
    };

    setListItems([...listItems, newItem]);
  };

  // Function to handle list name click
  const handleListNameClick = () => {
    setIsRenameActive(true);
  };

  // Function to handle list name blur
  const handleListNameBlur = () => {
    setIsRenameActive(false);
    console.log('List name blurred:', listName);
  };

  // Function to handle list name change
  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  // Function to handle list deletion
  const handleDeleteList = () => {
    if (window.confirm('Are you sure to delete this list?')) {
      console.log('List deleted');
    }
  };

  // Effect to fetch list details when component mounts or id changes
  useEffect(() => {
    const fetchListDetails = async () => {
      try {
        const response = await fetch(`https://barkaa-service.onrender.com/api/lists/${id}`, {
          credentials: 'include',
        });

        if (response.ok) {
          const listDetails = await response.json();
          setListName(listDetails.name);

          // Assuming the 'products' property contains an array of product IDs
          const productIds = listDetails.products;

          // Fetch details for each product
          const productDetailsPromises = productIds.map(async (productId) => {
            const productResponse = await fetch(`https://barkaa-service.onrender.com/api/match-products/${productId}`, {
              credentials: 'include',
            });
            if (productResponse.ok) {
              return await productResponse.json();
            } else {
              console.error(`Error fetching product details for ID ${productId}:`, productResponse.statusText);
              return null;
            }
          });

          // Wait for all product details requests to complete
          const productDetails = await Promise.all(productDetailsPromises);

          // Filter out any potential null values (failed requests)
          const validProductDetails = productDetails.filter((productDetail) => productDetail !== null);

          setListItems(validProductDetails);
        } else {
          console.error('Error fetching list details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching list details:', error);
      }
    };

    fetchListDetails();
  }, [id]);


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
