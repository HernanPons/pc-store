import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import ItemDetail from './components/ItemDetail.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'


const App = () => {
  return (
    <div>
    <BrowserRouter>
        
        <NavBar /> 
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/productos' element={<ItemListContainer />} />
          <Route exact path='/productos/:Categoria' element={<ItemListContainer />} />
          <Route exact path='/producto/:ID' element={<ItemDetailContainer />} />
          <Route exact path='components/cart' element={<Cart />} />




        {/* <div className='container'>
          <ItemDetailContainer />
        </div> */}


        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App