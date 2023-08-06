import './App.css';
import Home from './components/Home';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import OurFood from './components/OurFood';
import AboutUs from './components/AboutUs';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/ourfood' element={<OurFood/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<GetInTouch/>}></Route>
      </Route>
    )  
    )
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}
  

export default App
