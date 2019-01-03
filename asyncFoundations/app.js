// var XHR = new XMLHttpRequest();

// XHR.onreadystatechange = function () {
//     if (XHR.readyState == 4) {
//         if (XHR.status == 200) {
//             console.log(XHR.responseText);
//         } else {
//             console.log("there was an issue yo!")
//         }
//     }
// }

// XHR.open('GET', 'https://api.github.com/zen');
// XHR.send();

var btn = document.querySelector('#btn');
var img = document.querySelector('#photo');
//listens for click
btn.addEventListener("click", function() {
    //make request
    var XHR = new XMLHttpRequest();


    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).message;
            img.src = url;
        }
    }

    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
});
    


