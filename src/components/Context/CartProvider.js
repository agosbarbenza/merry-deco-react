import React, { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product, count) {
    if (!isInCart(product)) {
      setCart([...cart, { item: product, count: count }]);
    } else {
      const itemIndex = cart.findIndex((e) => e.item.id === product.id);
      cart[itemIndex].count = cart[itemIndex].count + count;
      setCart([...cart]);
    }
  }
  function isInCart(idProduct) {
    return cart.some((e) => e.item.id === idProduct);
  }
  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
