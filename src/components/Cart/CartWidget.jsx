import React, { useContext, useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import { CartContext } from '../../Context/ShoppingCartContext';

const CartWidget = () => {

  const { cart } = useContext(CartContext);
  const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        const nuevaCantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);
        setCantidadTotal(nuevaCantidadTotal);
        console.log(nuevaCantidadTotal)
    }, [cart]);


  return (
    <div className="carrito-container" >
      <button>
      <Text fontSize='xl' fontWeight='bold'>{ cantidadTotal }</Text>
        <img src="https://iili.io/JC5OLTg.png" alt="carrito de compras" style={{ minWidth: '50px' }}/>       
      </button>
    </div>
  )
}

export default CartWidget