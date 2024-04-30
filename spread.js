//spread in arrays
const arr1 = ["1", "2"];
const arr2 = ["3", "4"];

const newArr = [...arr1, ...arr2];
console.log(newArr);

const arr = [..."123456765"];
console.log(arr);


//spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3",
    key4: "value4"
};

const newObject = {...obj1, ...obj2};
console.log(newObject);