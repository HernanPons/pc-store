import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'


const App = () => {
  return (
    <div>
      <NavBar /> 
      <ItemListContainer greeting={"Bienvenido"} />
    </div>
  )
}

export default App