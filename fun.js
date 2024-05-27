// function

// function singhappyBirthady(){
//     console.log("happy Birthday");
 }

singhappyBirthady();

function twoPlusFour(){
    return (2+4);
}

const returnedValue = twoPlusFour();
console.log(returnedValue);

function sumTwoNumbers(num1, num2){
    return num1 + num2;
}

const sumOfTwoNum = sumTwoNumbers(4, 7);
console.log(sumOfTwoNum);

function findTarget(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target)
        {
            return true;
        }
    }
    return -1;
}

const myArray = [1,4,7,8,9,3,5];
const ans = findTarget(myArray, 7);
console.log(ans);

//function Expression
const singhappyBirthady = function (){
    console.log("happy Birthday");
}

singhappyBirthady();


