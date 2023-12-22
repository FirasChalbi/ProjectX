import React, { useState } from 'react';
import arrowdown from '../image/arrowdown.svg';
import './filter.css';
import imgSvg from '../image/img.svg';

const Filter = () => {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [storesMenuOpen, setStoresMenuOpen] = useState(false);
  const [brandMenuOpen, setBrandMenuOpen] = useState(false);
  const [sizeMenuOpen, setSizeMenuOpen] = useState(false);
  const [quantityMenuOpen, setQuantityMenuOpen] = useState(false);

  const [selectedSortOption, setSelectedSortOption] = useState('relevant');
  const [selectedStoresOption, setSelectedStoresOption] = useState('relevant');
  const [selectedBrandOption, setSelectedBrandOption] = useState('relevant');
  const [selectedSizeOption, setSelectedSizeOption] = useState('relevant');
  const [selectedQuantityOption, setSelectedQuantityOption] = useState('relevant');

  const updateResults = (event, menuType) => {
    const updateFunctionMap = {
      sort: setSelectedSortOption,
      stores: setSelectedStoresOption,
      brand: setSelectedBrandOption,
      size: setSelectedSizeOption,
      quantity: setSelectedQuantityOption,
    };

    updateFunctionMap[menuType](event.target.value);
    console.log(`Updating results for ${menuType}...`, event.target.value);
    // Implement update results logic for the respective menu
  };

  const toggleMenu = (menuType) => {
    const toggleFunctionMap = {
      sort: setSortMenuOpen,
      stores: setStoresMenuOpen,
      brand: setBrandMenuOpen,
      size: setSizeMenuOpen,
      quantity: setQuantityMenuOpen,
    };

    toggleFunctionMap[menuType]((prevState) => !prevState);
  };

  const closeMenu = (menuType) => {
    const closeFunctionMap = {
      sort: setSortMenuOpen,
      stores: setStoresMenuOpen,
      brand: setBrandMenuOpen,
      size: setSizeMenuOpen,
      quantity: setQuantityMenuOpen,
    };

    closeFunctionMap[menuType](false);
  };

  return (
    <div className="search_filter-bar">
      {/* Sort Menu */}
      <div className="filter-item js-open-menu -sort">
        <button type="button" onClick={() => toggleMenu('sort')}>
          <span>Sort</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        {sortMenuOpen && (
          <>
            <div id="close_sort_menu" onClick={() => closeMenu('sort')} className="menu-bg"></div>
            <menu className="filter-menu -active -show" id="sort_menu">
              <div className="option-item-wrapper">
                <div className="_option-item _item">
                  <input
                    id="order_relevant"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="relevant"
                    checked={selectedSortOption === 'relevant'}
                  />
                  <label htmlFor="order_relevant">
                    <div>Relevance</div>
                    {selectedSortOption === 'relevant' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
                <div className="_option-item _item">
                  <input
                    id="order_price"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="price"
                    checked={selectedSortOption === 'price'}
                  />
                  <label htmlFor="order_price">
                    <div>Lowest Price</div>
                    {selectedSortOption === 'price' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
              </div>
              <div className="close-bar">
                <div className="_filter-button done-button" onClick={() => closeMenu('sort')}>
                  <div className="cta">VIEW RESULTS</div>
                </div>
              </div>
            </menu>
          </>
        )}
      </div>

      {/* Stores Menu */}
      <div className="filter-item js-open-menu -stores">
        <button type="button" onClick={() => toggleMenu('stores')}>
          <span>Stores</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        {storesMenuOpen && (
          <>
            <div id="close_stores_menu" onClick={() => closeMenu('stores')} className="menu-bg"></div>
            <menu className="filter-menu -active -show" id="stores_menu">
            <div className="option-item-wrapper">
                <div className="_option-item _item">
                  <input
                    id="order_relevant"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="relevant"
                    checked={selectedStoresOption === 'relevant'}
                  />
                  <label htmlFor="order_relevant">
                    <div>Relevance</div>
                    {selectedSortOption === 'relevant' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
                <div className="_option-item _item">
                  <input
                    id="order_price"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="price"
                    checked={selectedSortOption === 'price'}
                  />
                  <label htmlFor="order_price">
                    <div>Lowest Price</div>
                    {selectedSortOption === 'price' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
              </div>
              <div className="close-bar">
                <div className="_filter-button done-button" onClick={() => closeMenu('stores')}>
                  <div className="cta">VIEW RESULTS</div>
                </div>
              </div>
            </menu>
          </>
        )}
      </div>

      {/* Brand Menu */}
      <div className="filter-item js-open-menu -brand">
        <button type="button" onClick={() => toggleMenu('brand')}>
          <span>Brand</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        {brandMenuOpen && (
          <>
            <div id="close_brand_menu" onClick={() => closeMenu('brand')} className="menu-bg"></div>
            <menu className="filter-menu -active -show" id="brand_menu">
            <div className="option-item-wrapper">
                <div className="_option-item _item">
                  <input
                    id="order_relevant"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="relevant"
                    checked={selectedBrandOption === 'relevant'}
                  />
                  <label htmlFor="order_relevant">
                    <div>Relevance</div>
                    {selectedSortOption === 'relevant' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
                <div className="_option-item _item">
                  <input
                    id="order_price"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="price"
                    checked={selectedSortOption === 'price'}
                  />
                  <label htmlFor="order_price">
                    <div>Lowest Price</div>
                    {selectedSortOption === 'price' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
              </div>
              <div className="close-bar">
                <div className="_filter-button done-button" onClick={() => closeMenu('brand')}>
                  <div className="cta">VIEW RESULTS</div>
                </div>
              </div>
            </menu>
          </>
        )}
      </div>

      {/* Size Menu */}
      <div className="filter-item js-open-menu -size">
        <button type="button" onClick={() => toggleMenu('size')}>
          <span>Size</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        {sizeMenuOpen && (
          <>
            <div id="close_size_menu" onClick={() => closeMenu('size')} className="menu-bg"></div>
            <menu className="filter-menu -active -show" id="size_menu">
            <div className="option-item-wrapper">
                <div className="_option-item _item">
                  <input
                    id="order_relevant"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="relevant"
                    checked={selectedSizeOption === 'relevant'}
                  />
                  <label htmlFor="order_relevant">
                    <div>Relevance</div>
                    {selectedSortOption === 'relevant' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
                <div className="_option-item _item">
                  <input
                    id="order_price"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="price"
                    checked={selectedSortOption === 'price'}
                  />
                  <label htmlFor="order_price">
                    <div>Lowest Price</div>
                    {selectedSortOption === 'price' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
              </div>
              <div className="close-bar">
                <div className="_filter-button done-button" onClick={() => closeMenu('size')}>
                  <div className="cta">VIEW RESULTS</div>
                </div>
              </div>
            </menu>
          </>
        )}
      </div>

      {/* Quantity Menu */}
      <div className="filter-item js-open-menu -quantity">
        <button type="button" onClick={() => toggleMenu('quantity')}>
          <span>Quantity</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        {quantityMenuOpen && (
          <>
            <div id="close_quantity_menu" onClick={() => closeMenu('quantity')} className="menu-bg"></div>
            <menu className="filter-menu -active -show" id="quantity_menu">
            <div className="option-item-wrapper">
                <div className="_option-item _item">
                  <input
                    id="order_relevant"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="relevant"
                    checked={selectedSortOption === 'relevant'}
                  />
                  <label htmlFor="order_relevant">
                    <div>Relevance</div>
                    {selectedQuantityOption === 'relevant' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
                <div className="_option-item _item">
                  <input
                    id="order_price"
                    type="radio"
                    onChange={(event) => updateResults(event, 'sort')}
                    name="order"
                    value="price"
                    checked={selectedSortOption === 'price'}
                  />
                  <label htmlFor="order_price">
                    <div>Lowest Price</div>
                    {selectedSortOption === 'price' && (
                      <svg className="icon">
                        <use xlinkHref={`${imgSvg}#svg_tick`}></use>
                      </svg>
                    )}
                  </label>
                </div>
              </div>
              <div className="close-bar">
                <div className="_filter-button done-button" onClick={() => closeMenu('quantity')}>
                  <div className="cta">VIEW RESULTS</div>
                </div>
              </div>
            </menu>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
