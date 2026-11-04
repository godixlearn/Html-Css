import { useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Add product to cart
  function addToCart(product, quantity) {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { product, quantity }];
    });

    toast.success(`${product.name} added to cart!`);
  }

  // Update quantity
  function updateQuantity(id, change) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // Remove item
  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.product.id !== id));

    toast.info("Item removed from cart");
  }

  // Total quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: items,
        addToCart,
        updateQuantity,
        removeItem,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
