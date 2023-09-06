import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = (props) => {
  
  return (
      <div className='navbar-items'>
        <div className='navbar-item' onClick={() => props.isSmallScreen && props.closeMenu()}>
          <Link className='links-header' to='/ourfood' onClick= {()=>{if (window.location.pathname=== '/ourfood') {window.location.reload()}}}>Our Food</Link>
          <div className='line'></div>
        </div>
        <div className='navbar-item' onClick={() => props.isSmallScreen && props.closeMenu()}>
          <Link className='links-header' to='/aboutus' onClick= {()=>{if (window.location.pathname=== '/aboutus') {window.location.reload()}}}>About Us</Link>
          <div className='line'></div>
        </div>
        <div className='navbar-item' onClick={() => props.isSmallScreen && props.closeMenu()}>
          <Link className='links-header' to='/contactus' onClick= {()=>{if (window.location.pathname=== '/contactus') {window.location.reload()}}}>Get in Touch</Link>
          <div className='line'></div>
        </div>
    </div>
   
  )
}

export default NavLinks
