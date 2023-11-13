import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ItemID from './components/ItemID.jsx'
import Cart from './components/Cart.jsx'


const App = () => {
  return (
    <div>
    <BrowserRouter>
        
        <NavBar /> 
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/components/itemListContainer' element={<ItemListContainer />} />
          <Route exact path='/categoria/:Categoria' element={<ItemListContainer />} />
          <Route exact path='/itemID/:ID' element={<ItemID />} />
          <Route exact path='/cart' element={<Cart />} />




        {/* <div className='container'>
          <ItemDetailContainer />
        </div> */}


        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App