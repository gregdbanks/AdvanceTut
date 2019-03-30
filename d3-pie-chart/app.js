var minYear = d3.min(birthData, d => d.year);
var width = 600;
var height = 600;
var yearData = birthData.filter(d => d.year === minYear);
var continents = [];
for (var i = 0; i < birthData.length; i++) {
    var continents = birthData[i].continent;
}
