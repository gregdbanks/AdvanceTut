
d3.select(".remove")
    .on('click', function() {
      d3.selectAll('.note')
        .remove()
    });

d3.select(".lucky")
    .on('click', function() {
      d3.selectAll('.note')
        .style('font-size', function() {
          return Math.random() * 100 + 'px';
        });
    });

var input = d3.select('input');
var preview = d3.select('.preview');

d3.select("#new-note")
    .on("submit", function(){
    
        d3.event.preventDefault();

        var input = d3.select('input');

        d3.select('#notes')
          .append('p')
            .classed('note', true)
            .text(input.property('value'));
        input.property("value", "")
        setPreview("");
    });

input.on('input', function() {
  var note = d3.event.target.value;
  setPreview(note);
});

function setPreview(val) {
  preview.text(val)
          .classed('hide', val === "");
}


// map:

// var animals = [
//   { name: 'Tupac', species: 'Tiger'},
//   { name: 'Eminem', species: 'Lion'},
//   { name: 'Biggy', species: 'Bull'},
//   { name: 'P-Diddy', species: 'field mouse'},
//   { name: 'Lil-Wayne', species: 'tree frog'},
//   { name: 'MGK', species: 'puppy'},
// ];

// var names = animals.map( x => `${x.name} is a ${x.species}` );

// console.log(names);

// // reduce:

// var orders = [
//   { amount: 250},
//   { amount: 400},
//   { amount: 100},
//   { amount: 325}
// ];

// var total = orders.reduce((sum, order) => sum + order.amount,0);

// console.log(total);

// Advance reduce()

// import fs from 'fs'

// var output = fs.readFileSync('data.txt', 'utf8');

// console.log('output', output);