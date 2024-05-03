//array distructuring

const myArray = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log(myvar1);
console.log(myvar2);
console.log(myNewArray);
