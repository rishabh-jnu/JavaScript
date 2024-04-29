//object refrence type


const person = {name:"Rishabh",
 age:19,
 hobbies: ["coding","gym","yoga","listening music"]
};
console.log(person);

//how to access data from obj
console.log(person.name);
//or
console.log(person["age"]);

//how to add key value pair to obj
person.gender = "Male";
//or
//person["gender"] = "male";