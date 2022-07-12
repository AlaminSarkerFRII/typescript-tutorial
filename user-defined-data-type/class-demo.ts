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

// class object

let user1 = new User("Alamin Sarker",23); 
let user2 = new User(" Kajol Sarker",33); 
user1.display();
user2.display();
