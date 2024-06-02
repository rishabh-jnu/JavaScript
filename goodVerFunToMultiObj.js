//function that create multi object
//2.) add key value pair
//3.) object ko return krega

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >=18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    //as refrence
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('Rishabh', 'Yadav','rishab85_soe@jnu.ac.in','20','jaunpur up');
const user2 = createUser('Antim', 'Yadav','rishab85_soe@jnu.ac.in','20','jaunpur up');
const user3 = createUser('Mama', 'Yadav','rishab85_soe@jnu.ac.in','20','jaunpur up');

// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about1 = user1.about();
// const about2 = user2.about();
// const about3 = user3.about();

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
