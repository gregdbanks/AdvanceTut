// var instructor = {
//     firstName: "Jrod",
//     lastName: "Nubby"
// }

// var firstName = instructor.firstName;
// var lastName = instructor.lastName;

// console.log(firstName+ " " +lastName);
// ES2015
// var instructor = {
//     firstName: "Jrod",
//     lastName: "Nubby"
// }

// var {firstName: first, lastName: last} = instructor;

// console.log(first + " " + last);

// function createInstructor(options){
//     var options = options || {};
//     var name = options.name || {first: "Cory", last: "Swagger"};
//     var isHilarious = options.isHilarious || false;
//     return [name.first, name.last, isHilarious];
// }
// console.log(createInstructor({isHilarious:true}))

// NOW using destructuring-------------------------

// function createInstructor({name = {first: "Greg", last: "Barks"}, isHilarious= false} = {}){
//     return [name.first, name.last, isHilarious];
// }

// console.log(createInstructor({isHilarious:true}))

// function displayInfo(obj){
//     return [obj.name, obj.favColor];
// }
// var instructor = {
//     name: "Cory",
//     favColor: "Pink"
// };
// console.log(displayInfo(instructor));

// ARRAY DESTRUCTURING -------------------------

// var arr = [1,2,3];

// // ES5
// // var a = arr[0];
// // var b = arr[1];
// // var c = arr[2];

// // ES6
// var [a,b,c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function returnNumbers(a,b){
//     return [a,b];
// }

// // var first = returnNumbers(5,10)[0];
// // var second = returnNumbers(5,10)[1];

// var [first, second] = returnNumbers(5,10);

// console.log(first);
// console.log(second);

// Swapping values

// ES5
// function swap(a,b){
//     var temp = a;
//     a = b;
//     b = temp;
//     return [a,b];
// }

// ES2015
// function swap(a,b){
//     return [a,b] = [b,a];
// }

// console.log(swap(10,5))


/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

// function displayStudentInfo(obj) {
//     var [first, last] = obj;
//     return `Your full name is ${first} ${last} `;
// }


/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!

// function printFullName({first, last}) {
//     return `Your full name is ${first} ${last} `;
// }

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/
// function createInstructor({name = {first: "Greg", last: "Barks"}, isHilarious= false} = {}){
//     return [name.first, name.last, isHilarious];
// }
// you will have to pass in the correct parameters for this function!
// function createStudent({likesES2015 = true, likesJavascript = true} = {}) {
//     var start = 'The student';
//     if(likesES2015 && likesJavascript){
//         return start += ' likes JavaScript and ES2015'
//     } else if (likesJavascript){
//         return start += ' likes Javascript!'
//     } else if (likesES2015){
//         return start += ' likes ES2015'
//     } else {
//         return start += ' does not like much...'
//     }
//     return start;
// }


/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr) {
    for(var i = 0; i < arr.length/2; i++){
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length -1 -i], arr[i]];
    }
}


console.log(reverseArray([1,2,3,4]))










































