import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>Shopify</h2>
          <p className={styles.tagline}>
            Quality products delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Support</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Info</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Get in Touch</h3>
          <ul className={styles.contact}>
            <li>Email: support@shopify.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Mon – Fri: 9am – 6pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Shopify. All rights reserved.</p>
      </div>
    </footer>
  );
}
