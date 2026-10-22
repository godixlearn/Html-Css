import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";
import { getProducts } from "../../services/productService";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const products = getProducts();

  const category = searchParams.get("category");

  const filteredProducts = products.filter(
    (product) =>
      (!category || product.category.toLowerCase() === category) &&
      `${product.name} ${product.category}`.toLowerCase().includes(search),
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.subtitle}>SHOP</span>
            <h1 className={styles.title}>All Products</h1>
            <p className={styles.description}>
              Discover products from our collection.
            </p>
          </div>

          <div className={styles.searchWrapper}>
            <input
              type="search"
              className={styles.searchInput}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
            />
          </div>
        </div>

        <div className={styles.resultsHeader}>
          <span className={styles.productCount}>
            Showing {filteredProducts.length} products
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No products found</h2>
            <p>Try searching with a different keyword.</p>
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
