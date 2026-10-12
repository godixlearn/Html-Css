import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <div className={styles.brandTitle}>
            <span className={styles.chefIcon}>👨‍🍳</span>
            <span>Foodieeeee</span>
          </div>
          

          <p>Eat Healthy .Stay happy Forever</p>
        </div>

        
        <div className={styles.footerContent}>
          <nav className={styles.footerNav}>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#offers">Offers</a>
            <a href="#contact">Contact</a>
          </nav>

          <p className={styles.copyright}>
            ©  Foodieeee. Feel the foof and taste.
          </p>
        </div>

        
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="Facebook">●</a>
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="Twitter">♥</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
