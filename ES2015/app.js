// for(let index = 0; index < 5; index++) {
//     setTimeout(function(){
//         console.log(index);
//     },2000);
    
// }

// var firstName = "Greg";
// var lastName = "Smith";
// console.log(`Hello ${firstName} ${lastName}
// multi line
// isnt that great?`);

// ARROW FUNCTIONS

// var add = (a, b) => a+b;

// console.log(add(2,3))

// // ES5

// console.log(
//     [1, 2, 3].map(function (value) {
//         return value * 2;
//     })
// );
// ES2015
// console.log(
//     [1,2,3].map(value => value * 2)
// );

// ES5
// function doubleAndFilter(arr){
//     return arr.map(function(value){
//         return value*2;
//     }).filter(function(value){
//         return value % 3 === 0;
//     })
// }

// console.log(doubleAndFilter([5,10,15,20]));

// ES2015
// var doubleAndFilter = arr => arr.map(val => val*2).filter(num => num % 3 === 0);

// console.log(doubleAndFilter([5,10,15,20]));

// var instructor = {
//     firstName: "Cory",
//     sayHi: function(){
//         setTimeout(() => {
//             console.log("Hello " + this.firstName)
//         }, 1000);
//     }
// }

// instructor.sayHi();

/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/
var tripleAndFilter = arr => arr.map(val => val * 3).filter(num => num % 5 === 0);




/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

var doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(num => num * 2);



/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

var mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5)
    .reduce((acc, next) => {
        acc[next] = next.length 
        return acc;
    },{});

    


/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

var createStudentObj = (firstName, lastName) => ({firstName: firstName, lastName: lastName});

/* 5 - Given the following code:


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'

    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/
var instructor = {
    firstName: "Colt",
    sayHi: function () {
        setTimeout(() => {
            console.log("Hello " + this.firstName)
        }, 1000);
    }
}
instructor.sayHi()

