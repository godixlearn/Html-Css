import styles from "./Navabar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <h2 class={styles.logo}>
          <i class="fa-solid fa-heart" style={{ color: "rgb(251, 7, 29)" }}></i>
          Health Center
        </h2>

        <nav className={styles.nav}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#doctors">Doctors</a>
          <a href="#Contact">Contact</a>
          <a href="#Appointment" className={styles.navButton}>
            Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
