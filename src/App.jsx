import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'
import PromiseComponent from './components/ItemDetail.jsx'
import CardItem from './components/CardItem'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import ItemCount from './components/ItemCount.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        
        <NavBar /> 
        
        <Routes>
          <Route exact path='/' element={<ItemDetailContainer />} />





        {/* <div className='container'>
          <ItemDetailContainer />
        </div> */}


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App