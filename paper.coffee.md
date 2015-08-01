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

## Outline

- introduction about the paper & methodology
- background on school performance measurement
- methodology
- simulation 1: random allocation with no causal impact
- simulation 2: random allocation with causal impact
- compare 1 and 2
- simulation 3: skewed allocation with negative impact


The first simulation will go here.  Click on the simulation to start / stop it.

<div id="simulation-1"></div>


---


# What can we lear from school performance

- school effectiveness is being increasingly assessed
- student performance is used as a proxy for school effectiveness
- I postulate that we can infer very little from student results if certain conditions exist

## Model


Students have academic ability measured from `0.0` to `1.0`.  No claim is made to how this relates to IQ, EQ, drive, knowledge etc.  For the purpose of graphical display, students also have locational cartesian coordinates to indicate what school they attend.


    class Student
      constructor: (@ability) ->


Schools are modelled as collections of students upon whom they have some capacity for academic impact.  In short, schools teach students.  This impact results in a change in the students academic ability.  No claim is made to how this impact comes about such as via teacher performance or curricular changes.  The only stipulation is that the process of schooling is the sole causal mechanism of the model.  

The causal impact of a school on academic performance ranges from `-1.0`  to `1.0` and assumed to be fixed for the duration of the simulation.  What does this impact score relate to exactly? The model is agnostic here so this could represent actual impact on academic ability, relative impact, or even counter-factual impact - how the student's ability would have changed relatie to some mean of `0.0`.  


    class School
      constructor: (@impact) ->


A schools impact value reflects its capacity to alter the academic ability of its students.  This is modelled through a `teach` mechanism which is essentially a transformation function of a school's impact onto a student's ability.  Again, the model is agnostic to how this occurs.


<!--     School::teach = (student) ->
      student.learn(impact) -->


School performance is measured by testing student ability on standardised testing.  This is treated as a deterministic measure of student ability.

<!-- 
    School::test = (student) ->
      @performance += student.ability -->


Each year, some students graduate and new students enrole. students apply to a school.  A student's preference for school will be dictated by relative school performance - as measured by student performance.


    Student::move = (school, range) ->
      @school = school
      @x = fake_gausian(range) + @school.x
      @y = fake_gausian(range) + @school.y
      return this


Do some stuff...


    tick = (student) ->
      [good, bad] = schools
      student.move(good, good.y*4) if student.ability > 0.65 and Math.random() < 0.05
      student.move(bad, bad.y*4) if student.ability < 0.35 and Math.random() < 0.05


Let's also create a function to graphically put the students "in" the school

    schools = []

    fake_gausian = (range) ->
      Math.random()*range/8 + Math.random()*range/8 + Math.random()*range/8 - range/4


Finally, a build function to populate the simulation.  We can specify a range of parameters here to change the initial conditions of the simulation.

    
    build = (width, height) ->
      good = new School( 0.0 )
      good.x = width * 0.25
      good.y = height * 0.5
      schools.push good

      bad = new School( 0.0 )
      bad.x = width * 0.75
      bad.y = height * 0.5
      schools.push bad

      students = for n in [1..1000]
        school = if n % 2 is 0 then good else bad
        student = new Student( Math.random() )
        student.move( school, width )


We start with two schools. In each tick of the simulation, students will apply to a school of their choice and schools will admit their preferred candidates. Schools will teach students resulting in a possible change to the students ability, measured by their performance measured by standardised tests.


    module.exports = simulation ={ build: build, tick: tick } 

# Browser Code

--> I need to extract and encapsulate this code.  The API should look something like `[school-a: {impact: 0.0, students: 0.5}, school-b: {impact: 0.5, students: 0.2}]` 


This is the browser file where we pull together different parts of the simulation and wrap it up in the browser.  We'll start out by importing our libraries and defining any global variables we might need.


    d3 = require './assets/d3.min.js'
    running = false
    height = window.innerHeight  - 40 || 600
    width = window.innerWidth - 40 || 600


Next, we'll grab create our svg canvas, apply some event listeners and add it to the DOM.


    canvas = d3.select("#simulation-1")
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


<script type="text/javascript" src="assets/d3.min.js"></script>
<script type="text/javascript" src="assets/simulation.js"></script>
