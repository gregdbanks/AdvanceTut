


// var minYear = d3.min(birthData, d => d.year);
// var maxYear = d3.max(birthData, d => d.year);
// var width = 600;
// var height = 600;
// var barPadding = 10;
// var numBars = 12;
// // below is how to spread bars evenly within a set svg width! cool
// var barWidth = width / numBars - barPadding;
// var maxBirths = d3.max(birthData, d => d.births);
// var yScale = d3.scaleLinear()
//                 .domain([0, maxBirths])
//                 .range([height, 0]);


// d3.select('input')
//     .property('min', minYear)
//     .property('max', maxYear)
//     .property('value', minYear);

// d3.select('svg')
//     .attr("width", width)
//     .attr("height", height)
//   .selectAll("rect")
//   .data(birthData.filter(function(d){ 
//         return d.year === minYear;
//         }))
//   .enter()
//   .append('rect')
//     .attr('width', barWidth)
//     .attr('height', function(d) {
//             return height - yScale(d.births);
//         })
//     .attr('y', function(d) {
//             return height - d.births / 2.5e6 * height;
//         })
//     .attr('x', function(d,i) {
//             return (barWidth + barPadding) * i;
//         })
//     .attr('fill', "gray");

// d3.select('input')
//     .on('input', function(){
//         var year = +d3.event.target.value;
//         d3.selectAll('rect')
//             .data(birthData.filter(function(d) {
//                     return d.year === year;
//                 }))
//                 .attr('height', function(d) {
//                     return height - yScale(d.births);
//                 })
//                 .attr('y', function(d) {
//                     return yScale(d.births);
//                 });
//     })

// d3.selectAll("p").style("color", function () {
//     return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });

// d3.selectAll("p").style("color", function (d, i) {
//     return i % 2 ? "#fff" : "#eee";
// });

// d3.selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .style("font-size", function (d) { return d + "px"; })

// d3.select("body")
//     .selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .enter().append("p")
//     .text(function (d) { return "I’m number " + d + "!"; });

// Update...

// var p = d3.select("body")
//     .selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//     .text(function (d) { return d; });

// // Enter...
// p.enter().append("p")
//     .text(function (d) { return d; });

// // Exit...
// p.exit().remove();

// d3.select("body")
//   .transition()
//   .style("background-color", "black");

d3.selectAll("circle").transition()
    .duration(750)
    .delay(function (d, i) { return i * 10; })
    .attr("r", function (d) { return Math.sqrt(d * scale); });