

var ec = dimple.newSvg("#epistemic-by-cluster", 700, 400);
var ep = dimple.newSvg("#epistemic-by-partition", 700, 400);
var pc = dimple.newSvg("#preference-by-cluster", 700, 400);
var pp = dimple.newSvg("#preference-by-partition", 700, 400);

d3.json("graphs/epistemic.json", function(data) {

  slice = dimple.filterData(data, "baserate", "600");

  var chart = new dimple.chart(ec, slice);
  chart.setBounds(60, 30, 605, 305);
  var x = chart.addCategoryAxis("x", "clustering");
  x.addOrderRule("clustering");
  var y = chart.addMeasureAxis("y", "epistemic virtue");
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  var s = chart.addSeries("paritions", dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw();

  var chart = new dimple.chart(ep, slice);
  chart.setBounds(60, 30, 605, 305);
  var x = chart.addCategoryAxis("x", "paritions");
  x.addOrderRule("paritions");
  var y = chart.addMeasureAxis("y", "epistemic virtue");
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  var s = chart.addSeries("clustering", dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw();
});

d3.json("graphs/preference.json", function(data) {

  slice = dimple.filterData(data, "baserate", "600");

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
  x.addOrderRule("paritions");
  var y = chart.addMeasureAxis("y", "preference fidelity");
  y.overrideMin = 0.5;
  y.overrideMax = 1.0;
  var s = chart.addSeries("clustering", dimple.plot.line);
  s.interpolation = "cardinal";
  chart.draw();
});