import ProductCard from "../ProductCard/ProductCard";
import styles from "./FeaturedProducts.module.css";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ featuredProducts = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.subtitle}>Handpicked for You</span>
            <h2 className={styles.title}>Featured Products</h2>
          </div>

          <Link to="/products" className={styles.viewAll}>
            View All <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
