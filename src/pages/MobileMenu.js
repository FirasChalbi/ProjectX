import React from 'react'
import './mobileMenu.css'

import { Link } from 'react-router-dom';

export const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <div className='menuRow'>
        <Link to="/signin" className='menu-item'>
          <button >Sign in</button>
        </Link>
        <button className='menu-item'>Create an account</button>
        <button className='menu-item'>Let us know your thoughts</button>
        <button className='menu-item'>I need help</button>
        <button className='menu-item'>About</button>
        <button className='menu-item'>Privacy policy</button>
      </div>
    </div>
  )
}
