// typeof operator

// data type(primitive data types)
//string
//numbrs
//booleans
//undefine
//null
//BigInt
//Symbol

let age = 22;
let firstName = "Rishabh";

// console.log(typeof age)

// convert number to String
age = age + "";
//or
age = String(age);
console.log(typeof age);

// convert string to number
let mystr = "34"; //add +"34"
//or
mystr = Number(mystr);
console.log(typeof mystr);

// string concatenation
let string1 = "Rishabh";
let string2 = "yadav";
let age1 = 19;

let fullName = string1+ " " + string2;
console.log(fullName);

let aboutMe = `My name is ${string1} and my age is ${age1}` ;
console.log(aboutMe);

//undefined
//null -> typeof null object h this is bug in js

// BigInt
let myNumber = BigInt(32);
//or 
let myNumber2 = 21n;
console.log(myNumber + myNumber2)

//booleans

