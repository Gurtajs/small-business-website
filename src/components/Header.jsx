import React from 'react'
import { Link } from 'react-router-dom'
import MobileNavigation from './SmallerScreenNav'
import Navigation from './Navigation'

const Header = () => {
  return (
      <div className='header'>
        <Link to='/home'>
          <div>
            <img className='image-header' src="https://see.fontimg.com/api/renderfont4/51nzz/eyJyIjoiZnMiLCJoIjo3NiwidyI6MjAwMCwiZnMiOjM4LCJmZ2MiOiIjRkZFODMxIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/R1JFRU4nUyBDSElQUFk/the-soulty.png"></img>
          </div>
        </Link>
        <div className='nav-container'>
          <Navigation/>
          <MobileNavigation/>
        </div>
      </div>
  )
}

export default Header

