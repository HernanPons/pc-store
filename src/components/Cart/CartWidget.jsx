import React, { useContext, useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import { CartContext } from '../../Context/ShoppingCartContext';

const CartWidget = () => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    const nuevaCantidadTotal = localCart.reduce((total, item) => total + item.cantidad, 0);
    setCantidadTotal(nuevaCantidadTotal);
  }, [setCart]);

  useEffect(() => {
    if (cart && cart.length) {
      const nuevaCantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);
      setCantidadTotal(nuevaCantidadTotal);
    } else {
      setCantidadTotal(0);
    }
      localStorage.setItem('cart', JSON.stringify(cart));
    
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