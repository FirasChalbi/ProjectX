/*
import React from 'react';

export const TopBar = () => {
  return (
    <div className="_inner">
      <button className="js-open-menu">
        <svg className="icon">
          <use xlinkHref="#svg_menu" />
        </svg>
        <menu id="headerMenu" className="">
          <a href="/deals/" className="_item">Today's Deals</a>
          <a href="/help-guides/" className="_item">Help Guides</a>
          <a href="/app/" className="_item" style={{ fontWeight: 'bold' }}>
            Download App
            <svg className="nav-download__icon">
              <use xlinkHref="#nav-download" />
            </svg>
          </a>
        </menu>
      </button>
      <div>
        <a href="/">
          <img style={{ display: 'block', width: '159px' }} src="/imgs/logo.svg" alt="" />
        </a>
      </div>
      <div className="search-bar-outer">
      <form className="-show-desktop" method="get" onSubmit={(e) => {
  e.preventDefault();
  const inputValue = e.currentTarget.q.value;
  if (!inputValue) return;
  if (typeof CODE_RED !== 'undefined' && CODE_RED) {
    code_red_search_query(inputValue);
  }
}} action="/search/">

          <input type="hidden" name="from" value="search" />
          <label htmlFor="searchInput" className="search-bar -relative">
            <svg className="icon">
              <use xlinkHref="#svg_search" />
            </svg>
            <div>
              <input id="searchInput" type="text" placeholder="Search for a product or brand" name="q" autoComplete="off" autoCapitalize="none" />
              <div className="suggestions" />
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
      
      <a className="list-button" href="/lists/">
        <svg className="icon">
          <use xlinkHref="#svg_fav" />
        </svg>
      </a>
      <button className="js-login-menu" style={{ cursor: 'pointer' }}>
        <svg className="icon">
          <use xlinkHref="#svg_account" />
        </svg>
        <menu id="headerAccountMenu">
          <div className="_item">
            <svg className="icon">
              <use xlinkHref="#svg_account" />
            </svg>
            <div className="_username">Paradis</div>
          </div>
          <a href="/account/my-account/" className="_item">Account</a>
          <a onClick={() => confirm('Are you sure you want to logout?')} href="/?sign-out=1&amp;redirect=/" className="_item">Logout</a>
        </menu>
      </button>
    </div>
  );
};

*/