// falsy

//false
//""
//null
//undefined
//0

//truthy
//"abc"
//1 , -1

let firstName;
if(firstName)
{
    console.log(firstName);
}
else{
    console.log("firstname is kinda empty");
}

// ternary operator
let age =3;
let drink = age>=5 ? "coffee" : "milk";
console.log(drink);