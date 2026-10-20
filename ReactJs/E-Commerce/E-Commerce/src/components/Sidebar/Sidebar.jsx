import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <aside
      id="shop-sidebar"
      className={`${styles.sidebar} ${
        isOpen ? styles.open : ""
      }`}
      aria-label="Sidebar navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div className={styles.sidebarHeader}>
        <h2>Menu</h2>

        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      <nav className={styles.navbar}>
        <Link to="/" onClick={onClose}>
          Home
        </Link>
        <Link to="/products" onClick={onClose}>
          Products
        </Link>
        <Link to="/cart" onClick={onClose}>
          Cart
        </Link>
        <Link to="/profile" onClick={onClose}>
          Profile
        </Link>
      </nav>
    </aside>
  );
}