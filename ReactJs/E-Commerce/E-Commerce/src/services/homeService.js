import { heroBanner, homeOffer } from "../data/banners";
import { categories } from "../data/categories";
import { products, featuredProducts } from "../data/products";

export function getHomePageData() {
  return {
    hero: heroBanner,
    offer: homeOffer,
    categories: categories,
    products: products,
    featuredProducts: featuredProducts,
  };
}
