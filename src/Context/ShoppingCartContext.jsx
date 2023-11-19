import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const comision = 58400

    return (
        <CartContext.Provider value={{ cart, setCart, comision }}>
        {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider

