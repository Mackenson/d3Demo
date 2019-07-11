var dataset = [1, 2, 3, 4, 5, 6];

var svgWidth = 300,
    svgHeight= 300,
    barPadding = 5;

var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function (d) { return svgHeight - yScale(d); })
    .attr('height', function (d) { return yScale(d); })
    .attr('width', function () { return barWidth - barPadding; })
    .attr('transform', function (d, i) {
      var translate = [barWidth *  i, 0];
      return 'translate ('+ translate +')';
    });
