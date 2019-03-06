// padStart a ES2017 string method
// console.log('awesome'.padStart(20,'!'));

// padEnd
// console.log('awesome'.padEnd(20, '!'));

// ASYNC FUNCTIONs
// async function first(){
//     return 'we did it yall!';
// }

// console.log(first());
// console.log(first().then(val => console.log(val)));

// AWAIT KeYwOrD
// async function getMovieData(){
//     console.log('starting');
//     var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
//     console.log('alldone');
//     console.log(movieData);
// }
// console.log(getMovieData())

// Object async

// var movieCollector = {
//     data: 'titanic',
//     async getMovie(){
//         var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
//         console.log(response);
//     }
// }

// movieCollector.getMovie();

// Class async

// class MovieData {
//     constructor(name){
//         this.name = name;
//     }
//     async getMovie(){
//         var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
//         console.log(response);
//     }
// }

// var m = new MovieData('shrek');
// m.getMovie();

// Handling Errors
// async function getUser(user){
//     try {
//         var response = await $.getJSON(`https://api.github.com/users/${user}`);
//         console.log(response.name);
//     } catch(e){
//         console.log('user does not exist on this planet');
//     }
// }
// getUser('Gregdbanks');

// Sequential not parallel
// async function getMovieData(){
//     var response1 = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
//     var response2 = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
//     console.log(response1);
//     console.log(response2);
// }

// getMovieData();

// MUCH FASTER!
// async function getMovieData(){
//     var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
//     var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

//     var titanicData = await titanicPromise;
//     var shrekData = await shrekPromise;

//     console.log(titanicData);
//     console.log(shrekData);
// }
// getMovieData();

// async function getMovieData(first,second,third){
//     var movieList = await Promise.all([
//         $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
//         $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`),
//         $.getJSON(`https://omdbapi.com?t=${third}&apikey=thewdb`)
//     ])

//     console.log(movieList[0].Year);
//     console.log(movieList[1].Year);
//     console.log(movieList[2].Year);
// }

// getMovieData('jaws', 'shrek', 'titanic');


async function getMostFollowers(...usernames) {
    let baseUrl = 'https://api.github.com/users/';
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    let results = await Promise.all(urls)
    let max = results.sort((a,b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`
    }

var x = getMostFollowers('greg', 'cory', 'jared');
console.log(x);

// async function starWarsString(num) {
//     var movieData = await $.getJSON(`https://swapi.co/api/people/${num}`);
//     console.log(`${movieData.name} is featured in ${movieData.films}, directed by `);
//     console.log(movieData.films[2])
    
   
    
// }

// starWarsString(1).then(function (data) {
//     console.log(data)
// })


















































