// var arr = [1,2,3,1,4,6];

// var x = 
// arr.filter(function(value, index, array) {
//     // no need for if statement
//     // just return an expression that evaluates to true or false
//     return value > 2;
// });

// console.log(x);

// var instructors = [
//     { name: "sam" },
//     { name: "billy" },
//     { name: "dan" },
//     { name: "victor" }
// ];

// var xx =
// instructors.filter(function(value, index, array) {
//     return value.name.length > 3;
// });

// console.log(xx);

// filter from scratch DIY

// function filter(array, callback) {
//     newArr = [];
//     for(var i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
    
// }

// function onlyFourLetterNames(arr) {
//     return arr.filter(function(value) {
//         return value.length === 4;
//     });
// }

// var xxx =
// onlyFourLetterNames(
//     [
//         "Rusty",
//         "Matt",
//         "Moxie",
//         "Colt"
//     ]
// );
// console.log(xxx);

// function divisibleByThree(arr) {
//     return arr.filter(function(value) {
//         return value % 3 === 0;
//     });
// }

// var xxxx = 
// divisibleByThree(
//     [1,2,3,4,5,6,7,8,9]
// );
// console.log(xxxx);

// function filterByValue(arr, key) {
//     return arr.filter(function (val) {
//         return val[key] !== undefined;
//     });
// }

// var x = filterByValue(
//     [
//         { first: 'Elie', last: "Schoppik" },
//         { first: 'Tim', last: "Garcia", isCatOwner: true },
//         { first: 'Matt', last: "Lane" },
//         { first: 'Colt', last: "Steele", isCatOwner: true }
//     ],
//         'isCatOwner');
// console.log(x);





// function find(arr, searchValue) {
//     return arr.filter(function(val){
//         return val === searchValue;
//     })[0];
// }

// var x = find([{ first: 'Elie', last: "Schoppik" },
//                 { first: 'Tim', last: "Garcia", isCatOwner: true },
//                 { first: 'Matt', last: "Lane" },
//                 { first: 'Colt', last: "Steele", isCatOwner: true }],
//                     'isCatOwner', true);
// console.log(x);

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
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

function removeVowels(str) {
    var vowels = 'aeiou';
    return str.toLowerCase().split("").filter(function(val) {
        return vowels.indexOf(val) === -1
    }).join('');
}

var x = removeVowels("GregLikesLongWlaksOnBeach");

console.log(x);