var url = 'https://opentdb.com/api.php?amount=1';
axios.get(url)
    .then(function (res) {
        console.log(res.data.results[0].question);
    })
    .catch(handleErrors);

function handleErrors(err) {
    if (err.response) {
        console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
        console.log("Problem With Request!");
    } else {
        console.log('Error', err.message);
    }
}