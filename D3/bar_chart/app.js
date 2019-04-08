var margin  = {
                top: 20,
                right: 30,
                bottom: 30,
                left: 40
              };
              
var width   = 420 - margin.left - margin.right;
var height  = 300 - margin.top - margin.bottom;

var x       = d3.scaleBand()
                  .rangeRound([0, width])
                  .padding(0.1);

var y       = d3.scaleLinear()
                  .range([height, 0]);

var xAxis   = d3.axisBottom(x);

var yAxis   = d3.axisBottom(y);

var chart = d3.select(".chart")
                .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.tsv("data.tsv", type, (error, data) => {

              x.domain(data.map(d => d.name));
              y.domain([0, d3.max(data, d => d.value)]);

              chart.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

              chart.append("g")
                .attr("class", "y axis")
                .call(yAxis);

              chart.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                  return x(d.name);
                })
                .attr("y", function (d) {
                  return y(d.value);
                })
                .attr("height", function (d) {
                  return height - y(d.value);
                })
                .attr("width", x.rangeRound());
            });

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}