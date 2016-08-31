function odd(number) {
  if (number > 1000)
    console.log(number)
  return (number % 2 == 0) ? number + 1: number;
}

function renderChart(id, data, base, xLabel, yLabel, series) {

  var voters = dimple.getUniqueValues(data, series);
  var filteredData = dimple.filterData(data, series, base);

  var title = d3.select(id)
    .html('')
    .append('div')
    .attr('style', 'text-align: center; margin-bottom: 0;');

  title
    .append('span')
    .attr('style', 'margin-right: 0.5em;')
    .text(base + ' Voters')
    .append('div')

  var canvas = dimple.newSvg(id, 700, 400);
  var chart = new dimple.chart(canvas, filteredData);
  chart.setBounds(60, 30, 605, 305);
  var x = chart.addCategoryAxis("x", xLabel);
  var y = chart.addMeasureAxis("y", yLabel);
  y.overrideMax = 1.0;

  var s = chart.addSeries("voters", dimple.plot.line);
  chart.draw();
}

d3.json('assets/demonstration.json', function(data) {
  renderChart('#condorcets_jury_theorem', data, '1000', 'competence', 'likelihood', 'voters');
});
