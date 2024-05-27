// lexical scope 

const myVar = "value1";

function myApp(){

    function myFunc(){
        // const myVar2 = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myApp();

// block scope vs function scope 
//let and const are block scope
// var is function scope...ak bar likho fir kahi bhi access kro