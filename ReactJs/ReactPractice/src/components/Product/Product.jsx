import styles from "./Product.module.css";

function Product(props) {
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
    </div>
  );
}

export default Product;
