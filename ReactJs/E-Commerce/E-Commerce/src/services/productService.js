import { products } from "../data/products";

export function getProducts() {
  return products;
}

export function getProductsById(id) {
  return products.find((product) => product.id === id);
}
