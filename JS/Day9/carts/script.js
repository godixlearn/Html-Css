


let carts = [];


function getCarts(){
    fetch("https://dummyjson.com/carts")
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            carts = data.carts;

            showCarts(carts);
        })
}


function showCarts(cartList){
    const cartContainer = document.getElementById("cartContainer");

    cartContainer.innerHTML = "";

    for(let i=0; i < cartList.length; i++){
        const cart = cartList[i];

        cartContainer.innerHTML += `
            <div class="card">
                <img 
                    src="${cart.products[0].thumbnail}"
                    alt="${cart.products[0].title}"
                    class="card-image"
                />

                <h2>Title ${cart.products[0].title}</h2>
            </div>
        `
    }
}


getCarts();