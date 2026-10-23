import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsById } from "../../services/productService";
import styles from "./ProductDetails.module.css";

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

function ProductDetails() {
  const { id } = useParams();
  const product = getProductsById(Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className={styles.notFound}>
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  const {
    name,
    description,
    price,
    originalprice,
    rating,
    reviewCount,
    imageUrl,
    category,
    badge,
    brand,
    stock = 0,
    Highlights = [],
    specification = {},
  } = product;

  const discount =
    originalprice > price
      ? Math.round(((originalprice - price) / originalprice) * 100)
      : 0;

  const isOutOfStock = stock <= 0;

  const increaseQuantity = () => {
    setQuantity((previous) => Math.min(previous + 1, stock));
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(previous - 1, 1));
  };

  const handleAddToCart = () => {
    // Connect your cart context or cart service here.
    console.log("Add to cart:", {
      productId: product.id,
      quantity,
    });
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/home">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span aria-current="page">{name}</span>
        </nav>

        <div className={styles.productLayout}>
          {/* Product image */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img src={imageUrl} alt={name} className={styles.productImage} />

              {badge && <span className={styles.badge}>{badge}</span>}
            </div>
          </div>

          {/* Product information */}
          <div className={styles.productInfo}>
            <span className={styles.category}>{category}</span>

            <h1 className={styles.productName}>{name}</h1>

            <p className={styles.brand}>
              by <strong>{brand}</strong>
            </p>

            <div className={styles.ratingWrapper}>
              <span className={styles.star} aria-hidden="true">
                ★
              </span>
              <span className={styles.rating}>{rating}</span>
              <span className={styles.reviewCount}>
                ({reviewCount.toLocaleString("en-IN")} reviews)
              </span>
            </div>

            <div className={styles.priceWrapper}>
              <strong className={styles.price}>{formatPrice(price)}</strong>

              {discount > 0 && (
                <>
                  <del className={styles.originalPrice}>
                    {formatPrice(originalprice)}
                  </del>

                  <span className={styles.discount}>{discount}% off</span>
                </>
              )}
            </div>

            <p className={styles.description}>{description}</p>

            <p className={isOutOfStock ? styles.outOfStock : styles.stock}>
              {isOutOfStock
                ? "Out of stock"
                : stock <= 5
                  ? `Only ${stock} left`
                  : "In Stock"}
            </p>

            {/* Quantity and Add to Cart */}
            <div className={styles.cartActions}>
              <div
                className={styles.quantitySelector}
                aria-label="Quantity selector"
              >
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={isOutOfStock || quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className={styles.quantity}>{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={isOutOfStock || quantity >= stock}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className={styles.addToCart}
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>

            {/* Highlights */}
            {Highlights.length > 0 && (
              <section className={styles.highlights}>
                <h2>Product Highlights</h2>

                <ul>
                  {Highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Specifications */}
            {Object.keys(specification).length > 0 && (
              <section className={styles.specifications}>
                <h2>Specifications</h2>

                <dl className={styles.specificationList}>
                  {Object.entries(specification).map(([key, value]) => (
                    <div className={styles.specificationRow} key={key}>
                      <dt>
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (char) => char.toUpperCase())}
                      </dt>
                      <dd>{String(value)}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <p className={styles.sku}>
              SKU: PRD-{String(product.id).padStart(4, "0")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
