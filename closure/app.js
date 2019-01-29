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
function outerFn() {
    var data = "something from outer";
    var fact = "remember me!"
    return function innerFn() {
        debugger;
        return fact + " " + data;
    }
}

var outer = outerFn();
outer();