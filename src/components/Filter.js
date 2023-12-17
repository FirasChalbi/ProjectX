import React from 'react';
import arrowdown from '../image/arrowdown.svg'
import './filter.css';

export const Filter = () => {
  const updateResults = () => {
    // Implement your update results logic here
  };

  const closeMenu = () => {
    // Implement your close menu logic here
  };

  return (
    <div className="search_filter-bar">
      <div className="filter-item js-open-menu -sort">
        <button type="button">
          <span>Sort</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        <menu className="filter-menu" id="order_menu">
          <div className="option-item-wrapper">
            <div className="_option-item _item">
              <input
                id="order_relevant"
                type="radio"
                onChange={updateResults}
                name="order"
                value="relevant"
                checked=""
              />
              <label htmlFor="order_relevant">
                <div>Relevance</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
            <div className="_option-item _item">
              <input
                id="order_price"
                type="radio"
                onChange={updateResults}
                name="order"
                value="price"
              />
              <label htmlFor="order_price">
                <div>Lowest Price</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
          </div>

          <div className="_filter-button done-button" onClick={closeMenu}>
            <div className="cta">VIEW RESULTS</div>
          </div>
        </menu>
      </div>
      <div className="filter-item js-open-menu -sort">
        <button type="button">
          <span>Stores</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        <menu className="filter-menu" id="order_menu">
          <div className="option-item-wrapper">
            <div className="_option-item _item">
              <input
                id="order_relevant"
                type="radio"
                onChange={updateResults}
                name="order"
                value="relevant"
                checked=""
              />
              <label htmlFor="order_relevant">
                <div>Relevance</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
            <div className="_option-item _item">
              <input
                id="order_price"
                type="radio"
                onChange={updateResults}
                name="order"
                value="price"
              />
              <label htmlFor="order_price">
                <div>Lowest Price</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
          </div>

          <div className="_filter-button done-button" onClick={closeMenu}>
            <div className="cta">VIEW RESULTS</div>
          </div>
        </menu>
      </div>
      <div className="filter-item js-open-menu -sort">
        <button type="button">
          <span>Brand</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        <menu className="filter-menu" id="order_menu">
          <div className="option-item-wrapper">
            <div className="_option-item _item">
              <input
                id="order_relevant"
                type="radio"
                onChange={updateResults}
                name="order"
                value="relevant"
                checked=""
              />
              <label htmlFor="order_relevant">
                <div>Relevance</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
            <div className="_option-item _item">
              <input
                id="order_price"
                type="radio"
                onChange={updateResults}
                name="order"
                value="price"
              />
              <label htmlFor="order_price">
                <div>Lowest Price</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
          </div>

          <div className="_filter-button done-button" onClick={closeMenu}>
            <div className="cta">VIEW RESULTS</div>
          </div>
        </menu>
      </div>
      <div className="filter-item js-open-menu -sort">
        <button type="button">
          <span>Size</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        <menu className="filter-menu" id="order_menu">
          <div className="option-item-wrapper">
            <div className="_option-item _item">
              <input
                id="order_relevant"
                type="radio"
                onChange={updateResults}
                name="order"
                value="relevant"
                checked=""
              />
              <label htmlFor="order_relevant">
                <div>Relevance</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
            <div className="_option-item _item">
              <input
                id="order_price"
                type="radio"
                onChange={updateResults}
                name="order"
                value="price"
              />
              <label htmlFor="order_price">
                <div>Lowest Price</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
          </div>

          <div className="_filter-button done-button" onClick={closeMenu}>
            <div className="cta">VIEW RESULTS</div>
          </div>
        </menu>
      </div>
      <div className="filter-item js-open-menu -sort">
        <button type="button">
          <span>Quantity</span>
          <div>
            <img src={arrowdown} alt="Add Icon" className="icon" />
          </div>
        </button>
        <menu className="filter-menu" id="order_menu">
          <div className="option-item-wrapper">
            <div className="_option-item _item">
              <input
                id="order_relevant"
                type="radio"
                onChange={updateResults}
                name="order"
                value="relevant"
                checked=""
              />
              <label htmlFor="order_relevant">
                <div>Relevance</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
            <div className="_option-item _item">
              <input
                id="order_price"
                type="radio"
                onChange={updateResults}
                name="order"
                value="price"
              />
              <label htmlFor="order_price">
                <div>Lowest Price</div>
                <div className="count"></div>
                <svg className="icon">
                  <use xlinkHref="#svg_tick"></use>
                </svg>
              </label>
            </div>
          </div>

          <div className="_filter-button done-button" onClick={closeMenu}>
            <div className="cta">VIEW RESULTS</div>
          </div>
        </menu>
      </div>
    </div>
  );
};

export default Filter