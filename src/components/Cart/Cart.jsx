import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/ShoppingCartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [agregarCart, setAgregarCart] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

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
  };

  return (
    <div>
      <h1>SOY UN CARRITO DE COMPRAS</h1>

      <ul>
        {agregarCart.map((item, index) => (
          <li key={index}>
            <img src={item.Img} alt="" style={{ maxWidth: '95px' }} />
            <p>Nombre: {item.Nombre}</p>
            <p>Precio: ${item.Precio * item.cantidad}</p>
            <button onClick={() => decrementarCantidad(item.Nombre)}>-</button>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={() => incrementarCantidad(item.Nombre)}>+</button>
            <button onClick={() => eliminarItem(item.Nombre)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>Cantidad Total: {cantidadTotal}</p>
      <p>Precio Total: ${precioTotal}</p>
    </div>
  );
};

export default Cart;
