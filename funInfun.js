// function inside function

const app = () => {
    const myFunc = () =>{
        console.log("hello from myfunc")
    }

    const AddTwo = (num1, num2) =>{
        return num1+num2;
    }

    console.log("inside app");
    myFunc();
    console.log(AddTwo(4,3));
}
app();