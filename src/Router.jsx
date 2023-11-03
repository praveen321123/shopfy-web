import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
				<Route path='about' element={<About/>}/>
				<Route path='product' element={<Product/>}/>
				<Route path='contact' element={<Contact/>}/>	
			</Routes>
    </div>
  )
}

export default Router