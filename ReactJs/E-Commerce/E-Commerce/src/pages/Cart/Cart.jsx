import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import styles from "./Cart.module.css";

const initialCartItems = [
  { ...products[0], quantity: 1 },
  { ...products[1], quantity: 1 },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className={styles.page}>
        <div className={styles.emptyCart}>
          <span className={styles.emptyIcon} aria-hidden="true">
            ♡
          </span>
          <h1>Your cart is empty</h1>
          <p>Discover something you’ll love.</p>
          <Link to="/products" className={styles.checkoutButton}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} items in your cart</p>
      </header>

      <div className={styles.layout}>
        <section className={styles.itemsSection}>
          {cartItems.map((item) => (
            <article key={item.id} className={styles.cartItem}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles.productImage}
              />

              <div className={styles.itemDetails}>
                <p className={styles.category}>{item.category}</p>
                <h2>{item.name}</h2>
                <p className={styles.brand}>{item.brand}</p>

                <div className={styles.prices}>
                  <strong>{formatPrice(item.price)}</strong>
                  <del>{formatPrice(item.originalprice)}</del>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.quantityControl}>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      disabled={item.quantity >= item.stock}
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <strong className={styles.itemTotal}>
                {formatPrice(item.price * item.quantity)}
              </strong>
            </article>
          ))}

          <Link to="/products" className={styles.continueShopping}>
            ← Continue shopping
          </Link>
        </section>

        <aside className={styles.summary}>
          <h2>Order Summary</h2>

          <div className={styles.summaryRow}>
            <span>Subtotal ({totalItems} items)</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.totalRow}>
            <span>Total</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>

          <Link to="/checkout" className={styles.checkoutButton}>
            Proceed to Checkout
          </Link>

          <p className={styles.secureNote}>
            Secure checkout · Shop with confidence
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
