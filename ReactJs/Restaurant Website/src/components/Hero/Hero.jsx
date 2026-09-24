import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        
        <h2>Good Food</h2>
        <h1>Brings People Together</h1>
        <p>Experience the joy of dining with family and friends at our restaurant.</p>
        <a href="#menu" className={styles.button}>
         Order now
        </a>
      </div>
     
     
    </section>
  );
}

export default Hero;
