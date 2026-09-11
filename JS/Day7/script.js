const products = [
  {
    name: "Apple",
    price: 120,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600"
  },
  {
    name: "Banana",
    price: 60,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600"
  },
  {
    name: "Tomato",
    price: 45,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600"
  },
  {
    name: "Milk",
    price: 35,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600"
  },
  {
    name: "Potato Chips",
    price: 40,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600"
  }
];

function showProducts(productList) {

  const productContainer =
    document.getElementById("productContainer");

  productContainer.innerHTML = "";


  for (let i = 0; i < productList.length; i++) {

    const product = productList[i];

    productContainer.innerHTML += `
      <div class="product-card">

        <img
          src="${product.image}"
          alt="${product.name}"
        />

        <div class="product-content">

          <p class="category">
            ${product.category}
          </p>

          <h3>${product.name}</h3>

          <p class="price">
            ₹${product.price}
          </p>

          <button class="delete-button" onclick="deleteProduct(${i})">Delete Product</button>
        </div>
      </div>
    `;
  }


  document.getElementById("productCount").innerText =
    productList.length + " product(s) found";


  if (productList.length === 0) {

    document.getElementById("noProducts").innerText =
      "No products found.";

  } else {

    document.getElementById("noProducts").innerText = "";

  }
}

function deleteProduct(index){
  products.splice(index, 1);

  showProducts(products);
}

function filterProducts(){
  const searchText = document.getElementById("searchInput").value;
  const category = document.getElementById("categoryFilter").value;

  let filteredProducts = products;

  if(searchText !== ""){
    filteredProducts = filteredProducts.filter((product)=>{
        return product.name.toLowerCase().includes(searchText.toLowerCase()) 
    })
  }

  if(category !== "all"){
    filteredProducts = filteredProducts.filter((product)=>{
        return product.category === category;
    })
  }

  showProducts(filteredProducts);
}

showProducts(products);
