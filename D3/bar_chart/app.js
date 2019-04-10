// var margin  = {
//                 top: 20,
//                 right: 30,
//                 bottom: 30,
//                 left: 40
//               },
//               width   = 420 - margin.left - margin.right,
//               height  = 300 - margin.top - margin.bottom;

// var x       = d3.scaleBand()
//                   .range([0,width])
//                   .padding(0.1);

// var y       = d3.scaleLinear()
//                   .range([height, 0]);

// // var xAxis   = d3.axisBottom(x);

// // var yAxis   = d3.axisLeft(y);

// var chart = d3.select(".chart")
//                 .attr("width", width + margin.left + margin.right)
//                   .attr("height", height + margin.top + margin.bottom)
//                   .append("g")
//                   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//             d3.tsv("data.tsv", type, (error, data) => {
//               if(error) throw error;

//               x.domain(data.map(d => d.name));
//               y.domain([0, d3.max(data, d => d.value)]);

//               chart.append("g")
//                 .attr("class", "x axis")
//                 .attr("transform", "translate(0," + height + ")")
//                 .call(d3.axisBottom(x));

//               chart.append("g")
//                 .attr("class", "y axis")
//                 .call(d3.axisLeft(y));

//               chart.selectAll(".bar")
//                 .data(data)
//                 .enter().append("rect")
//                 .attr("class", "bar")
//                 .attr("x", function (d) {
//                   return x(d.name);
//                 })
//                 .attr("y", function (d) {
//                   return y(d.value);
//                 })
//                 .attr("height", function (d) {
//                   return height - y(d.value);
//                 })
                
//                 .attr("width", x.range(x));
                
//             });

// function type(d) {
//   d.value = +d.value; // coerce to number
//   return d;
// }

// set the dimensions and margins of the graph
var margin = {
               top: 40,
               right: 20,
               bottom: 30,
               left: 60
             },
               width = 960 - margin.left - margin.right,
               height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);

var y = d3.scaleLinear()
            .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform",
                              "translate(" + margin.left + "," + margin.top + ")");
                              //                  60               40

// get the data
d3.csv("sales.csv", (error, data) => {
  if (error) throw error;

  // format the data from string to number
  data.forEach(d => d.sales = +d.sales);

  // Scale the range of the data in the domains
  x.domain(data.map(d => d.salesperson));
  y.domain([0, d3.max(data, d => d.sales)]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
              .attr("class", "bar")
              .attr("x", d=> x(d.salesperson))
              .attr("width", x.bandwidth())
              .attr("y", d => y(d.sales))
              .attr("height", d => height - y(d.sales));

  // add the x Axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
    .call(d3.axisLeft(y));

});