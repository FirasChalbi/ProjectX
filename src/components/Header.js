import React from 'react';
import logo from '../image/dlogo.png'
import user from '../image/user.png'
import heart from '../image/heart.svg'
import search from '../image/search.svg'
import menu from '../image/menu.svg'
import './fullcss.css'

function Header() {
  const showSearch = () => {
    // Implement the logic to show the search.
    // For example, you can toggle a state variable to control visibility.
    console.log('Show Search');
  };

  const hideSearch = () => {
    // Implement the logic to hide the search.
    // For example, you can toggle a state variable to control visibility.
    console.log('Hide Search');
  };

  const app_modal = () => {
    // Implement the logic for handling the app modal.
    console.log('Open App Modal');
  };

  const code_red_search_query = (value) => {
    // Implement the logic for handling the search query using CODE_RED.
    // You may need to replace this with your actual implementation.
    console.log('Search Query:', value);
  };

  return (
    <header>
      <div className="_inner">
        <button className="js-open-menu">
        <img style={{ width: '30px', height: '30px' }} src={menu} alt="Add Icon" className="icon" />
          <menu id="headerMenu" className="">
            <a href="/deals/" className="_item">
              Today's Deals
            </a>
            <a href="/help-guides/" className="_item">
              Help Guides
            </a>
            <a href="/app/" className="_item" style={{ fontWeight: 'bold' }}>
              Download App{' '}
              <svg className="nav-download__icon">
                <use xlinkHref="#nav-download" />
              </svg>
            </a>
          </menu>
        </button>
        <div>
          <a href="/">
            <img
              style={{ display: 'block', width: '70px' }}
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="search-bar-outer">
          <form
            className=" -show-desktop"
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              if (this.q.value === '') return false;
              code_red_search_query(this.q.value);
            }}
            action="/search/"
          >
            <input type="hidden" name="from" value="search" />
            <label htmlFor="searchInput" className="search-bar -relative">
            <img style={{ width: '19px', height: '19px' }} src={search} alt="Add Icon" className="icon" />
              <div>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search for a product or brand"
                  name="q"
                  autoComplete="off"
                  autoCapitalize="none"
                />
                <div className="suggestions"></div>
              </div>
              <button className="_close-button -hide">
                <svg className="icon">
                  <use xlinkHref="#svg_close" />
                </svg>
              </button>
              <button className="_barcode-button">
                <svg className="icon">
                  <use xlinkHref="#svg_barcode" />
                </svg>
              </button>
            </label>
          </form>
        </div>
        <button className="search-button -hide-desktop" onClick={showSearch}>
          <svg className="icon">
            <use xlinkHref="#svg_search" />
          </svg>
        </button>
        <a className="list-button" href="/lists/">
        <img style={{ width: '35px', height: '35px' }} src={heart} alt="Add Icon" className="icon" />
        </a>
        <button className="js-login-menu" style={{ cursor: 'pointer' }}>
        <img style={{ width: '35px', height: '35px' }} src={user} alt="Add Icon" className="icon" />
          <menu id="headerAccountMenu">
            <div className="_item">
            <img style={{ width: '35px', height: '35px' }} src={user} alt="Add Icon" className="icon" />
              <div className="_username">Paradis</div>
            </div>
            <a href="/account/my-account/" className="_item">
              Account
            </a>
            <a
              onClick={() => window.confirm('Are you sure you want to logout?')}
              href="/?sign-out=1&amp;redirect=/"
              className="_item"
            >
              Logout
            </a>
          </menu>
        </button>
      </div>
      <div
        className="search-header-mob -hide-desktop"
        style={{ display: 'none' }}
      >
        <div className="search-bar-outer">
          <form
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              if (this.q.value === '') return;
              code_red_search_query(this.q.value);
            }}
            action="/search/"
          >
            <input type="hidden" name="from" value="search" />
            <div className="search-bar">
              <svg className="icon">
                <use xlinkHref="#svg_search" />
              </svg>
              <div>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search for a product or brand"
                  name="q"
                  autoComplete="off"
                  autoCapitalize="none"
                />
                <div className="suggestions"></div>
              </div>
              <button type="button" className="_close-button -hide">
                <svg className="icon">
                  <use xlinkHref="#svg_close" />
                </svg>
              </button>
              <button
                type="button"
                className="_barcode-button"
                onClick={app_modal}
              >
                <svg className="icon">
                  <use xlinkHref="#svg_barcode" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <button onClick={hideSearch}>
          <svg className="icon">
            <use xlinkHref="#svg_close" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
