

const priceInput = document.getElementById('price');

const quantityInput = document.getElementById('quantity');

const calculateButton = document.getElementById('calculateButton');

const subtotalText = document.getElementById('subtotal');

const discountText = document.getElementById('discount');

const finalAmountText = document.getElementById('finalAmount');

const messageText = document.getElementById('message');



function calculateBill() {
    const price =  Number(priceInput.value);    
    const quantity = Number(quantityInput.value);


    const subtotal = price * quantity;

    let discount = 0;

    if(subtotal > 1000){
        discount = subtotal * 0.1;

        messageText.textContent = "You received a 10% discount!";

        messageText.style.color = "green";

    }else{
        messageText.textContent = "No discount available.";
        messageText.style.color = "red";
    }

    const finalAmount = subtotal - discount;


    subtotalText.textContent = "Subtotal: $" + subtotal;

    discountText.textContent = "Discount: $" + discount;

    finalAmountText.textContent = "Final Amount: $" + finalAmount;

}


 calculateButton.addEventListener('click', calculateBill);


