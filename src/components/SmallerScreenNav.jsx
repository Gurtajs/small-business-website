import React, { useState } from 'react'
import NavLinks from './NavLinks'
import {HiMenu} from 'react-icons/Hi'
import {CgClose} from 'react-icons/Cg'

const SmallerScreenNav = () => {
  const [open, setOpen] = useState(false);
  
  const hamburgerIcon = <HiMenu className='hamburger' size= '25px'
                         onClick={() => setOpen(!open)}/>   

  const closeIcon = <CgClose className='close-icon' size= '25px'
                         onClick={() => setOpen(!open)}/>  
    const closeMenu = () => setOpen(false)
    return (
      <nav className='smallerscreen-nav'>  
      {open ? closeIcon : hamburgerIcon}
      <div>{open && <NavLinks isSmallScreen={true} closeMenu={closeMenu}/>}</div>
      </nav>
  )
}

export default SmallerScreenNav
