var width = 500;
var height = 600;
var padding = 30;

// var yMax = d3.max(birthData2011, d => d.lifeExpectancy);!!!
// var yMin = d3.min(birthData2011, d => d.lifeExpectancy);

// yscal is tricky and because an increase on yscale goes 
// down our range starts at height(500px) and ends at 0 to reflect an increase
var yScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
                .range([height - padding, padding]);

var xScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.births / d.population))
                .range([padding, width - padding]);

var xAxis   = d3.axisBottom(xScale)
                 .tickSize(-height + 2 * padding)
                 .tickSizeOuter(0);

var yAxis = d3.axisLeft(yScale)
               .tickSize(-width + 2 * padding)
               .tickSizeOuter(0);

var colorScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d => d.population / d.area))
                    .range(['lightgreen', 'black']);

var radiusScale = d3.scaleLinear()
                     .domain(d3.extent(birthData2011, d => d.births))
                     .range([2,40]);

var tooltip = d3.select('body')
                .append('div')
                    .classed('tooltip', 'true');

d3.select("svg")
    .append("g")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);


d3.select("svg")
  .append("g")
  .attr("transform", `translate(0, ${height - padding})`)
  .call(xAxis);

d3.select("svg")
        .attr("width", width)
        .attr("height", height)
    .selectAll("circle")
    .data(birthData2011)
    .enter()
    .append("circle")
        .attr("cx", d => xScale(d.births / d.population))
        .attr("cy", d => yScale(d.lifeExpectancy))
        .attr("fill", d => colorScale(d.population / d.area))
        .attr("r", d => radiusScale(d.births))
        .on('mousemove', showToolTip)
        .on('touchstart', showToolTip)
        .on('mouseout', hideToolTip)
        .on('touchend', hideToolTip);
        

d3.select("svg")
    .append("text")
        .attr("x", width / 2)
        .attr("y", height - padding)
        .attr("dy", "1.8em")
        .style("text-anchor", "middle")
        .text("Births Per Capita");

d3.select("svg")
    .append("text")
    .attr("x", width / 2)
    .attr("y", padding)
    .attr("dy", "1.5em")
    .style("text-anchor", "middle")
    .text("Data on births by country in 2011");

d3.select("svg")
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", padding)
    .attr("dy", "-1.5em")
    .style("text-anchor", "middle")
    .text("Life Expectancy");

function showToolTip(d) {
    tooltip
        .style('opacity', 1)
        .style('left', d3.event.x - (tooltip.node().offsetWidth / 2) + 'px')
        .style('top', d3.event.y + 25 + 'px')
        .html(`
                                    <p>Region: ${d.region}</p>
                                    <p>Births: ${d.births.toLocaleString()}</p>
                                    <p>Population: ${d.population.toLocaleString()}</p>
                                    <p>Area: ${d.area.toLocaleString()}</p>
                                    <p>Life Expectancy: ${d.lifeExpectancy}</p>
                                `);
}

function hideToolTip() {
    tooltip
        .style('opacity', 0);
}
