import { createContext, useState } from "react";

export const CartContext = createContext();

const ShoppingCartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart, cantidad, setCantidad }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default ShoppingCartProvider;
