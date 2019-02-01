// console.log(this);

// function whatIsThis() {
//     return this;
// }


// function variableInThis() {
//     this.person = "Sam";
// }

// variableInThis();
// console.log(person);


function mistake() {
    this.badIdea = "oops!"
}

mistake();
console.log(badIdea);