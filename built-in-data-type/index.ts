// build in data type
// union type : which is take two or more values AS  data type

// let location : number | string
let userId : number
let firstName : string
let lastName : string
let fullName : string
let isActive : boolean


userId = 101;
firstName = 'John';
lastName = 'Smith';
fullName = 'John Smith';
isActive = true;



console.log(`User Id : ${userId} Full Name : ${fullName}`);
console.log(fullName.split(' '));
console.log(fullName.length);
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toUpperCase())