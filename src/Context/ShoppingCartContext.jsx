import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const ShoppingCartProvider = (props) => {
  // Mover el estado de cart a la parte superior y cargarlo desde localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    console.log("Stored cart from localStorage:", storedCart);
    return storedCart || [];
  });
  const [cantidad, setCantidad] = useState([]);
  const [agregarCart, setAgregarCart] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const agregarCarrito = (producto, cantidad) => {
    setCart((prevCart) => [...prevCart, { ...producto, cantidad }]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, cantidad, setCantidad }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;

