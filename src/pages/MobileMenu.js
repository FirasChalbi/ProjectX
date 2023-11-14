import React from 'react'
import './mobileMenu.css'

export const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <div className='menuRow'>
        <button className='menu-item'>Sign in</button>
        <button className='menu-item'>Create an account</button>
        <button className='menu-item'>Let us know your thoughts</button>
        <button className='menu-item'>I need help</button>
        <button className='menu-item'>About</button>
        <button className='menu-item'>Privacy policy</button>
      </div>
    </div>
  )
}
