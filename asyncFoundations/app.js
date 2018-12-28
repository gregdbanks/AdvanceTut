// function callback() {
//     console.log("coming from callback");
// }

// function higherOrder(fn) {
//     console.log("about to callback");
//     fn();
//     console.log("callback invoked")
// }

// higherOrder(callback);
// ----------------------------------------------
// function sendMessage(message, callback) {
//     return callback(message);
// }

// sendMessage("Message for console", console.log);

// sendMessage("Message for alert", alert);

// var answer = sendMessage("Are you sure??", confirm);
// -----------------------------------------------
function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

// function upperCaseName(name) {
//     return name.toUpperCase();
// }

// var gregGreeting = greet("Greg", upperCaseName);

// console.log(gregGreeting);

var a = greet("fido", function(name){
    return name.toUpperCase();
    
});

var b = greet("fido", function (name) {
    return name + "!!!!";
});

console.log(a);
console.log(b);