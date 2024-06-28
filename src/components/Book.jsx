import React, { useState } from 'react'
import {IoIosArrowDropright} from 'react-icons/io'
import {IoIosArrowDropleft} from 'react-icons/io'
import flipSound from '../assets/turnpage-99756.mp3'

const Book = () => {

  const [currentLocation, setCurrentLocation] = useState(1);
  const maxLocation = 4; 
  const [page1Flipped, setPage1Flipped] = useState(false);
  const [page2Flipped, setPage2Flipped] = useState(false);
  const [page3Flipped, setPage3Flipped] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  
  const flipAudio = new Audio(flipSound)

  const nextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          setPage1Flipped(true);
          setZIndex(1);
          break;
        case 2:
          setPage2Flipped(true);
          setZIndex(2);
          break;
        case 3:
          setPage3Flipped(true);
          setZIndex(3);
          break;
        
        default:
          throw new Error("Unknown state");
      }
      setCurrentLocation(currentLocation + 1);
      flipAudio.play();
    }
  };

  const prevPage = () => {
    if (currentLocation > 0) {
      switch (currentLocation) {
        case 4:
          setPage3Flipped(false);
             setZIndex(3);
          break;
        case 3:
          setPage2Flipped(false);
          setZIndex(2);
          break;
        case 2:
          setPage1Flipped(false);
          setZIndex(1);
          break;
        default:
          throw new Error("Unknown state");
      }
      setCurrentLocation(currentLocation - 1);
      flipAudio.play();
    }
  };
  
  return (
    <div className='container-book'>
      <div className="left-a">
      <IoIosArrowDropleft className={`left-arrow ${page1Flipped ? 'movel' : ''}`} onClick={prevPage}/>
      </div>
      <div className="book">
      <div id='p1' className={`paper-one ${page1Flipped ? 'flipped' : ''}`} style={{ zIndex: zIndex === 1 ? 3 : 1 }}>
      <div className='front'><div><h1>Green's Chippy's Menu</h1></div></div>
      <div className='back'><h1 className='menu-content'>Back 1</h1></div>
      </div>
      <div id='p2' className={`paper-two ${page2Flipped ? 'flipped' : ''}`} style={{ zIndex: zIndex === 2 ? 2 : 1 }}>
      <div className='front'><h1>Front 2</h1></div>
      <div className='back'><h1 className='menu-content'>Back 2</h1></div>
      </div>
      <div className={`paper-three ${page3Flipped ? 'flipped' : ''}`} style={{ zIndex: zIndex === 3 ? 1 : 0 }}>
      <div className='front'><h1>Front 3</h1></div>
      <div className='back'><h1 className='menu-content'> Back 3</h1></div>
      </div>
      </div>
      <div className="right-a">
      <IoIosArrowDropright className={`right-arrow ${page3Flipped ? 'mover' : 'moverb'} `} onClick={nextPage}/> 
      </div>
    </div>  
  )
}

export default Book
