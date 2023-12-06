import React, { useContext, useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import { CartContext } from '../../Context/ShoppingCartContext';
import './CartWidget.css'

const CartWidget = () => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const { cart, setCart } = useContext(CartContext);


  useEffect(() => {
    if (cart && cart.length) {
      const nuevaCantidadTotal = cart.reduce((total, item) => {
        if (item && item.cantidad) {
          return total + item.cantidad;
        }
        return total;
      }, 0);
      setCantidadTotal(nuevaCantidadTotal);
    } else {
      setCantidadTotal(0);
    }

    // Guardar en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart, setCart]);



  return (
    <div className="carrito-container" >
      <button>
      <Text fontSize='xl' fontWeight='bold'>{ cantidadTotal }</Text>
        <img src="https://iili.io/JC5OLTg.png" alt="carrito de compras" className='imgCart' />       
      </button>
    </div>
  )
}

export default CartWidget