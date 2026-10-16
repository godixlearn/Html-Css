import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <span>🛒</span>
        <h1>Shopify</h1>
      </div>

      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}
