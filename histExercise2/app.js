// we'll write this code together
var width = 1000,
    height = 600,
    padding = 70;
    
var barPadding = 1;


var yearData = oilData.filter(d => d.year !== null);
var inflationData = oilData.filter(d => d.inflation !== null);

var initialBinCount = 16;
    
    
var bars = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

d3.select('input')
    .property('value', initialBinCount)
    .on('input', function () {
        updateRects(+d3.event.target.value);
    });

bars.append("g")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .classed("x-axis", true);

bars.append("g")
    .attr("transform", "translate(" + padding + ", 0)")
    .classed("y-axis", true);

bars
    .append("text")
    .attr("x", width / 2)
    .attr("y", height - 10)
    .style("text-anchor", "middle")
    .text("Year");

bars
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", 15)
    .style("text-anchor", "middle")
    .text("Price");

updateRects(initialBinCount);

    function updateRects(val) {
        var xScale = d3.scaleLinear()
            .domain(d3.extent(yearData, d => d.year))
            .rangeRound([padding, width - padding]);

        var histogram = d3.histogram()
            .domain(xScale.domain())
            .thresholds(xScale.ticks(val))
            .value(d => d.year);
        
       
            

        var bins = histogram(yearData);
        var bins2 = d3.max(inflationData, d => d.inflation);
      
        

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(inflationData, d => d.inflation)])
            .range([height - padding, padding]);

        d3.select(".y-axis")
            .call(d3.axisLeft(yScale));

        d3.select(".x-axis")
            .call(d3.axisBottom(xScale)
                .ticks(val))
            .selectAll("text")
            .attr("y", -3)
            .attr("x", 10)
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");

        var rect = bars
            .selectAll("rect")
            .data(bins);

        rect
            .exit()
            .remove();

        rect
            .enter()
            .append("rect")
            .merge(rect)
            .attr("x", d => xScale(d.x0))
            // recap on this: dont want length, need average price adjusted for inflation
            .attr("y", d => yScale(d.length))
            .attr("height", d => height - padding - yScale(d.length))
            .attr("width", d => xScale(d.x1) - xScale(d.x0) - barPadding)
            .attr("fill", "gray");

        d3.select(".bin-count")
            .text("Number of bins: " + bins.length);

            console.log(bins)
        
        
        

            
        
      
  
}
    



// d3.histogram() returns a function / the returned function creates bins for data passed into it