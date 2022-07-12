var User = /** @class */ (function () {
    // create constructor
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // method for print user
    User.prototype.display = function () {
        console.log("user name ".concat(this.userName, " age ").concat(this.age));
    };
    return User;
}());
// class object
var user1 = new User("Alamin Sarker", 23);
var user2 = new User(" Kajol Sarker", 33);
user1.display();
user2.display();
