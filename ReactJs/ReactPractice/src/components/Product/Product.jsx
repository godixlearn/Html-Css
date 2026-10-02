import styles from "./Product.module.css";

function Product(props) {
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
  } = props.product;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={thumbnail} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.priceContainer}>
        <span className={styles.price}>${price.toFixed(2)}</span>
        {discountPercentage > 0 && (
          <span className={styles.discount}>{discountPercentage}% OFF</span>
        )}
      </div>

      <p className={styles.metaText}>Brand: {brand}</p>
      <p className={styles.metaText}>Category: {category}</p>
      <p className={styles.metaText}>Rating: {rating} ★</p>
      <p className={styles.metaText}>Stock: {stock} units left</p>
    </div>
  );
}

export default Product;
