import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ onMenuClick, isSidebarOpen }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.leftSection}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Open sidebar"
          aria-expanded={isSidebarOpen}
          aria-controls="shop-sidebar"
        >
          ☰
        </button>

        <Link to="/" className={styles.logo}>
          <span>🛒</span>
          <h1>Shopify</h1>
        </Link>
      </div>

      <nav className={styles.navbar}>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}
