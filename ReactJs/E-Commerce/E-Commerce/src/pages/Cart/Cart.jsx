import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useCart } from "../../Context/CartContext";

function Cart() {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
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
          {cartItems.map((item) => {
            const product = item.product;

            return (
              <article key={product.id} className={styles.cartItem}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={styles.productImage}
                />

                <div className={styles.itemDetails}>
                  <p className={styles.category}>{product.category}</p>
                  <h2>{product.name}</h2>
                  <p className={styles.brand}>{product.brand}</p>

                  <div className={styles.prices}>
                    <strong>{formatPrice(product.price)}</strong>
                    <del>{formatPrice(product.originalprice)}</del>
                  </div>

                  <div className={styles.itemActions}>
                    <div className={styles.quantityControl}>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, -1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        disabled={item.quantity >= product.stock}
                        onClick={() => updateQuantity(product.id, 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={() => removeItem(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong className={styles.itemTotal}>
                  {formatPrice(product.price * item.quantity)}
                </strong>
              </article>
            );
          })}

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
