import { createContext, useState } from "react";

export const CartContext = createContext();

const ShoppingCartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState([]);
    const [agregarCart, setAgregarCart] = useState([]);
    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const agregarCarrito = (producto, cantidad) => {
        setCart(prevCart => [...prevCart, { ...producto, cantidad }]);
      };

    return (
        <CartContext.Provider value={{ cart, setCart, cantidad, setCantidad }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default ShoppingCartProvider;
