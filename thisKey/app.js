
// 1 GLOBAL CONTEXT*****************************************
// console.log(this);

// function whatIsThis() {
//     return this;
// }


// function variableInThis() {
//     this.person = "Sam";
    
// }

// variableInThis();
// console.log(person);


// function mistake() {
//     this.badIdea = "oops!"
// }

// mistake();
// console.log(badIdea);

"use strict"//-------------------------------------------------

// console.log(this); //window

// function whatIsThis(){
//     return this;
// }

// var x =
// whatIsThis(); 

// console.log(x); //undefined

// function variablesInThis() {
//     //since we are in strict mode this is undefined
//     //so what happens if we add a property on undefined
//     //let's see what happens when we call the function
//     this.person = "Cory";
// }


// var x =
// variablesInThis();

// console.log(x); //TypeError

// 2 IMPLICIT/OBJECT *************************************************

// var person = {
//     firstName: "Cory",
//     sayHi: function(){
//         return "Hi " + this.firstName;
//     },
//     determineContext: function(){
//         return this === person;
//     }
// }

// var x = person.sayHi();
// // var x = person.determineContext();
// console.log(x);

// var person = {
//     firstName: "Cory",
//     determineContext: this
// }
// console.log(person.determineContext);

// var person = {
//     firstName: "Greg",
//     saHi: function(){
//         return "Hi " + this.firstName;
//     },
//     determineContext: function(){
//         return this === person;
//     },
//     dog: {
//         sayHello: function() {
//             return "Hello " + this.firstName;
//         },
//         determineContext: function(){
//             return this === person;
//         }
//     }
// }

// var x = person.dog.determineContext();
// console.log(x);

// 3 EXPLICIT BINDING **********************************************
// var person = {
//     firstName: "Greg",
//     saHi: function(){
//         return "Hi " + this.firstName;
//     },
//     determineContext: function(){
//         return this === person;
//     },
//     dog: {
//         sayHello: function() {
//             return "Hello " + this.firstName;
//         },
//         determineContext: function(){
//             return this === person;
//         }
//     }
// }
// --------------------------------vvvvvv set "this" to person using function/call method
// var x = person.dog.determineContext.call(person);
// console.log(x);

// USE CASES for call (avoiding code duplication)

// var cory = {
//     firstName: "Cory",
//     sayHi: function(){
//         return "Hi " + this.firstName;
//     }
// }

// var jared = {
//     firstName: "Jared",
//     //look at all this duplication
//     // sayHi: function () {
//     //     return "Hi " + this.firstName;
//     // }
// }

// console.log(cory.sayHi.call(jared));

// NOW ONE STEP FURTHER -------------------------------------

// function sayHi() {
//     return "Hi " + this.firstName;
// }
// var cory = {
//     firstName: "Cory"
// }

// var jared = {
//     firstName: "Jared"
// }
// // explicitly binds sayHi to cory and jared returning string
// console.log(sayHi.call(cory));
// console.log(sayHi.call(jared));

// Now that we have seen CALL lets take a look at APPLY------------

// var nums = [5,7,8,9,6];

// console.log(Math.max(nums));

// console.log(Math.max.apply(this, nums));

// function sumValues(a,b,c) {
//     return a+b+c;
// }

// var values = [3,9,9];

// console.log(sumValues.apply(this, values));

// ----------------BIND-------------------------------------

// function addNumbers(a,b,c,d){
//     return this.firstName + " Just Calculated " + (a+b+c+d);
// }

// var ronnie = {
//     firstName: "Ronnie"
// }

// var ronnieCalc = addNumbers.bind(ronnie,1,2);

// console.log(ronnieCalc);

// console.log(ronnieCalc(9,9));

// var zabel = {
//     firstName: "Zabel",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log("Hi " + this.firstName);
//         },5000)
//     }
// }

// var zabel = {
//     firstName: "Zabel",
//     sayHi: function () {
//         setTimeout(function () {
//             console.log("Hi " + this.firstName);
//         }.bind(this), 1000)
//     }
// }

// zabel.sayHi();

// ---------------BIND is used for async code, doesnt initially invoke function, gives back a function for later use









































