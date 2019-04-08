// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height"),
//     g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")");

// function update(data) {

//     // DATA JOIN
//     // Join new data with old elements, if any.
//     var text = g.selectAll("text")
//         .data(data);

//     // UPDATE
//     // Update old elements as needed.
//     text
//         .attr("class", "update");

//     // ENTER
//     // Create new elements as needed.
//     //
//     // ENTER + UPDATE
//     // After merging the entered elements with the update selection,
//     // apply operations to both.
//     text
//         .enter().append("text")
//         .attr("class", "enter")
//         .attr("x", function (d, i) { return i * 32; })
//         .attr("dy", ".35em")
//         .merge(text)
//         .text(function (d) { return d; });

//     // EXIT
//     // Remove old elements as needed.
//     text
//         .exit().remove();
// }

// // The initial display.
// update(alphabet);

// // Grab a random sample of letters from the alphabet, in alphabetical order.
// d3.interval(function () {
//     update(d3.shuffle(alphabet)
//         .slice(0, Math.floor(Math.random() * 26))
//         .sort());
// }, 1500);

// d3.select("body")
//     .selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .enter().append("p")
//     .text(function (d) { return "I’m number " + d + "!"; });

// var p = d3.select("body")
//     .selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .text(function (d) { return d; });

// p
//  .enter().append("p")
//     .text(function (d) { return "i Am ThE NuMbER  ------# " + d; });

// p
//  .exit().remove();

// d3.select("body").transition()
//     .duration(6000)
//     .delay(function (d, i) { return i * 10; })
//     .style("background-color", "black");
const margin = 60;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;
const sample = [
    {
        language: 'Rust',
        value: 78.9,
        color: '#000000'
    },
    {
        language: 'Kotlin',
        value: 75.1,
        color: '#00a2ee'
    },
    {
        language: 'Python',
        value: 68.0,
        color: '#fbcb39'
    },
    {
        language: 'TypeScript',
        value: 67.0,
        color: '#007bc8'
    },
    {
        language: 'Go',
        value: 65.6,
        color: '#65cedb'
    },
    {
        language: 'Swift',
        value: 65.1,
        color: '#ff6e52'
    },
    {
        language: 'JavaScript',
        value: 61.9,
        color: '#f9de3f'
    },
    {
        language: 'C#',
        value: 60.4,
        color: '#5d2f8e'
    },
    {
        language: 'F#',
        value: 59.6,
        color: '#008fc9'
    },
    {
        language: 'Clojure',
        value: 59.6,
        color: '#507dca'
    }
];

const svg = d3.select('svg');

const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

// ----------------------------------------------------------
//                      yScale 1-100
// ----------------------------------------------------------

const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

chart.append('g')
    .call(d3.axisLeft(yScale));

// ----------------------------------------------------------
//                      xScale 1-100
// ----------------------------------------------------------

const xScale = d3.scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.language))
    .padding(0.2)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

// ----------------------------------------------------------
//                      now the bars...
// ----------------------------------------------------------



