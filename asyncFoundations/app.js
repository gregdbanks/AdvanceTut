// var timerId = setTimeout(function() {
//     console.log("This function runs in 30 secs");
// }, 30000);

// setTimeout(function() {
//     console.log("Canceling the first setTimeout", timerId);
//     clearTimeout(timerId);
// }, 2000);

// var num = 5;

// var internalId = setInterval(function() {
//     num++;
//     console.log("num:", num);
//     if(num === 5) {
//         clearInterval(internalId);
//     }
// }, 1000);


// function countDown(seconds) {
//     var internalId = setInterval(function() {
//         seconds--;
//         if (seconds > 0) {
//             console.log("Timer: ", seconds);
//         } else {
//             console.log("Ring Ring Ring!!!");
//             clearInterval(internalId);
//         }
//     },1000);
// };

// countDown(5);

// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         var randomInt = Math.floor(Math.random() * 10);
//         resolve(randomInt)
//     }, 4000);
// });

// p1.then(function(data) {
//     console.log("Random integer passed to resolve: ", data);
//     console.log(p1);
// })

// console.log(p1);

// var promise = new Promise(function(resolve, reject) {
//     resolve(setInterval(data) {
//         console.log("Counter: " + data);
//     },1 )
// })

// promise.then(function(data) {
//     data
//     console.log("Counter: " + data);;
// }, 2000).then(function(data) {
//     return data + 20;
// }).then(function (data) {
//     return data / 3;
// }).then(function (data) {
//     console.log(data);
// });

var counter = 0;
function incCounter() {
    counter++;
    console.log("Counter : ", counter);
}

function runLater(callback, timeInMs) {
    var p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}

runLater(incCounter, 1000).then(function() {
    return runLater(incCounter, 2000);
}).then(function () {
    return runLater(incCounter, 3000);
}).then(function () {
    return runLater(incCounter, 4000);
})
    


