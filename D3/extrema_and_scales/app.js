

//  get the data prepared for your scale and input type=range

// these are for input type=range
let minYear   = d3.min(birthData, d => d.year),
    maxYear   = d3.max(birthData, d => d.year),

// this is for yscale rects
    maxBirths = d3.max(birthData, d => d.births);



// set svg demensions

let width      = 600,
    height     = 600,
    barPadding = 10,
    numBars    = 12,
    barWidth   = width / numBars - barPadding

// make scale matching 0 to max data, and height to 0
//    0-----------------------------2255345
//    \                                \
//  600--------------------------------0

let yScale = 
  d3.scaleLinear()
    .domain([0, maxBirths])
    .range([height, 0])


//  make an input type=range


  d3.select("input")
    .property("min"  , minYear)
    .property("max"  , maxYear)
    .property("value", maxYear);


// create svg and append rect


d3.select("svg")
    .attr("width" , width)
    .attr("height", height)
    .style('background', '#F8F9FA')
  .selectAll("rect")
  .data( birthData.filter(d => d.year === maxYear ) )
  .enter()
  .append("rect")
    .attr("fill"  , "#355DCE") 
    .attr("width" , barWidth) 
    .attr("x"     , (d, i) => (barWidth + barPadding) * i )
    .attr("height", d => height - yScale(d.births)) 
    .attr("y"     , d => yScale(d.births) ) //can remove if you want bars coming from top
    .style({"border-radius":"0, 0, 10px, 10px"});
    
// setup event listener 


d3.select("input")
    .on("input", () => {
      let year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter( d => d.year === year ))
          .attr("height", d => height - yScale(d.births) )
          .attr("y"     , d => yScale(d.births));
    });