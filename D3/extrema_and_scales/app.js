let minYear   = d3.min(birthData, d => d.year),
    maxYear   = d3.max(birthData, d => d.year),
    maxBirths = d3.max(birthData, d => d.births)

let width      = 600,
    height     = 600,
    barPadding = 10,
    numBars    = 12,
    barWidth   = width / numBars - barPadding

let yScale = 
  d3.scaleLinear()
    .domain([0, maxBirths])
    .range([height, 0])

d3.select("input")
    .property("min"  , minYear)
    .property("max"  , maxYear)
    .property("value", maxYear);

d3.select("svg")
    .attr("width" , width)
    .attr("height", height)
  .selectAll("rect")
  .data( birthData.filter(d => d.year === maxYear ) )
  .enter()
  .append("rect")
    .attr("fill"  , "purple") 
    .attr("width" , barWidth) 
    .attr("x"     , (d, i) => (barWidth + barPadding) * i )
    .attr("height", d => height - yScale(d.births)) 
    .attr("y"     , d => yScale(d.births) )
    

d3.select("input")
    .on("input", () => {
      let year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter( d => d.year === year ))
          .attr("height", d => height - yScale(d.births) )
          .attr("y"     , d => yScale(d.births));
    })