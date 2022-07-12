// inheritance means one class has inherits/statices from another class . that means inheritance // jokhon ekti class er boisisto opor class a thake take inheritance bole
// user is parent class and student is child class

class User {
    // defined 
    userName : string;
    age : number;

    // create constructor
    constructor(userName : string, age : number){
        this.userName = userName;
        this.age = age;
    }
    // method for print user
    display() : void{
        console.log(`user name ${this.userName} age ${this.age}`);
    }
}

// create a child class
 
class Student extends User {
    studentId : number;

    constructor(userName : string, age : number, studentId : number){
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`userName: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`);
    }
}
let student = new Student("Alamin Sarker",23,10102151); 
student.display()



