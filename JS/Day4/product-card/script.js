const products = [
  {
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
  },
  {
    name: "Mouse",
    price: 400,
    image: "mouse.jpg",
  },
  {
    name: "keyboard",
    price: 1200,
    image: "keyboard.jpg",
  },
];

const productContainer = document.getElementById("productContainer");

function showProdcuts(){
  for(let i = 0; i < products.length; i++){
    let product = products[i];

    let card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button id="product-button">View Product</button>
      </div>
    `
    productContainer.appendChild(card);
  }
}

showProdcuts();