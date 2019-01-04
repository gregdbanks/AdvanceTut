// var btn = document.querySelector('#btn');
// var priceD = document.querySelector('#price');
// //listens for click
// btn.addEventListener("click", function () {
//     //make request
//     var XHR = new XMLHttpRequest();

//     XHR.onreadystatechange = function () {
//         if (XHR.readyState == 4 && XHR.status == 200) {
//             var price = JSON.parse(XHR.responseText).bpi.USD.rate;
//             priceD.innerText = price + " USD";
//         }
//     }

//     XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
//     XHR.send();
// });

var url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data.message);
    })