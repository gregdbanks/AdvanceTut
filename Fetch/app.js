var url = "https://randomuser.me/api/";

var btn = document.querySelector('#btn');
var fullnameDisp = document.querySelector('#fullname');
var avatar = document.querySelector('#avatar');
var username = document.querySelector('#username');
var city = document.querySelector('#city');
var email = document.querySelector('#email');

btn.addEventListener("click", function () {
    //make request
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayError);
});

function handleErrors(res) {
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;
};

function parseJSON (res) {
    return res.json().then(function(parsedData) {
        return parsedData.results[0];
    });
};

function updateProfile(data) {
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
};

function displayError(err){
    console.log(err);
}
