let products = [];

function getProducts(){
  fetch("https://dummyjson.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) =>{
      products = data.products; // assign the products data
      showProducts(products);
    })
}

function showProducts(productList) {

  const productContainer =
    document.getElementById("productContainer");

  productContainer.innerHTML = "";


  for (let i = 0; i < productList.length; i++) {

    const product = productList[i];

    productContainer.innerHTML += `
      <div class="product-card">

        <img
          src="${product.thumbnail}"
          alt="${product.title}"
        />

        <div class="product-content">

          <p class="category">
            ${product.category}
          </p>

          <h3>${product.title}</h3>

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

getProducts();