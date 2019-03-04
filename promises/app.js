// function displayAtRandomTime(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(Math.random() > .5){
//                 resolve('Yes!');
//             } else {
//                 reject('No!')
//             }
//         },1000);
//     })
// }

// console.log(displayAtRandomTime());

// var years = [];
// $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')

// .then(function(movie){
//     years.push(movie.Year);
//     return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');
// })

// .then(function(movie){
//     years.push(movie.Year);
//     console.log(years);
// })

// console.log("ALL DONE");

// function getMovie(title){
//     return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
// }

// var titanicPromise = getMovie('titanic');
// var shrekPromise = getMovie('shrek');
// var braveheartPromise = getMovie('braveheart');

// Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(movies){
//     return movies.forEach(function(value){
//         console.log(value.Year)
//     });
// });

// console.log(titanicPromise);
// console.log(shrekPromise); 
// console.log(braveheartPromise);


function getMostFollowers(...usernames){
    let baseUrl = "https://api.github.com/users/"
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function(data){
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`;
    })
}

function starWarsString(id){
    var str = '';
    return $.getJSON(`https://swapi.co/api/people/${id}/`).then(function(data){
        str += `${data.name} is featured in `;
        let filmData = data.films[0];
        return $.getJSON(filmData);
    }).then(function(res){
        str += `${res.title}, directed by ${res.director} `;
        let planetData = res.planets[0];
        return $.getJSON(planetData);
    }).then(function(res){
        str += `and it takes place on ${res.name}`;
        return str;
    }).then(function(finalString){
        return finalString;
    });
}

starWarsString(1).then(function(data){
    console.log(data);
})

