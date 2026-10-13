import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a href="#home" className={styles.logo}>
          Tasty <span>Bite</span>
        </a>

        <nav className={styles.links}>
          <a href="#Home">Home</a>
          <a href="#Menu">Menu</a>
          <a href="#About">About</a>
          <a href="#Offers">Offers</a>
          <a href="#Contact">Contact</a>
        </nav>

        <a href="#menu" className={styles.button}>
          Order now
        </a>
      </div>
    </header>
  );
}

export default Navbar;
