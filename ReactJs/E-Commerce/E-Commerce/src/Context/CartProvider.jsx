import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(product, quantity) {
    setItems((prev) => {
      const exists = prev.some((item) => item.product.id === product.id);

      if (exists) {
        return prev.map((item) => {
          item.product.id = product.id
            ? { ...items, quantity: item.quantity + quantity }
            : item;
        });
      }

      return [...prev, { product, quantity }];
    });
  }

  const totalQuanity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: items,
        addToCart,
        totalQuanity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
