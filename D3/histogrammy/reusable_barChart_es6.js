const reUsableChart = _myData => {
    //                myData is csv~~
  let file; // reference to data (embedded or in file)

  ///////////////////////////////////////////////////
  // 1.0 add visualization specific variables here //
  ///////////////////////////////////////////////////

  // 1.1 All options that should be accessible to caller
  let       width = 500,
            height = 300,
            fillColor = 'coral',
            data = [];

  const barPadding = 1;

  // 1.2 all updatable functions to be called by getter-setter methods
  let   updateWidth,
        updateHeight,
        updateFillColor,
        updateData;

  ////////////////////////////////////////////////////
  // 2.0 add getter-setter methods here             //
  //////////////////////////////////////////////////// 

  // API - example for getter-setter method
  chartAPI.width = function(value) {
      if (!arguments.length) return width;
        width = value;
      if (typeof updateWidth === 'function') updateWidth();
        return chartAPI;
  };

  chartAPI.height = function(value) {
      if (!arguments.length) return height;
        height = value;
      if (typeof updateHeight === 'function') updateHeight();
        return chartAPI;
  };

  chartAPI.fillColor = function(value) {
      if (!arguments.length) return fillColor;
        fillColor = value;
      if (typeof updateFillColor === 'function') updateFillColor();
        return chartAPI;
  };

  chartAPI.data = function(value) {
      if (!arguments.length) return data;
        data = value;
      if (typeof updateData === 'function') updateData();
        return chartAPI;
  };

  ////////////////////////////////////////////////////
  // 3.0 add visualization specific processing here //
  //////////////////////////////////////////////////// 

  function createChart(selection, _file) {
    const data = _file;
    // console.log(data);
    selection.each(function () {
      // 2.1 insert code here
      let       barSpacing = height / data.length,
                barHeight = barSpacing - barPadding,
                maxValue = d3.max(data, d => d.high),
                widthScale = width / maxValue;

      const dom = d3.select(this);
      const svg = dom.append('svg')
        .attr('class', 'bar-chart')
        .attr('height', height)
        .attr('width', width)
        .style('fill', fillColor);

      const bars = svg.selectAll('rect.display-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'display-bar')
        .attr('y', (d, i) => i * barSpacing)
        .attr('height', barHeight)
        .attr('x', 0)
        .attr('width', d => d.high * widthScale);

      // 2.2 update functions
      updateWidth = () => {
        widthScale = width / maxValue;
        bars.transition().duration(1000).attr('width', d => d * widthScale);
        svg.transition().duration(1000).attr('width', width);
      };

      updateHeight = () => {
        console.log("--height");
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        bars.transition().duration(1000).attr('y', (d, i) => i * barSpacing)
          .attr('height', barHeight);
        svg.transition().duration(1000).attr('height', height);
      };

      updateFillColor = () => {
        svg.transition().duration(1000).style('fill', fillColor);
      };

      updateData = () => {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        maxValue = d3.max(data);
        widthScale = width / maxValue;

        const update = svg.selectAll('rect.display-bar')
          .data(data);

        update
          .transition()
            .duration(1000)
            .attr('y', (d, i) => i * barSpacing)
            .attr('height', barHeight)
            .attr('x', 0)
            .attr('width', d => d * widthScale);

        update.enter()
          .append('rect')
            .attr('class', 'display-bar')
            .attr('y', (d, i) => i * barSpacing)
            .attr('height', barHeight)
            .attr('x', 0)
            .attr('width', 0)
            .style('opacity', 0)
            .transition()
            .duration(1000)
            .delay((d, i) => (data.length - i) * 40)
            .attr('width', d => d * widthScale)
            .style('opacity', 1);

        update.exit()
                .transition()
                .duration(650)
                .delay((d, i) => (data.length - i) * 20)
                .style('opacity', 0)
                .attr('height', 0)
                .attr('x', 0)
                .attr('width', 0)
                .remove();
      }        
    });
  }

  ////////////////////////////////////////////////////
  // General API template begins here               //
  //////////////////////////////////////////////////// 

  // functions for external access
  function chartAPI(selection) {
    selection.each( d => {
      console.log(d);
      console.log(`_myData ${_myData}`);
      if (typeof d !== 'undefined') { // data processing from outside
        createChart(selection, d);
      }
      else { // data processing here
        if (typeof _myData !== 'undefined') { 
          readData(_myData, selection);
        } 
        else {
          readData("<pre>", selection);
        }
      }
    });
  }

  // XHR to load data   
  function readData(csvFile, selection) {
    if (csvFile !== "<pre>") {
      d3.csv(csvFile, convertToNumber, (error, f) => {
        createChart(selection, f);
      });
    } 
    else {
      file = d3.csv.parse(d3.select("pre#data").text()); 
      file.forEach( row => {
        convertToNumber(row);
      });
      console.log(file);
      createChart(selection, file);
    }
  }

  // helper for XHR
  function convertToNumber(d) {
    for (const perm in d) {
        if (Object.prototype.hasOwnProperty.call(d, perm)) {
          d[perm] = +d[perm];
        }
      }  
    return d;
  }

  return chartAPI;
};