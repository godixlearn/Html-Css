import { useState } from "react";
import Product from "./components/Product/Product";
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple MacBook Air M3",
      description:
        "Powerful and lightweight laptop designed for everyday work, coding, and creative tasks.",
      price: 99999,
      category: "Laptop",
      rating: 4.8,
      stock: 12,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      description:
        "Premium wireless headphones with industry-leading noise cancellation and immersive sound.",
      price: 29999,
      category: "Headphones",
      rating: 4.7,
      stock: 8,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    },
    {
      id: 3,
      name: "Apple iPhone 16",
      description:
        "A powerful smartphone with an advanced camera system and fast performance.",
      price: 79999,
      category: "Smartphone",
      rating: 4.6,
      stock: 15,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    },
    {
      id: 4,
      name: "Logitech MX Master 3S",
      description:
        "Advanced wireless mouse with precise tracking and an ergonomic design for professionals.",
      price: 8999,
      category: "Accessories",
      rating: 4.8,
      stock: 20,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 5,
      name: "Samsung 4K Smart TV",
      description:
        "Crystal-clear 4K display with smart features for an immersive home entertainment experience.",
      price: 54999,
      category: "Television",
      rating: 4.5,
      stock: 6,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    },
    {
      id: 6,
      name: "Apple Watch Series 10",
      description:
        "Smartwatch with health tracking, fitness features, notifications, and a sleek modern design.",
      price: 46999,
      category: "Smartwatch",
      rating: 4.7,
      stock: 10,
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26",
    },
  ]);

  return (
    <div className={styles.page}>
      <div className={styles.productList}>
        {products.map((product) => (
          <Product Key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default App;
