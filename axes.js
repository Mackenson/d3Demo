var weeks = ['week', 'week2', 'week3', 'week4', 'week5'];
var amount = [0, 200, 400, 600, 800, 1000];

var svgWidth = 300,
    svgHeight= 300,
    barPadding = 5;

// var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(amount)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(amount)])
    .range([svgHeight, 0]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

svg.append('g')
   .attr('transform', 'translate(50, 10)')
   .call(y_axis);

var xAxistranlate = svgHeight - 20;

svg.append('g')
   .attr('transform', 'translate(50 '+ xAxistranlate +')')
   .call(x_axis);
