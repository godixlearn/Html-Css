import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const {
    name,
    price,
    originalprice,
    rating,
    reviewCount,
    imageUrl,
    category,
    badge,
  } = product;

  const formatPrice = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const discount =
    originalprice > price
      ? Math.round(((originalprice - price) / originalprice) * 100)
      : 0;

  return (
    <article className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.productImage}
          loading="lazy"
        />

        {badge && <span className={styles.badge}>{badge}</span>}

        {discount > 0 && <span className={styles.discount}>-{discount}%</span>}
      </div>

      <div className={styles.productInfo}>
        <span className={styles.category}>{category}</span>

        <h3 className={styles.productName} title={name}>
          {name}
        </h3>

        <div className={styles.ratingWrapper}>
          <span className={styles.star} aria-hidden="true">
            ★
          </span>
          <span className={styles.rating}>{rating}</span>
          <span className={styles.reviewCount}>({reviewCount})</span>
        </div>

        <div className={styles.priceWrapper}>
          <strong className={styles.price}>{formatPrice(price)}</strong>

          {originalprice > price && (
            <del className={styles.originalPrice}>
              {formatPrice(originalprice)}
            </del>
          )}
        </div>

        <button type="button" className={styles.addToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
