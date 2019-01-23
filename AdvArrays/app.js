// var arr1 = [1,2,3];

// arr1.forEach(function (value, index, array1){
//     console.log(value + " " + index + " " + arr1);
// });

// function forEach(array, callback){
//     for(var i = 0; i < array.length; i++){
//         callback(array[i], i, array);
//     }
// }

// function halfValues(arr){
//     var newArr = [];
//     arr.forEach(function(val){
//         newArr.push(val*2);
//     })
//     return newArr;
// }
// console.log(halfValues([4, 12, 24]));
// function doubleValues(arr) {
//     var arr1 = [];
//     arr.forEach(function (val) {
//         arr1.push(val * 2);
//     })
//     return arr1;
// }

// console.log(doubleValues([4, 12, 24]));

// function onlyEvenValues(arr) {
//     var arr2 = [];
//     arr.forEach(function(val){
//         if(val % 2 === 0){
//             arr2.push(val);
//         }
//     })
//     return arr2;
// };

// console.log(onlyEvenValues([12, 13 , 14, 15, 16]));

// function showFirstAndLast(arr) {
//     var arr3 = [];
//     arr.forEach(function(val){
//         arr3.push(val.charAt(0) + val.charAt(val.length -1) );
//     })
//     return arr3;

// }

// console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

// function addKeyAndValue(arr, key, value) {

//         arr.forEach(function(val) {
            
//             val.key = value;
//         });
//         return arr;

// }

// console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor') )

function vowelCount(str) {
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter) {
        if(vowels.indexOf(letter.toLowerCase()) !== -1) {
            if(letter in obj) {
                obj[letter]++
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj
}

console.log(vowelCount("whatsupiioooimtheeeman"));