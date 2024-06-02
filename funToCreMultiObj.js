//function that create multi object
//2.) add key value pair
//3.) object ko return krega

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 = function(){
        return this.age >=18;
    }
    return user;
}

const user1 = createUser('Rishabh', 'Yadav','rishab85_soe@jnu.ac.in','20','jaunpur up');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);