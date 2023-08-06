import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = (props) => {
  return (
      <div className='navbar-items'>
        <div className='navbar-item' onClick={() => props.isSmallScreen && props.closeMenu()}>
          <Link to='/ourfood'>Our Food</Link>
          <div className='line'></div>
        </div>
        <div className='navbar-item' onClick={() => props.isSmallScreen && props.closeMenu()}>
          <Link to='/aboutus'>About Us</Link>
          <div className='line'></div>
        </div>
        <div className='navbar-item' onClick={() => props.isSmallScreen && props.closeMenu()}>
          <Link to='/contactus'>Get in Touch</Link>
          <div className='line'></div>
        </div>
    </div>
   
  )
}

export default NavLinks
