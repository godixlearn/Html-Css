import { Link } from "react-router-dom";
import styles from "./CategorySection.module.css";

function CategorySection({ categories = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.subtitle}>Explore Collections</span>
            <h2 className={styles.title}>Shop by Category</h2>
          </div>

          <Link to="/products" className={styles.viewAll}>
            View All <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className={styles.categoryCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className={styles.categoryImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <span className={styles.exploreLink}>
                  Explore <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
