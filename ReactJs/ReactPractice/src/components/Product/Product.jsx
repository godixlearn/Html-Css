import styles from "./Product.module.css";

function Product(props) {
<<<<<<< HEAD
  const { name, image, category, rating, stock, description, price } =
    props.product;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.productCard}>
        <img src={image} alt={name} className={styles.productImage} />
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.priceRatingRow}>
          <p className={styles.price}>${price}</p>
          <p className={styles.rating}>⭐ {rating}</p>
        </div>

        <p className={styles.stockStatus}>
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </p>
        <hr className={styles.divider} />
      </div>
=======
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
>>>>>>> main
    </div>
  );
}

export default Product;
