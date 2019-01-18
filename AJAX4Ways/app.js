


var j1 = document.querySelector("#jquery");
var axios1 = document.querySelector("#axios");
var old1 = document.querySelector("#xhr");
var fetch1 = document.querySelector("#fetch");

var quotes = document.querySelector("#quote");
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
// axios
axios1.addEventListener("click", function() {
    axios.get(url)
        .then(function (res) {
            quotes.innerText = res.data[0];
        })
        .catch(displayError);
})


function displayError(err) {
    console.log(err);
}

// XHR???
old1.addEventListener("click", function () {
    //make request
    var XHR = new XMLHttpRequest();
    var quotes = document.querySelector("#quote");
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var quote = JSON.parse(XHR.responseText)[0];
            quotes.innerText = quote;
         }
        
    }

    XHR.open('GET', url);
    XHR.send();
});

//jquery

$('#jquery').click(function(){

    $.ajax({
        method: 'GET',
        url: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
        dataType: 'json'
    })
    .done(addGGG)
    .fail(function() {
        alert("oh no!")
    })
});

function addGGG(data) {
    $('#quote').text(data);
}

// Fetch

fetch1.addEventListener("click", function() {

    fetch(url)
        .then(function(req) {
            req.json().then(function(data) {
                quotes.innerText = data[0];
            })
        })
        .catch(function() {
            alert("Error");
        });
});

