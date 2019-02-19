// function House(bedrooms, bathrooms, numSqft) {
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.numSqft = numSqft;
// }
// var firstHouse = new House(2,2,1000);
// console.log(firstHouse.bedrooms);
// console.log(firstHouse.bathrooms);
// console.log(firstHouse.numSqft);

// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
//     this.bark = function(){
//         console.log(name + " just barked!");
//     }
// }

// var train = new Dog("Train", 5);
// var scooby = new Dog("Scooby", 9);
// console.log(train.__proto__);
// train.bark();
// scooby.bark();

// function Car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.numWheels = 4;
// }

// function Motorcycle(make, model, year){
//     Car.call(this, make, model, year);
//     this.numWheels = 2;
// }

// var ninja = new Motorcycle("Ninja", "XX", 2129);

// console.log(ninja.year);

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.

function Person(firstname, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function(num){
        return num * this.favoriteNumber;
    }
}


// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.



function Parent(firstName, lastName, favoriteColor, favoriteFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
    Parent.apply(this, arguments);

}

console.log(new Child("suzie", "q", "black", "pizza").__proto__);