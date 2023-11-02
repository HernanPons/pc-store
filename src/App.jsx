import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'
import Promise from './components/Promise.jsx'
import CardItem from './components/CardItem'
import './App.css'



const App = () => {
  return (
    <div>
      <NavBar /> 
      {/* <ItemListContainer greeting={"Bienvenido"} /> */}
      {/* <Promise /> */}
      <div className='container'>
        <Promise />
      </div>
    </div>
  )
}

export default App