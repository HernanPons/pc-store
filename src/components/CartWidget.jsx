import React from 'react'
import { Text } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div className="carrito-container" >
      <button>
      <Text fontSize='xl' fontWeight='bold'>5</Text>
        <img src="https://iili.io/JC5OLTg.png" alt="carrito de compras" />       
      </button>
    </div>
  )
}

export default CartWidget