var dataset = [50, 130, 90, 200, 75, 175, 160, 180];

var svgWidth = 300,
    svgHeight= 300,
    barPadding = 5;

var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
      .attr('widh', svgWidth)
      .attr('height', svgHeight)
      .style('margin', '70');

var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function (d) { return svgHeight - d; })
    .attr('height', function functionName(d) { return d; })
    .attr('width', barWidth - barPadding)
    .attr('transform', function (d, i) {
      var translate = [barWidth * i, 0];
      return 'translate('+ translate +')';
    });

var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function (d) { return d; })
    .attr('y', function (d, i) { return svgHeight - d - 2; })
    .attr('x', function (d, i) { return barWidth * i; })
    .attr('fill', '#A64C38')
