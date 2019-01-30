
// function findInObj(arr, key, searchValue) {
//     return arr.filter(function(val) {
//         return val[key] === searchValue;
//     })[0];
// }

// var x = findInObj([{ first: 'Elie', last: "Schoppik" },
//                 { first: 'Tim', last: "Garcia", isCatOwner: true },
//                 { first: 'Matt', last: "Lane" },
//                 { first: 'Colt', last: "Steele", isCatOwner: true }],
//                     'isCatOwner', true);

// console.log(x);

// function removeVowels(str) {
//     var vowels = 'aeiou';
//     return str.toLowerCase().split("").filter(function(val) {
//         return vowels.indexOf(val) === -1
//     }).join('');
// }

// var x = removeVowels("GregLikesLongWlaksOnBeach");

// console.log(x);


// var arr = [1,2,3];

// var x = 
// arr.some(function(value, index, array) {
//     return value < 2;
// });

// console.log(x);

//  DIY "some" function

// function some(arr, callback) {
//     for(var i = 0; i < arr.length; i++) {
//         if(callback[i], i, arr) {
//             return true;
//         }
//     }
//     return false;
// }

// real use case

// function hasEvenNumber(arr) {
//     return arr.some(function(value) {
//         return value % 2 === 0;
//     });
// }

// var x =
// hasEvenNumber([1,3,7,9,2]);

// console.log(x);

// function hasComma(str){
//     return str.split('').some(function(value) {
//         return value === ',';
//     });
// }

// var x =
// hasComma('This, is wonderful');

// console.log(x);

// every from scratch
// function every(arr, callback) {
//     for(var i = 0; i < arr.length; i++) {
//         if(callback(arr[i], i, arr) === false) {
//             return false;
//         }
//     }
//     return true;
// }

// real use case
// var arr = [-1,-2,-3];

// var x =
// arr.every(function(value, index, array) {
//     return value < 0;
// });

// console.log(x)


// function allLowerCase(str) {
//     return str.split('').every(function(value) {
//         return value === value.toLowerCase();
//     });
// }

// var x =
// allLowerCase('this is really nice');

// console.log(x);

// function allArrays(arr) {
//     return arr.every(Array.isArray);
// }

// var x =
// allArrays([[1], [2], {name: "papi"}]);

// console.log(x);

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

// function hasOddNumber(arr) {
//     return arr.some(function (value) {
//         return value % 2 !== 0;
//     });
// }

// var x =
//     hasOddNumber([3, 2, 2, 2, 2, 2, 4]);

// console.log(x);

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

// function hasAZero(num) {
//     return num.toString().split("").some(function(value) {
//         return value === '0';
//       });
// }

// var x =
//     hasAZero(12120121);
//     console.log(x);

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

// function hasNoDuplicates(arr) {;
//     return arr.toString().split("").some(function(value) {
//         return value.indexOf % 2 !== '0';
//       });
// }

// var x =
//     hasNoDuplicates([1,2, 3, 1]);
//     console.log(x);

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/



// function hasCertainKey(array, key) {
//     return array.every(function (val) {
//         return key in val;
//     });
// }

// var arr = [
//   { title: "Instructor", first: "Elie", last: "Schoppik" },
//   { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
//   { title: "Instructor", first: "Matt", last: "Lane" },
//   { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
// ];

// var x =
//     hasCertainKey(arr, 'first');

// console.log(x);

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
// var arr = [
//     { title: "Instructor", first: 'Elie', last: "Schoppik" },
//     { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
//     { title: "Instructor", first: 'Matt', last: "Lane" },
//     { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
// ];

// function hasCertainValue(arr, key, searchValue) {
//     return arr.every(function (val) {
//         return val[key] === searchValue;
//     });
// }

// var x =
//     hasCertainValue(arr, 'title', 'Instructor');
//     console.log(x);

function findX(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue;
    })[0];
};

var x = findX([{ first: 'Elie', last: "Schoppik" },
{ first: 'Tim', last: "Garcia", isCatOwner: true },
{ first: 'Matt', last: "Lane" },
{ first: 'Colt', last: "Steele", isCatOwner: true }],
    { 'isCatOwner': true });
console.log(x)