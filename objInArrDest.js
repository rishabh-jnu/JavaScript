//nested destructuring

const users = [
    {userId:1, firstName:'rishabh', gender: 'male'},
    {userId:2, firstName: 'satyam', gender: 'male'},
    {users:3, firstName: 'aaa', gender: 'female'}
];

const [{firstName}, ,{gender}] = users;
console.log(firstName);
console.log(gender);