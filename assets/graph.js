var renderChart = function(id, slice, xLabel, yLabel, series) {

  var canvas = dimple.newSvg(id, 700, 400);
  var chart = new dimple.chart(canvas, slice);
  chart.setBounds(60, 30, 605, 305);

  var x = chart.addCategoryAxis("x", xLabel);
  x.addOrderRule(xLabel);
  
  var y = chart.addMeasureAxis("y", yLabel);
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  
  var s = chart.addSeries(series, dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw(); 
}

d3.json("assets/epistemic.json", function(data) {

  var slice = dimple.filterData(data, "baserate", '600');
  renderChart('#epistemic-by-cluster', slice, 'clustering', 'epistemic virtue', 'partitions');
  renderChart('#epistemic-by-partition', slice, 'partitions', 'epistemic virtue', 'clustering');

});

d3.json("assets/preference.json", function(data) {

  var slice = dimple.filterData(data, "baserate", "600");
  renderChart('#preference-by-cluster', slice, 'clustering', 'preference fidelity', 'partitions');
  renderChart('#preference-by-partition', slice, 'partitions', 'preference fidelity', 'clustering');

});