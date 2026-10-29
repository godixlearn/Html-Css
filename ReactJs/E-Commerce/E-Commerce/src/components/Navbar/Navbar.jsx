import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logout, getAuthErrorMessage } from "../../services/authService";
import { toast } from "react-toastify";

export default function Navbar({ onMenuClick, isSidebarOpen }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  async function handleLogout() {
    try {
      setIsProfileOpen(false);

      await logout();

      navigate("/signin");

      toast.success("Logged Out successfully!");
    } catch (error) {
      toast.error(getAuthErrorMessage(error.code));
    }
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.leftSection}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
          aria-controls="shop-sidebar"
        >
          ☰
        </button>

        <Link to="/" className={styles.logo}>
          <span aria-hidden="true">🛒</span>
          <h1>Shopify</h1>
        </Link>
      </div>

      <nav className={styles.navbar} aria-label="Main navigation">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <div className={styles.profileWrapper} ref={profileRef}>
        <button
          type="button"
          className={styles.profileButton}
          onClick={() => setIsProfileOpen((open) => !open)}
          aria-label="Open profile menu"
          aria-expanded={isProfileOpen}
          aria-haspopup="menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="23"
            height="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
          </svg>
        </button>

        {isProfileOpen && (
          <div className={styles.dropdown} role="menu">
            <Link
              to="/profile"
              role="menuitem"
              className={styles.dropdownItem}
              onClick={() => setIsProfileOpen(false)}
            >
              <span aria-hidden="true">♙</span>
              My Profile
            </Link>

            <button
              type="button"
              role="menuitem"
              className={`${styles.dropdownItem} ${styles.logoutButton}`}
              onClick={handleLogout}
            >
              <span aria-hidden="true">↪</span>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
