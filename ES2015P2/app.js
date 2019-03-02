// class Student {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// var cory = new Student('Cory','Williams');
// console.log(cory);

// ES5
// function Student(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Student.prototype.sayHello = function(){
//     return "Hello " + this.firstName + " " + this.lastName;
// }

// ES2015
// class Student {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayHello(){
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
//     static isStudent(obj){
//         return obj.constructor === Student;
//     }
// }

// var cory = new Student('Cory', 'Williams');

// console.log(Student.isStudent(cory));

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

// class Person {
//     constructor(firstName, lastName, favoriteColor, favoriteNumber){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.favoriteColor = favoriteColor;
//         this.favoriteNumber = favoriteNumber;
//     }
//     multiplyFavoriteNumber(x){
//         return x * this.favoriteNumber;
//     }
// }
// var cory = new Person('Cory', 'Williams', "Green", 8);
// console.log(cory.multiplyFavoriteNumber(4));

class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    
}

var cory = new Student('Cory', 'Williams');
console.log(cory.sayHello());
