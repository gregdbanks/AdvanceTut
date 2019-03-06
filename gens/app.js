// function* pauseAndReturnValues(num){
//     for(let i = 0; i < num; i++){
//         yield i;
//     }
// }
// var gen = pauseAndReturnValues(2);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* printValues(){
//     yield 'First';
//     yield 'Second';
//     yield 'Third';
// }

// var g = printValues();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

// function* pauseAndReturnValues(num){
//     for(let i = 0; i < num; i++){
//         yield i;
//     }
// }

// for(val of pauseAndReturnValues(9)){
//     console.log(val);
// }

// function* getMovieData(movieName){
//     console.log('starting')
//     yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
//     console.log('ending');
// }
// var lionGetter = getMovieData('lion king');
// lionGetter.next().value.then(val => console.log(val));

// Object.assign

// var o = {instructors: ['Jared', 'Cory']};
// var o2 = Object.assign({},o);
// o2.instructors.push('Greg');
// console.log(o.instructors);

// Array.from

// var divs = document.getElementsByTagName("div");

// var converted = [].slice.call(divs);

// console.log(converted.reduce)

// var divs = document.getElementsByTagName("div");
// var converted = Array.from(divs);

// var firstSet = new Set([1,2,3,4,3,2,1]);

// var arrayFromSet = Array.from(firstSet);

// console.log(arrayFromSet)

// find

// var instructors = [{ name: 'Cory' }, { name: 'Jared' }, { name: 'Greg' }, { name: 'Cory2' }];


// console.log(instructors.find(function (val) {
//     return val.name === 'Greg';
// }));

// console.log(instructors.findIndex(function(val){
//     return val.name === 'Cory2';
// }))

// includes
// console.log('awesome'.includes('some'))

// Number.isFinite
// ES5
// function seeIfNumber(val){
//     if(typeof val === "number" && !isNaN(val)){
//         return "is a number yo";
//     }
// }
// ES2015
// function seeIfNumber(val){
//     if(Number.isFinite(val)){
//         return "is a number yo";
//     }
// }


// console.log(seeIfNumber(3));


/* 
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/
function copyObject(obj){
    return Object.assign({}, obj);
}

 // 'Tim'
 // 'Elie'
/* 

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

checkIfFinite(4) // true
checkIfFinite(-3) // true
checkIfFinite(4. // .toEqual(true
checkIfFinite(NaN) // false
checkIfFinite(Infinity) // false
*/

function checkIfFinite(x) {
    return Number.isFinite(x);
}

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/


function areAllNumbersFinite(x) {
    return x.every(Number.isFinite);
}


 // true



/* 

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj) {
     return Array.from(obj);
}

/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

function displayEvenArguments() {
    return Array.from(arguments).filter(val => val % 2 === 0);

}
















































