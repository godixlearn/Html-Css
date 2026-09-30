const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("This is using forEach()");

fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("Numbers array");

const numbers = [10, 20, 30];

numbers.forEach((number) => {
  console.log(number * 2);
});

console.log("This is Map");

const trippleNumbers = numbers.map((number) => {
  return number * 3;
});

console.log(trippleNumbers);
