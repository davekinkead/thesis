

var ec = dimple.newSvg("#epistemic-by-cluster", 700, 400);
var ep = dimple.newSvg("#epistemic-by-partition", 700, 400);
var pc = dimple.newSvg("#preference-by-cluster", 700, 400);
var pp = dimple.newSvg("#preference-by-partition", 700, 400);

var renderChart = function(id, slice, xLabel, yLabel, series) {

  var chart = new dimple.chart(id, slice);
  chart.setBounds(60, 30, 605, 305);
  var x = chart.addCategoryAxis("x", xLabel);
  x.addOrderRule(xLabel);
  var y = chart.addMeasureAxis("y", "epistemic virtue");
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  var s = chart.addSeries(series, dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw(); 
}

d3.json("assets/epistemic.json", function(data) {

  var slice = dimple.filterData(data, "baserate", '600');
  renderChart(ec, slice, 'clustering', 'epistemic virtue', 'partitions');
  renderChart(ep, slice, 'partitions', 'epistemic virtue', 'clustering');

});

d3.json("assets/preference.json", function(data) {

  var slice = dimple.filterData(data, "baserate", "600");
  renderChart(ec, slice, 'clustering', 'epistemic virtue', 'partitions');



  var chart = new dimple.chart(pc, slice);
  chart.setBounds(60, 30, 605, 305);
  var x = chart.addCategoryAxis("x", "clustering");
  x.addOrderRule("clustering");
  var y = chart.addMeasureAxis("y", "preference fidelity");
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  var s = chart.addSeries("partitions", dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw();

  var chart = new dimple.chart(pp, slice);
  chart.setBounds(60, 30, 605, 305);
  var x = chart.addCategoryAxis("x", "partitions");
  x.addOrderRule("partitions");
  var y = chart.addMeasureAxis("y", "preference fidelity");
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  var s = chart.addSeries("clustering", dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw();
});