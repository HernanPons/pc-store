import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/ShoppingCartContext';
import { Button } from '@chakra-ui/react';
import './Cart.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cantidadTotal, setCantidadTotal] = useState(2);
  const [agregarCart, setAgregarCart] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart !== null) {
      setCart(storedCart);
    } else {
      console.log('No se encontró un valor en localStorage para la clave "cart".');
    }
  }, [setCart]);
  
  

  useEffect(() => {
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
    Swal.fire({
      text: "Se eliminó un producto del carrito",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };



  return (
    <div className='cartContainer'>
      
      {cart.length === 0 ? (
        <p className='emptyCartMessage'>El carrito está vacío. Agrega productos para continuar.</p>
      ) : (
      <>
      <ul>
        {agregarCart.map((item, index) => (
          <li className='containerCart' key={index}>
            <img className='imgCartCard' src={item.Img} alt=""/>
            <p className='nameCart' >Nombre: {item.Nombre}</p>
            <p className='precioCart' >Precio: ${item.Precio * item.cantidad}</p>
            <Button onClick={() => decrementarCantidad(item.Nombre)}>-</Button>
            <p className='cantidadCart'>Cantidad: {item.cantidad}</p>
            <Button onClick={() => incrementarCantidad(item.Nombre)}>+</Button>
            <Button onClick={() => eliminarItem(item.Nombre)}>Eliminar</Button>
          </li>
        ))}
      </ul>

      <p className='cartTotals'>Cantidad Total: {cantidadTotal}</p>
      <p className='cartTotals'>Precio Total: ${precioTotal}</p>
      <p className='cartTotals'><Link to={`../components/Cart/Compra`}>
        <Button className='cartButton'>Comprar Carrito</Button>
      </Link></p>
      </>
      )}
    </div>
  );
};

export default Cart;
