# Browser Code

This is the browser file where we pull together different parts of the simulation and wrap it up in the browser.  We'll start out by importing our libraries and defining any global variables we might need.


    d3 = require './assets/d3.min.js'
    simulation = require './simulation.coffee.md'
    running = false
    height = window.innerHeight  - 40 || 600
    width = window.innerWidth - 40 || 600


Next, we'll grab create our svg canvas, apply some event listeners and add it to the DOM.


    canvas = d3.select("#space")
                .append("svg:svg")
                .attr("height", height)
                .attr("width", width)
                .on "click", () ->
                  running = if running is true then false else true
      

Let's make a colour function to add some visual oomph.


    colour_on = (d, attribute) ->
      red = Math.floor( (1-d[attribute])*255 ).toString 16
      blue = Math.floor( d[attribute]*255   ).toString 16
      red = "0#{red}" if red.length is 1
      blue = "0#{blue}" if blue.length is 1 
      "##{red}00#{blue}"


Now we need to create svg circles that represent our agents and bind them to the actual agents from the simulation.  The `d` in the functions here is the D3.js accessor to the agent data.

  
    populate = () ->
      canvas.selectAll "circle"
        .data simulation.build(width, height)
        .enter().append "circle"
        .style "fill", (d) -> colour_on d, 'ability'
        .style "opacity", 0.5
        .attr "r", 8
        .attr "cx", (d) -> d.x
        .attr "cy", (d) -> d.y

    populate()


We then write a loop where each svg circle triggers the move function for its bound agent.  


    move = () ->
      circles = canvas.selectAll "circle"
      circles.each (d) ->
        d = simulation.tick d
      .transition()
      .duration 900
      .style "fill", (d) -> colour_on d, 'ability'
      .attr "cx", (d) -> d.x
      .attr "cy", (d) -> d.y

Let's make the simulation conditional on a global `running` value so we can turn it on and off.


    run = () ->
      move() unless running is false


Finally, we run the loop continuously with a one second pause.


    setInterval run, 1000