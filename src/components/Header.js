import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo.png';
import user from '../image/user.png';
import heart from '../image/heart.svg';
import search from '../image/search.svg';
import menu from '../image/menu.svg';
import './header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const showSearch = () => {
    console.log('Show Search');
  };

  const hideSearch = () => {
    console.log('Hide Search');
  };

  const app_modal = () => {
    console.log('Open App Modal');
  };

  const code_red_search_query = async (value) => {
    try {
      const response = await fetch(`http://barkaa-service.onrender.com/api/search?q=${encodeURIComponent(value)}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Search Results:', data);

        // Redirect to the SearchPage with the matched products
        navigate('/search', { state: { matchedProducts: data } });
      } else {
        const nonJsonResponse = await response.text();
        console.error('Unexpected response format. Expected JSON. Actual response:', nonJsonResponse);
        // Handle non-JSON response (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

  return (
    <header>
      <div className="_inner">
        <button className="js-open-menu">
          <img style={{ width: '30px', height: '30px' }} src={menu} alt="Menu Icon" className="icon" />
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
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="search-bar-outer">
          <form
            className="-show-desktop"
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery === '') return;
              code_red_search_query(searchQuery);
            }}
            action="/search/"
          >
            <input type="hidden" name="from" value="search" />
            <label htmlFor="searchInput" className="search-bar -relative">
              <img style={{ width: '19px', height: '19px' }} src={search} alt="Search Icon" className="icon" />
              <div>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search for a product"
                  name="q"
                  autoComplete="off"
                  autoCapitalize="none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="suggestions"></div>
              </div>
            </label>
          </form>
        </div>
        <button className="search-button -hide-desktop" onClick={showSearch}>
          {/* You can add an icon or text for the search button */}
        </button>
        <a className="list-button" href="/lists/">
          <img style={{ width: '35px', height: '35px' }} src={heart} alt="Favorites Icon" className="icon" />
        </a>
        <button className="js-login-menu" style={{ cursor: 'pointer' }}>
          <img style={{ width: '35px', height: '35px' }} src={user} alt="User Icon" className="icon" />
          <menu id="headerAccountMenu">
            <div className="_item">
              <img style={{ width: '35px', height: '35px' }} src={user} alt="User Icon" className="icon" />
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
      <div className="search-header-mob -hide-desktop" style={{ display: 'none' }}>
        <div className="search-bar-outer">
          <form
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery === '') return;
              code_red_search_query(searchQuery);
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="suggestions"></div>
              </div>
              <button type="button" className="_close-button -hide">
                <svg className="icon">
                  <use xlinkHref="#svg_close" />
                </svg>
              </button>
              <button type="button" className="_barcode-button" onClick={app_modal}>
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
