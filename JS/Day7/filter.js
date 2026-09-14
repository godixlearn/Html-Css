const products = [
  { name: "Apple", price: 120, category: "fruits" },
  { name: "Banana", price: 40, category: "fruits" },
  { name: "Broccoli", price: 80, category: "vegetables" },
  { name: "Milk", price: 60, category: "dairy" }
];


// const fruits = ["apple", "banana", "Oragnge"];

// console.log(fruits[0]);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// adding value to the array at the end

// fruits.push("Kivi");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);


// adding value to the array at the start



// fruits.unshift("Mango");

// console.log(fruits);

// fruits.shift();

// console.log(fruits);


// Includes(), find() and filter()

const fruits = ["banana", "apple", "Oragnge", "apple",];


// 1. Includes
// console.log(fruits.includes("Apple"));

// 2. find()

// const result = fruits.find((fruit) =>{
//     return fruit === "apple";
// })


// console.log(result);


// 3. filter

// const result = fruits.filter((fruit) =>{
//     return fruit === "apple";
// })


// console.log(result);







// const productName = "Apple";

// const searchedProducts = products.filter((product)=>{
//     return products.name === productName;
// });

// // console.log(searchedProducts);

// const affordableProducts = products.filter((product)=>{
//     // console.log(product.price < 100);
//     return product.price < 100;
// })

// // console.log(affordableProducts);


// const friutCategory = products.filter((product)=>{
//     return product.category === "fruits";
// }) 

// // console.log(friutCategory);


// const searchText = 'A';

// const searchResult = products.filter((product)=>{
//     return product.name.toLowerCase().includes(searchText.toLowerCase())
// })

// console.log(searchResult);


