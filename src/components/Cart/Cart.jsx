import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/ShoppingCartContext';
import { Button } from '@chakra-ui/react';
import './Cart.css'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cantidadTotal, setCantidadTotal] = useState(2);
  const [agregarCart, setAgregarCart] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
  
    console.log('Valor almacenado en localStorage:', storedCart);
  
    if (storedCart !== null) {
      setCart(storedCart);
    } else {
      console.log('No se encontró un valor en localStorage para la clave "cart".');
    }
  }, [setCart]);
  
  

  useEffect(() => {
    /* const updateCart = JSON.stringify(cart)
    localStorage.setItem('cart', updateCart)
 */
    const agregado = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.Nombre === item.Nombre);

      if (existingItem) {
        existingItem.cantidad += item.cantidad;
      } else {
        acc.push({ ...item });
      }

      return acc;
    }, []);

    setAgregarCart(agregado);

    const totalQuantity = agregado.reduce((total, item) => total + item.cantidad, 0);
    setCantidadTotal(totalQuantity);

    const totalPrecio = agregado.reduce((total, item) => total + item.Precio * item.cantidad, 0);
    setPrecioTotal(totalPrecio);
  }, [cart]);

  const actualizarCart = (updateCart) => {
    setCart(updateCart);
  };

  const incrementarCantidad = (nombre) => {
    const updateCart = agregarCart.map((item) => {
      if (item.Nombre === nombre) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });

    actualizarCart(updateCart);
  };

  const decrementarCantidad = (nombre) => {
    const updateCart = agregarCart.map((item) => {
      if (item.Nombre === nombre && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });

    actualizarCart(updateCart);
  };

  const eliminarItem = (nombre) => {
    const updateCart = cart.filter((item) => item.Nombre !== nombre);
    actualizarCart(updateCart);
  };

  return (
    <div>
      <h1>SOY UN CARRITO DE COMPRAS</h1>

      <ul>
        {agregarCart.map((item, index) => (
          <li className='containerCart' key={index}>
            <img className='imgCart' src={item.Img} alt="" style={{ maxWidth: '95px' }} />
            <p className='nameCart' >Nombre: {item.Nombre}</p>
            <p className='precioCart' >Precio: ${item.Precio * item.cantidad}</p>
            <Button onClick={() => decrementarCantidad(item.Nombre)}>-</Button>
            <p className='cantidadCart'>Cantidad: {item.cantidad}</p>
            <Button onClick={() => incrementarCantidad(item.Nombre)}>+</Button>
            <Button onClick={() => eliminarItem(item.Nombre)}>Eliminar</Button>
          </li>
        ))}
      </ul>

      <p>Cantidad Total: {cantidadTotal}</p>
      <p>Precio Total: ${precioTotal}</p>
    </div>
  );
};

export default Cart;
