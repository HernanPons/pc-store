import React, { useState, useEffect } from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Cart from './components/Cart/Cart.jsx'
import ItemDetail from './components/ItemDetails/ItemDetail.jsx'
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer.jsx'
import ShoppingCartProvider from './Context/ShoppingCartContext.jsx'
import Loader from './components/Loader.jsx'
import Footer from './components/Footer.jsx';
import PagTrabajando from './components/PagTrabajando.jsx'

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1000)});

  return (
    <>      
      <ShoppingCartProvider>
        <BrowserRouter>           
            <NavBar />             
            {showLoader ? (              
            <Loader />
            ) : (
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/productos' element={<ItemListContainer />} />
              <Route exact path='/productos/:Categoria' element={<ItemListContainer />} />
              <Route exact path='/producto/:ID' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route exact path='/PagTrabajando' element={<PagTrabajando />} />
            </Routes>
            )}
            <Footer />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App