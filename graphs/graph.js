
//  Variables to alter
var xVar, xVal; // Dependent var
var yVar, yVal; // Series var
var zVar, zVal; // Fixed var
var _el, _i, _len, _ref; // loop helpers

var urlParams = window.location.search.substr(1).split('&');

zVar = 'e';
zVal = 600;
yVar = 'p';    

if (urlParams) {
}
    
  // data for the graph
d3.json("graphs/epistemic.json", function(cube) {

    var assend, matching, slice,
      __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    //  match based on an array of key:value pairs
    matching = function(item, constraints) {
      var constraint, key, val, _i, _len;
      for (_i = 0, _len = constraints.length; _i < _len; _i++) {
        constraint = constraints[_i];
        for (key in constraint) {
          val = constraint[key];
          if (item[key] !== val) {
            return false;
          }
        }
      }
      return true;
    };

    //  sort data by assending order
    assend = function(arr, key) {
      return arr.sort(function(a, b) {
        if (a[key] >= b[key]) {
          return 1;
        } else {
          return -1;
        }
      });
    };


    //  slice the cube according to a key
    //  returns an array
    var slice = function(cube, fVar, fVal) {
      var _sliced = [];
      for (_i = 0, _len = cube.length; _i < _len; _i++) {
        item = cube[_i];
        var _obj = {}; _obj[fVar] = fVal;
        if (matching(item, [_obj])) {
          _sliced.push(item);
        }
      }
      return _sliced;
    }

    //  group items in a cube according to a key
    //  sort results by xVar var
    var group = function(cube, iVar, dVar) {
      var values = [];
      var groups = [];
      for (_i = 0, _len = cube.length; _i < _len; _i++) {
        item = cube[_i];
        if (_ref = item[yVar], __indexOf.call(values, _ref) >= 0) {
          groups[values.indexOf(item[yVar])].push(item);
        } else {
          values.push(item[yVar]);
          groups[values.indexOf(item[yVar])] = [item];
        }
      }      
      _results = [];
      for (_j = 0, _len1 = groups.length; _j < _len1; _j++) {
        group = groups[_j];
        _results.push(assend(group, dVar));
      }
      return _results; 
    }

    //  Set up initial x,y,z values
    _ref = ['e', 'p', 'c'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _el = _ref[_i];
      if (_el !== zVar && _el !== yVar) {
        xVar = _el;
      }
    }
        
    var title = function() {
      var text;
      if (zVar == 'e')
        text = 'Epistemic Virtue'
      if (zVar == 'c')
        text = 'Clustering'
      if (zVar == 'p')
        text = 'Partitions'
      return text +  ' @ ' + zVal;
    }
    var label = function() {
      var text;
      if (xVar == 'e')
        text = 'Epistemic Virtue'
      if (xVar == 'c')
        text = 'Clustering'
      if (xVar == 'p')
        text = 'Partitions'
      return text
    }
    d3.select('#title').text(title);
    d3.select('#label').text(label);


    data = group(slice(cube, zVar, zVal), yVar);

    var xRange = data[0].map(function(item) {
      return item[xVar];
    });   

    // define dimensions of graph
    var m = [100, 100, 100, 100]; // margins
    var w = 600; // width
    var h = 600; //(600) - m[0] - m[2]; // height

    //  automatically determine the x&y axes based on data content
    var x = d3.scale.linear().domain([Math.min.apply(null, xRange), Math.max.apply(null, xRange)]).range([0,w]);
    var y = d3.scale.linear().domain([0.4, 1.0]).range([h, 0]);

    // create a line function that can convert data[] into x and y points
    var line = d3.svg.line()
        // assign the X function to plot our line as we wish
        .x(function(d,i) {
          // return the X coordinate where we want to plot this datapoint
          return x(d[xVar]);
        })
        .y(function(d) {
          // return the Y coordinate where we want to plot this datapoint
          return y(d.value);
        })
      .interpolate('basis');

    // Add an SVG element with the desired dimensions and margin.
    var graph = d3.select("#graph").append("svg:svg")
          .attr("width", w + m[1] + m[3])
          .attr("height", h + m[0] + m[2])
          .append("svg:g")
          .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    // create xAxis
    var xAxis = d3.svg.axis().scale(x).tickValues(xRange).tickSize(-h).tickSubdivide(true);
    // Add the x-axis.
    graph.append("svg:g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + h + ")")
          .call(xAxis);

    // create left yAxis
    var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
    // Add the y-axis to the left
    graph.append("svg:g")
          .attr("class", "y axis")
          .attr("transform", "translate(-25,0)")
          .call(yAxisLeft);

      //  setup the pretty colours
      var colorbrewer = {Set3: {
        3: ["#8dd3c7","#ffffb3","#bebada"],
        4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
        5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
        6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
        7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
        8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
        9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
        10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
        11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
        12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]}}
      var color = d3.scale.ordinal().domain([0, data.length]).range(colorbrewer.Set3[data.length]);
      
      data.forEach(addLine);
      
      function addLine(row, index, arr) {
      graph.append("svg:path")
          .attr("d", line(row))
          .attr('class', 'line-'+row[xVar])
          .attr('title', yVar+': '+row[0][yVar])
          .attr('stroke', color(index));

        graph.append("text")
          .attr("transform", "translate("+(w+20)+"," + y(row[5].value) + ")")
          .attr("dy", ".35em")
          .attr("text-anchor", "start")
          .style("fill", color(index))
          .text(row[0][yVar]);
      }

   });   