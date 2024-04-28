//intro to array

let fruits = ["apple", "mango", "grapes"];
console.log(fruits[1]);

console.log(typeof fruits);
console.log(Array.isArray(fruits));

//push
fruits.push("banana");
console.log(fruits);

//unshift -> add in starting(slow as compare to push pop)
fruits.unshift("kiwi");
console.log(fruits);


//shift -> remove from starting 
