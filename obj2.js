//diffrence b/t dot and bracket notation
//js do not allow spaces b/t words so at that places we use backet
//const key = "email";
const person = {
    name : "Rishabh",
    age : 19,
    "person hobbies" : ["coding","gym","yoga","listening music"]

}

//console.log(person["person hobbies"]);

//person[key] = "rishabhyadav70070@gmail.com";

console.log(person);

//for in loop
//object.keys

for(let key in person)
{
    //console.log(key);
    //console.log(person[key]);
    //console.log(`${key} : ${person[key]}`);
    console.log(key,":",person[key]);
}
