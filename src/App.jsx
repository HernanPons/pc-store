import React, { useState, useEffect, useContext } from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Cart from './components/Cart/Cart.jsx'
import ItemDetail from './components/ItemDetails/ItemDetail.jsx'
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer.jsx'
import Loader from './components/Loader.jsx'
import Footer from './components/Footer.jsx';
import PagTrabajando from './components/PagTrabajando.jsx'
import { CartContext } from './Context/ShoppingCartContext';
import ShoppingCartProvider from './Context/ShoppingCartContext';
import Compra from './components/Cart/Compra.jsx'
import { ToastContainer } from 'react-toastify';

const App = () => {


  return (
    <>     
      <ShoppingCartProvider>
        <BrowserRouter>           
            <NavBar />             
            
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/productos' element={<ItemListContainer />} />
              <Route exact path='/productos/:Categoria' element={<ItemListContainer />} />
              <Route exact path='/producto/:ID' element={<ItemDetailContainer />} />
              <Route exact path='/components/Cart/Cart' element={<Cart />} />
              <Route exact path='/PagTrabajando' element={<PagTrabajando />} />
              <Route exact path='components/Cart/Compra' element={<Compra />} />
            </Routes>
            
            <Footer />
            <ToastContainer />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App