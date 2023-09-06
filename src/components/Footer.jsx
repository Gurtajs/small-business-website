import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/Just-Eat-logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='image-div'><img className='image-footer' src="https://see.fontimg.com/api/renderfont4/51nzz/eyJyIjoiZnMiLCJoIjo3NiwidyI6MjAwMCwiZnMiOjM4LCJmZ2MiOiIjRkZFODMxIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/R1JFRU4nUyBDSElQUFk/the-soulty.png"></img></div>
        <div className='footer-links'> SITE LINKS
          <ul>
            <li><Link className='links' to='/ourfood'>Our Food</Link></li>
            <li><Link className='links' to='/aboutus'>About Us</Link></li>
            <li><Link className='links' to='/contactus'>Get in Touch</Link></li>
          </ul>
        </div>
      </div>
      <div className='address-footer'>
          <div>119 The Green</div>
          <div>Darlaston</div>
          <div>Walsall</div>
          <div>WS10 8JP</div>
      </div>
      <div className='logo'><a href="https://www.just-eat.co.uk/restaurants-greens-chippy-wednesbury/menu"><Logo/></a></div>
      <span className='copyright'>&#169;2023 Green's Chippy. All Rights Reserved.</span>
    </div>
  )
}

export default Footer

// Get in touch: upload maps 