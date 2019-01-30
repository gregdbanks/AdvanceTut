// function outer() {
//     var start = "Closures are";
//     return function inner() {
//         return start + " " + "awesome"
//     }
// }

// var x =
// outer()();

// console.log(x);

// function outer(a){
//     return function inner(b){
//         // the inner function is making use of the variable "a"
//         // which was defined in an outer function called "outer"
//         // and by the time inner is called, that outer function has returned.
//         // this function called inner is a closure
//         return a + b;
//     }
// }
// var x =
// outer(5)(5);
// console.log(x);

// var storeOuter = outer(5);


// var xx = storeOuter(20);
// console.log(xx);

// 1st example: is there a closure?
// function outerFn(){
//     var data = "something from outer";
//     return function innerFn() {
//         return "Just returned from the inner function";
//     }
// }

// var x = outerFn()();
// console.log(x)

// answer: yes! var data(although not used)...i was wrong its NO! because the inner function doesnt make use of outer function variable

// second example:

// function outerFn() {
//     var data = "something from outer";
//     return function innerFn() {
//         var innerData = "something from inner";
//         return data + " " + innerData;
//     }
// }

// var x = outerFn()();
// console.log(x)

// How closure works:
// *run in chrome excluding editor
// function outerFn() {
//     var data = "something from outer";
//     var fact = "remember me!"
//     return function innerFn() {
//         debugger;
//         return fact + " " + data;
//     }
// }

// var outer = outerFn();
// outer();

// function counter() {
//     var count = 0;
//     return function inner(){
//         count++; 
//         return count;
//     }
// }

// var x = counter();
// console.log(x()); 
// console.log(x()); 
// console.log(x());

// function classRoom(){
//     var instructors = ["Okie", "Tex"];
//     return {
//         getInstructors: function() {
//             return instructors;
//         },
//         addInstructors: function(instructor) {
//             instructors.push(instructor);
//             return instructors;
//         }
//     }
// }
// var x = classRoom();
// console.log(x.getInstructors());
// console.log(x.addInstructors("Greg"));

// function classRoom() {
//     var instructors = ["Okie", "Tex"];
//     return {
//         getInstructors: function () {
//             return instructors.slice();
//         },
//         addInstructors: function (instructor) {
//             instructors.push(instructor);
//             return instructors.slice();
//         }
//     }
// }
// var x = classRoom();
// console.log(x.getInstructors());
// console.log(x.addInstructors("Greg"));
// console.log(x.getInstructors().pop());
// // returning instructors.slice() prevents changes to array! making it immutable
// console.log(x.getInstructors());

/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

// function specialMultiply(a, b) {
//     if(arguments.length === 1){
//         return function(b){
//             return a*b;
//         }
//     }
//     return a*b;
// }

// var x = specialMultiply(3)(5);
// console.log(x);

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount) {
    var answer = Math.floor(Math.random() * 11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed) {
            guesses++;
            if(guess === answer){
                completed = true;
                return "you got it";
            } 
            else if (guess > answer) return "your guess is too high"
            else if (guess > answer) return "your guess is too low"
            else if (guesses === answer){
                completed = true;
                return "no more guesses the answer was" + answer;
            }
        }
        return "All done playing!"
    }
}

var x = guessingGame(4);
console.log(x);