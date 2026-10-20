import { Link } from "react-router-dom";
import styles from "./HeroBanner.module.css";

function HeroBanner({ banner }) {
  const bgStyle = {
    "--bg-image": `url(${banner.imageUrl})`,
  };

  return (
    <section className={styles.hero} style={bgStyle}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>{banner.eyebrow}</span>
        <h1 className={styles.title}>{banner.title}</h1>
        <p className={styles.description}>{banner.description}</p>

        <Link to="/products" className={styles.ctaButton}>
          {banner.ctaText}
        </Link>
      </div>
    </section>
  );
}

export default HeroBanner;
