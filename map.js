//map method
//ak array banake return krta h
//take square function as callback so square func must have return value

const numbers = [3,4,5,6,7];

const square = function(number){
    return number*number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);