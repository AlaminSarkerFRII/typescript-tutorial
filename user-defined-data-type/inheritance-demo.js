// inheritance means one class has inherits/statices from another class . that means inheritance // jokhon ekti class er boisisto opor class a thake take inheritance bole
// user is parent class and student is child class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// create a child class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age, ", studentId: ").concat(this.studentId));
    };
    return Student;
}(User));
var student = new Student("Alamin Sarker", 23, 10102151);
student.display();
