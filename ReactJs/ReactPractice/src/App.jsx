// import { useState } from "react";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";
// import Counter from "./components/Counter/Counter";
import Product from "./components/Product/Product";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const [isSignUp, setIsSignUp] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
        setLoading(false);
      });
  }, []);

  return (
    // <div>
    //   {isSignUp ? (
    //     <SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    //   ) : (
    //     <SignIn isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    //   )}
    // </div>

    // <Counter />

    <div>
      <h1>Products</h1>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
