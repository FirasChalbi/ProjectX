import React from 'react';
import './mobileMenu.css';
import { Link } from 'react-router-dom';
import useAuth from '../auth/useAuth'; // Adjust the path accordingly

export const MobileMenu = () => {
  const { authenticated, login, logout, user } = useAuth();

  return (
    <div className='mobile-menu'>
      <div className='menuRow'>
        {authenticated ? (
          <>
            <div className='menu-item'>
              <span>Signed in as {user.name}</span>
            </div>
            <div className='menu-item' onClick={logout}>
              <button>Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link to="/signin" className='menu-item'>
              <button onClick={login}>Sign in</button>
            </Link>
            <Link to="/signup" className='menu-item'>
              <button>Create an account</button>
            </Link>
          </>
        )}

        <button className='menu-item'>Let us know your thoughts</button>
        <button className='menu-item'>I need help</button>
        <button className='menu-item'>About</button>
        <button className='menu-item'>Privacy policy</button>
      </div>
      <div className='version'>V1.2</div>
    </div>
  );
};
