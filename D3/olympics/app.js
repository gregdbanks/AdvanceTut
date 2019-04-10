


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


// get the data
d3.csv("test.csv", (error, data) => {
    if (error) throw error;

    // set counties
    // var countryData = [
    //     "USA",
    //     "RUS",
    //     "GER",
    //     "GBR",
    //     "FRA",
    //     "ITA",
    //     "CHN",
    //     "AUS",
    //     "SWE",
    //     "HUN"
    // ];



    // I USED THIS TO GET DATA FOR TEST.CSV
    // function countGold(con) {
    //     //  take object and count Gold Medals for each selected country
    //     var nwArr = data.filter(d => d.Country == con && d.Medal == "Gold");
    //     return nwArr;
    // }

    // var usaGold = countGold("HUN");
    // console.log(usaGold)
    // console.log(countryData)

    // USA = countGold("USA");
    // RUS = countGold("RUS")

    // //     countries, goldCount
    // //     USA,2235
    // //     RUS,239
    // //     GER,452
    // //     etc, ...





    // format the data from string to number
    data.forEach(d => d.GoldMedals = +d.GoldMedals);

    // Scale the range of the data in the domains
    x.domain(data.map(d => d.Countries));
    y.domain([0, d3.max(data, d => d.GoldMedals)]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", d => x(d.Counrty))
                    .attr("width", x.bandwidth())
                    .attr("y", d => y(d.GoldMedals))
                    .attr("height", d => height - y(d.GoldMedals));
    

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

});







