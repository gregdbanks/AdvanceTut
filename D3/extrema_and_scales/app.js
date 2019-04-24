//  get the data prepared for your scale and input type=range

// these are for input type=range
let minYear = d3.min(birthData, d => d.year),
  maxYear = d3.max(birthData, d => d.year),



  // this is for yscale rects
maxBirths = d3.max(birthData, d => d.births);





// months for xAxis
let grabMonths = birthData.map(d => d.month);

// filter duplicates
function removeDuplicateUsingFilter(arr) {
  let unique_array = arr.filter(function (elem, index, self) {
    return index == self.indexOf(elem);
  });
  return unique_array
}

let months = removeDuplicateUsingFilter(grabMonths);





// set svg demensions
let width = 800,
  height = 400,
  barPadding = 10,
  numBars = 12,
  barWidth = width / numBars - barPadding 

// make scale matching 0 to max data, and height to 0
//    0-----------------------------2255345
//    \                                \
//  600--------------------------------0

let yScale =
  d3.scaleLinear()
  .domain([0, maxBirths])
  .range([height, 0])



// adding yAxis
let y_axis = d3.axisLeft()
  .scale(yScale);


let xScale =
  d3.scaleLinear()
  .domain(d3.extent(birthData, d => d.months));


let x_axis = d3.axisBottom()
  .scale(xScale)
  .ticks(12);


//  make an input type=range


d3.select("input")
  .property("min", minYear)
  .property("max", maxYear)
  .property("value", maxYear);


// create svg and append rect


d3.select("svg")
  .attr("width", width)
  .attr("height", height)
  .style('background', '#F8F9FA')
  .selectAll("rect")
  .data(birthData.filter(d => d.year === maxYear))
  .enter()
  .append("rect")
  .attr("fill", "#355DCE")
  .attr("width", barWidth)
  .attr("x", (d, i) => (barWidth + barPadding) * i)
  .attr("height", d => height - yScale(d.births))
  .attr("y", d => yScale(d.births)) //can remove if you want bars coming from top
  .style('float', 'right')


// appending yAxis
d3.select("svg")
  .append("g")
  .attr("transform", "translate(60, 10)")
  .call(y_axis);

// appending xAxis
d3.select("svg")
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(x_axis);

// setup event listener 