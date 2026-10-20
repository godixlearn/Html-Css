import { Link } from "react-router-dom";
import styles from "./OfferBanner.module.css";

function OfferBanner({ offer }) {
  const bgStyle = {
    "--bg-image": `url(${offer.imageUrl})`,
  };

  return (
    <section className={styles.offer} style={bgStyle}>
      {" "}
      <div className={styles.content}>
        <span className={styles.eyebrow}>{offer.eyebrow}</span>
        <h1 className={styles.title}>{offer.title}</h1>
        <p className={styles.description}>{offer.description}</p>

        <Link to="/products" className={styles.ctaButton}>
          {offer.ctaText}
        </Link>
      </div>
    </section>
  );
}

export default OfferBanner;
