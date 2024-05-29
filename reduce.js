//reduce

const numbers = [1,2,3,4,5,6]

const sum = numbers.reduce((accumulator, currentValue) =>{
    return accumulator+currentValue;
},100);
// u may pass the initial value of accumulator like 100 here

console.log(sum);