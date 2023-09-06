import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
        <h1 className='home-title'>Sea-riously good fish and famous battered chips fried to perfection, served with love since 1999</h1>
      </div>
      <div className='reviews-container'>
        <div className='reviews-content'>  
          <h2 className='title-reviews'>Reviews</h2> 
    
    <Slider {...settings}>
      
          <div className="item">1</div>
          <div className="item" data-value="2">2</div>
          <div className="item" data-value="3">3</div>
          <div className="item" data-value="4">4</div>
          <div className="item" data-value="5">5</div>
          <div className="item" data-value="5">6</div>
         
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
