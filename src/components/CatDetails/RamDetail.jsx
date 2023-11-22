import React from 'react'

const RamDetail = (props) => {
    const {product} = props;
  return (
    <div>
        <>
            <li>Capacidad: {product.Capacidad}</li>
            <li>Cantidad De Memorias: {product["Cantidad De Memorias"]}</li>
            <li>Velocidad: {product.Velocidad}</li>
            <li>Tipo: {product.Tipo}</li>
            <li>Latencia: {product.Latencia}</li>
            <li>Voltaje: {product.Voltaje}</li>
        </>
    </div>
  )
}


export default RamDetail