---
title: What does student performance tell us about school effectiveness?
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: vomit draft
---

# What does student performance tell us about school effectiveness?

Assessing teacher and school performance has become increasingly prevelent in many education systems. But directly measuring the causal impact of a school or pedagogy on student academic ability is difficult. Instead, student performance is used as a proxy for school performance.

But what exactly can we infer about school performance from student performance? A computer simulation can provide some insight.

Two schools are populated with a random allocation of students of differing ability. High academic ability students are blue, low ability students are red.

Neither school has any causal impact on a student's academic ability. Instead, at the end of each year, students choose which school they wish to attend based on their perception of school performance. We make the following assumptions:

  - School performance is measured by student performance.
  - Students don't know schools have no causal impact.
  - Students want to go to the highest performing school.
  - Schools are selective where possible.

My hypothesis is that desipite both schools having no causal impact on student performance, the combination of a proxy measure, student choice, and selective mechanisms will result in very different relative performance.

In short, we can infer very little about school performance from student results.

---

## Structure

- introduction about the paper & methodology
- background on school performance measurement
- methodology
- simulation sanity check: no movement, causal impact each way
- simulation shifting averages: random allocation with no causal impact
- simulation 2: random allocation with causal impact
- compare 1 and 2
- simulation 3: skewed allocation with negative impact
- conclusion and insights


## Model


Define the Student

Students have academic ability measured from `0.0` to `1.0`.  No claim is made to how this relates to IQ, EQ, drive, knowledge etc.


    class Student
      constructor: (@ability) ->


Define the School

Schools are modelled as collections of students upon whom they have some capacity for academic impact.  In short, schools teach students.  This impact results in a change in the students academic ability.  No claim is made to how this impact comes about such as via teacher performance or curricular changes.  The only stipulation is that the process of schooling is the sole causal mechanism of the model.  


    class School
      constructor: (@id, @impact) ->


The causal impact of a school on academic performance ranges from `-1.0`  to `1.0` and assumed to be fixed for the duration of the simulation.  What does this impact score relate to exactly? The model is agnostic here so this could represent actual impact on academic ability, relative impact, or even counter-factual impact - how the student's ability would have changed relatie to some mean of `0.0`.  

This is the sim


    class Simulation
      constructor: (profile) ->
        @schools = [new School(0, 0.0), new School(1, 0.0)]
        @students = for n in [1..1000]
          student = new Student Math.random()
          student.school = @schools[n % 2]
          student


every tick remove a random % from each school.  

A % cohort will be reset (graduate and enroll) and choose a new school.  If we are simulating selectivity, then any student with a better than average score will go to the higher performing school 

They choose a new school by 


    Simulation::graduate = () ->
      [zero, one] = [[], []]
      @students.map (student) ->
        zero.push student.ability if student.school.id is 0
        one.push student.ability if student.school.id is 1
      total = zero.reduce (a, b) ->
        a + b
      @schools[0].score = total / zero.length
      total = one.reduce (a, b) ->
        a + b
      @schools[1].score = total / one.length

      @schools.sort (a, b) ->
        b.score - a.score

      @students.map (student) =>
        if Math.random() > 0.8
          student.ability = Math.random()
          if Math.random() > 0.0
            student.school = if student.ability > 0.5 then @schools[0] else @schools[1]


## Browser Code

Extract the browser code section to an external file and included it.

Now we need to display the simulation.  To make things look pretty, we will use the [D3.js library](http://d3js.org/) by Mike Bostock.  We will also set some global variables.


    d3      = require './assets/d3.min.js'
    height  = window.innerHeight - 25 || 600
    width   = window.innerWidth - 25 || 600


This is where we argue things out....


Let's make the simulation conditional on a global `running` value so we can turn it on and off.


    display = (id, params) ->
      runner = false
      sim = new Simulation {}
      canvas = d3.select("##{id}")
        .append("svg:svg")
        .attr("height", height)
        .attr("width", width)
        .on "click", () ->
          if runner
            clearInterval runner
            runner = false
          else 
            runner = setInterval () ->
              tick()
            , 1000

      draw = () ->
        render sim
        students = canvas.selectAll "circle"
          .data sim.students
        students.enter().append "circle"
          .style "fill", (student) ->
            colour_on student, 'ability'
          .style "opacity", 0.5
          .attr "r", 8
          .attr "cx", (d) -> d.x
          .attr "cy", (d) -> d.y 

      tick = () ->
        sim.graduate()
        render sim
        circles = canvas.selectAll "circle"
        circles.transition()
          .duration 900
          .style "fill", (d) -> colour_on d, 'ability'
          .attr "cx", (d) -> d.x
          .attr "cy", (d) -> d.y

      draw()


Let's make a colour function to add some visual oomph.......

    gausian = (range) ->
      Math.random()*range/8 + Math.random()*range/8 + Math.random()*range/8 - range/4

    render = (object) ->
      object.schools.map (school) ->
        school.x = width * (0.25 + 0.5 * school.id)
        school.y = height * 0.5
      object.students.map (student) ->
        student.x = gausian(width/1.2) + student.school.x
        student.y = gausian(width/1.2) + student.school.y

    colour_on = (d, attribute) ->
      red = Math.floor( (1-d[attribute])*255 ).toString 16
      blue = Math.floor( d[attribute]*255   ).toString 16
      red = "0#{red}" if red.length is 1
      blue = "0#{blue}" if blue.length is 1 
      "##{red}00#{blue}"


We display the simulation with the following code which builds a simulation for a set of parameters in a particular location on the page.





## Argument & Examples

The first simulation will go here.  Click on the simulation to start / stop it.


    display 'simulation-1', { 
      schools: [
        {impact: 0.0, students: 0.5}, 
        {impact: 0.5, students: 0.2}
      ], 
      movement: true
    }


<div id="simulation-1"></div>

And here is the second simulation here...


    display 'simulation-2', { 
      schools: [
        {impact: 0.0, students: 0.5}, 
        {impact: 0.5, students: 0.2}
      ], 
      movement: true
    }


<div id="simulation-2"></div>

<script type="text/javascript" src="assets/d3.min.js"></script>
<script type="text/javascript" src="assets/simulation.js"></script> 