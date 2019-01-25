// var arr = [1,2,3];

// var x = arr.map(function(value, index, array) {
//     return value * 6;
// });

// console.log(x);


// map method DIY

// function map1(arr, callback) {
//     newArr = [];
//     for(var i = 0; i < arr; i++) {
//         newArr.push(callback(arr[i], i, arr));
        
//     }
//     return newArr;
// }


// using map in a function!-------------

// function tripleValues(arr) {
//     return arr.map(function(value) {
//         return value * 3;
//     });
// }

// console.log(tripleValues([3,2,1]));

// function onlyFirstName(arr) {
//     return arr.map(function (value) {
//         return value.first;
//     });
// }

// console.log(onlyFirstName([{first: "Greg", last: "smith"}, {first: "Sam", last: "adams"}]));

function valTimesIndex(arr) {
    return arr.map(function(val, index) {
        return val * index;
    });
}

console.log(valTimesIndex([4,5,6]));

function extractKey(arr, key) {
    return arr.map(function (val) {
        return val.name;
    });
}

console.log(extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], name));

function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + " " + val.last;
    });
}

console.log(extractFullName([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia" }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele" }]))