import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {ReactComponent as Logo} from '../assets/Just-Eat-logo.svg'
import {ReactComponent as GoogleLogo} from '../assets/google-logo.svg'

const Home = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='home'>
      <div className='content'>
        <h1 className='home-title'>Sea-riously good fish and famous battered chips fried to perfection and served with love since 1999</h1>
      </div>
      <div className='reviews-container'>
        <div className='reviews-content'>  
          <div className='title-reviews'>What our customers say about us</div> 
    
    <Slider {...settings}>
          
          <div className="item">"Fantastic service, great food and a friendly delivery driver. What more can you ask for? Thank you 😊" <div className='Jlogo-reviews'><Logo/></div></div>
          <div className="item">Spotless food is lovely best chips in the area and good price too<div className='Glogo-reviews2'><GoogleLogo/></div></div>
          <div className="item">"First time trying, definitely will be using again, fish and chips are brilliant and also the double cheese burger, definitely recommend 👌"<div className='Jlogo-reviews3'><Logo/></div></div>
          <div className="item">"Cannot fault this service. Best Chip shop in West Midlands"<div className='Jlogo-reviews4'><Logo/></div></div>
          <div className="item">"Yet another quality meal cooked to perfection best fish and chips in the area"<div className='Glogo-reviews5'><GoogleLogo/></div></div>
          <div className="item">"Brilliant prices, lovely staff and mostly importantly amazing food! Would definitely recommend it!"<div className='Jlogo-reviews'><Logo/></div></div>
          
         
    </Slider>


          <div className='nav-reviews'>
            <div className='nav-button'></div>
            <div className='nav-button'></div>
          </div>
          
        

        </div>
        <div className='images-container'>
          <img className='fish' src="src/assets/fish.jpeg"/>
          <img className='chips' src="src/assets/chips.jpeg"/>
          <img className='text' src='src/assets/text.jpeg'/>
          <img className='fish' src="src/assets/fish.jpeg"/>
          <img className='chips' src="src/assets/chips.jpeg"/>
          <img className='text' src='src/assets/text.jpeg'/>
          <img className='fish' src="src/assets/fish.jpeg"/>
          <img className='chips' src="src/assets/chips.jpeg"/>
          <img className='text' src='src/assets/text.jpeg'/>
          <img className='fish' src="src/assets/fish.jpeg"/>
          <img className='chips' src="src/assets/chips.jpeg"/>
          <img className='text' src='src/assets/text.jpeg'/>
          <img className='fish' src="src/assets/fish.jpeg"/>
          <img className='chips' src="src/assets/chips.jpeg"/>
          <img className='text' src='src/assets/text.jpeg'/>
          <img className='fish' src="src/assets/fish.jpeg"/>
          <img className='chips' src="src/assets/chips.jpeg"/>
          <img className='text' src='src/assets/text.jpeg'/>
        </div>
      </div>
    </div>
  )
}

export default Home
