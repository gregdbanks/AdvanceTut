// $('#btn').click(function(){
    
//     $.ajax({
//         method: 'GET',
//         url: "https://baconipsum.com/api/?type=meat-and-filler",
//         dataType: 'json'
//     })
//     .done(addGGG)
//     .fail(function() {
//         alert("oh no!")
//     })
// });

// function addGGG(data) {
//     $('#ggg').text(data);
// }

// $('#getBtn').click(function () {
//     $.get('https://baconipsum.com/api/?type=meat-and-filler')
//     .done(function(data) {
//         console.log(data);
//     })
//     .fail(function() {
//         console.log("error")
//     })
    
// });

// $('#postBtn').click(function () {
//     var data = {name: 'Greg', city: "okc"};
//     $.post("www.iamtheman.com", data)
//     .done(function(data) {
//         console.log("Hi!!");
//     })
//     .fail(function () {
//          console.log("error")
//     })


// });

$('#getJSONBtn').click(function () {
    $.getJSON('http://aws.random.cat/meow')
        .done(function (data) {
            $('#cat').attr('src', data.file);
        })
        .fail(function () {
            console.log("problem")
        })

});