
function renderChart(id, data, base, xLabel, yLabel, series) {

  var slice = dimple.filterData(data, 'baserate', base);
  var baserate = dimple.getUniqueValues(data, 'baserate');

  var title = d3.select(id)
    .html('')
    .append('div')
    .attr('style', 'text-align: center; margin-bottom: 0;');

  title
    .append('span')
    .attr('style', 'margin-right: 0.5em;')
    .text('Base Rate');

  var select = title.append('select').on('change', function() {
      return renderChart(id, data, this.value, xLabel, yLabel, series);
  });

  baserate.forEach(function(b) {
    select.append('option')
    .attr('value', b)
    .attr('selected', function() {
      if (b == base) 
        return 'selected';
    })
    .text((b / 1000).toPrecision(2));
  });

  var canvas = dimple.newSvg(id, 700, 400);
  var chart = new dimple.chart(canvas, slice);
  chart.setBounds(60, 30, 605, 305);

  var x = chart.addCategoryAxis('x', xLabel);
  x.addOrderRule(xLabel);
  
  var y = chart.addMeasureAxis('y', yLabel);
  y.overrideMin = 0.4;
  y.overrideMax = 1.0;
  
  var s = chart.addSeries(series, dimple.plot.line);
  s.interpolation = 'cardinal';
  chart.draw(); 
}

d3.json('assets/epistemic.json', function(data) {

  renderChart('#epistemic-by-cluster', data, '600', 'clustering', 'epistemic virtue', 'partitions');
  renderChart('#epistemic-by-partition', data, '600', 'partitions', 'epistemic virtue', 'clustering');
});

d3.json('assets/preference.json', function(data) {

  renderChart('#preference-by-cluster', data, '600', 'clustering', 'preference fidelity', 'partitions');
  renderChart('#preference-by-partition', data, '600', 'partitions', 'preference fidelity', 'clustering');
});