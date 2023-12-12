import React, { useContext, useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../../Context/ShoppingCartContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCount = (initial = 0) => {
  if (initial < 1 || initial > 9) initial = 1;
  const [count, setCount] = useState(initial);
  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1);
  };
  const increment = () => {
    if (count < 9) setCount(prev => prev + 1);
  };
  const reset = () => {
    setCount(initial);
  };
  return { count, decrement, increment, reset };
};

const ItemCount = ({ product }) => {
  const { count, decrement, increment, reset } = useCount();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storeCart);
  }, [setCart]);

  const agregarCarritoClick = () => {
    const carritoEnLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const nuevoCarrito = [...carritoEnLocalStorage, { ...product, cantidad: count }];
    setCart(nuevoCarrito);
    localStorage.setItem('cart', JSON.stringify(nuevoCarrito));

    toast(`Se ${count === 1 ? 'agregó' : 'agregaron'} ${count} ${count === 1 ? 'producto' : 'productos'} al carrito`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  };


    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Button onClick={decrement}>-</Button>
          <span style={{ marginLeft: '20px', marginRight: '20px', display: 'inline-block', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', userSelect: 'none' }}>{count}</span>
          <Button onClick={increment}>+</Button>
        </div>
        <br />
        <div>
          <Button onClick={agregarCarritoClick} variant='solid' colorScheme='blue'>
            Agregar al carrito
          </Button>
        </div>
      </div>
    );
  };
  
  export default ItemCount;