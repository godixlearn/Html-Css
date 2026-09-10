const products = [
    { name : "Smart Watch", price : "$299", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"},
    { name : "Headphones", price : "$299", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"},
    { name : "Wireless Mouse", price : "$299", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"}
]

const productContainer = document.getElementById("productContainer");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const addProductBtn = document.getElementById("addProductBtn");

function showProducts(){

    productContainer.innerHTML = "";
    
    for(let i = 0; i < products.length; i++){

        const product = products[i];

        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" />
                <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Buy Now</button>
                </div>
            </div>
        `
    }
}


function addProduct(){
    const name = productName.value;
    const price = Number(productPrice.value);

    const newProduct = {
        name : name,
        price : price,
        image : ""
    }

    products.push(newProduct)



    showProducts();

    productName.value = "";
    productPrice.value = "";
} 

addProductBtn.addEventListener("click", addProduct);

showProducts();

