const products = [
  {
    name: "Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    inStock: true
  },
  {
    name: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    inStock: true
  },
  {
    name: "Wireless Mouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    inStock: false
  }
];

const productContainer = document.getElementById("productContainer");

function showProducts() {
  productContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">
        <h2>${product.name}</h2>
        <p class="price">₹${product.price}</p>
        <p class="stock">
          ${product.inStock ? "In Stock" : "Out of Stock"}
        </p>
        <button ${product.inStock ? "" : "disabled"}>
          ${product.inStock ? "View Product" : "Unavailable"}
        </button>
      </div>
    `;

    let button = card.querySelector("button");

    button.addEventListener("click", function () {
      alert(product.name + " costs ₹" + product.price);
    });

    productContainer.appendChild(card);
  }
}

showProducts();