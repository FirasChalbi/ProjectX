import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo.png';
import user1 from '../image/user.png';
import heart from '../image/heart.svg';
import search from '../image/search.svg';
import './header.css';
import imgSvg from '../image/img.svg';
import useAuth from '../auth/useAuth';
import Signup from '../pages/SignUp'; // Import the Signup component (replace with actual path)

function Header() {
  const { authenticated, user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const showSearch = () => {
    console.log('Show Search');
    logUserAuthenticationStatus();
  };

  const hideSearch = () => {
    console.log('Hide Search');
    logUserAuthenticationStatus();
  };

  const app_modal = () => {
    console.log('Open App Modal');
    logUserAuthenticationStatus();
  };

  const logUserAuthenticationStatus = () => {
    if (authenticated) {
      console.log('User is authenticated');
    } else {
      console.log('User is not authenticated');
    }
  };
  
  const code_red_search_query = async (value) => {
    try {
      const response = await fetch(`https://barkaa-service.onrender.com/api/search?q=${encodeURIComponent(value)}`);

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

  /** const renderUserMenu = () => {
    if (authenticated) {
      return (
        <>
          <div className="_item">
            {user && user.name && (
              <>
                <img style={{ width: '35px', height: '35px' }} src={user1} alt="User Icon" className="icon" />
                <div className="_username">{user.name}</div>
              </>
            )}
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
        </>
      );
    }   }
**/

  return (
    <header>
      <div className="_inner">
        <button className="js-open-menu">
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
              {/* Add the button to the right of the search input */}
              <button type="button" className="_barcode-button" onClick={app_modal}>
                <svg className="icon">
                  <use xlinkHref={`${imgSvg}#svg_barcode`} />
                </svg>
              </button>
            </label>
          </form>
        </div>
        <button className="search-button -hide-desktop" onClick={showSearch}>
          {/* You can add an icon or text for the search button */}
        </button>
        <a className="list-button" href="/lists/">
          <img style={{ width: '35px', height: '35px' }} src={heart} alt="Favorites Icon" className="icon" />
        </a>
        <a className="js-login-menu" style={{ cursor: 'pointer' }} href='/signin/'>  
        {/* onClick={toggleModal}  */}
          <img style={{ width: '35px', height: '35px' }} src={user1} alt="User Icon" className="icon" />
          <menu id="headerAccountMenu">
            {authenticated && (
            <>
            <div className="_item">
            {user && user.name && (
              <>
                <img style={{ width: '35px', height: '35px' }} src={user1} alt="User Icon" className="icon" />
                <div className="_username">{user.name}</div>
              </>
            )}
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
          </>)}
          </menu>
        </a>
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
      {isModalOpen && (
        <div
          className="modal-parent lists-modal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
        <Signup />       
        </div>
        )}
    </header>
  );
}



export default Header;
