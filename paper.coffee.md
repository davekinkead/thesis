---
title: What does student performance tell us about school effectiveness?
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: vomit draft
---

# What does student performance tell us about school effectiveness?

Assessing teacher and school performance has become increasingly prevalent in many education systems. But directly measuring the causal impact of a school or pedagogy on student academic ability is difficult. Instead, student performance is used as a proxy for school performance.

But what exactly can we infer about school performance from student performance? A computer simulation can provide some insight.

Two schools are populated with a random allocation of students of differing ability. High academic ability students are blue, low ability students are red.

Neither school has any causal impact on a student's academic ability. Instead, at the end of each year, students choose which school they wish to attend based on their perception of school performance. We make the following assumptions:

  - School performance is measured by student performance.
  - Students don't know schools have no causal impact.
  - Students want to go to the highest performing school.
  - Schools are selective where possible.

My hypothesis is that despite both schools having no causal impact on student performance, the combination of a proxy measure, student choice, and selective mechanisms will result in very different relative performance.

In short, we can infer very little about school performance from student results.

---


## Introduction

For many parents, choosing a the right school for their children is a weighty decision.  For policy makers too, determining which schools are performing and which are not has a significant bearing on education policy and funding.  For everyone interested in education, measuring school performance is important.

But there's a challenge is measuring school performance.  We can't.  Sure we have lots of measures - NAPLAN, SATs, A-Levels - but they are measuring student performance rather than school performance.  Beyond individual students, what we are really interested in is the impact of schools on student performance.  Does policy X improve student outcomes better than policy Y? Are charter schools better for a student's education than regular schools.  Does paying for private schooling make a difference?

Because we can never run a standardised controlled experiment and fully fix all relevant variables, our causal claims about school, rather than student performance are somewhat tenuous.  Our metrics for school performance are proxies, and as proxies they are subject to some significant constraints of information theory.

What we have to do is use a proxy - student performance - to infer school performance... 



- introduce the idea
- quality and limit the claims
- this is an argument for epistemic scepticism about school performance


## School Performance

- background on school performance measurement


## Methodology

- a justification of agent based modelling and simulation


## Model

We begin by modelling students.  Students are simple creatures who have an academic ability measured from `0.0` to `1.0`.  No claim is made to how this relates to IQ, EQ, drive, knowledge, etc. but the value is absolute rather than relative.  It is stipulated, however, that the average ability for any new student is `0.5`.


    class Student
      constructor: (@ability) ->


Next we model schools.  Schools are modelled as collections of students upon whom they have some capacity for academic impact.  In short, schools teach students.  This impact results in a change in the students academic ability.  No claim is made to how this impact comes about such as via teacher performance or curricular changes.  The only stipulation is that the process of schooling is the sole causal mechanism of the model.  Schools also have an id so we can keep track of them.  


    class School
      constructor: (@id, @impact) ->


The causal impact of a school on academic performance ranges from `-1.0`  to `1.0` and assumed to be fixed for the duration of the simulation.  What does this impact score relate to exactly? The model is agnostic here so this could represent actual impact on academic ability, relative impact, or even counter-factual impact - how the student's ability would have changed relatie to some mean of `0.0`. 


    teach = (student) ->
      student.ability = Math.min student.ability * (1 + student.school.impact), 1.0



!! Need to fix this to place bounded limits on it.

Finally, we create a class to encapusate the simulation itself.  We instantiate the simulation with a profile contain information about schools and student distribution.  We then use the profile to create the students and schools as desired.


    class Simulation
      constructor: (@profile) ->
        @schools = for school, i in @profile.schools
            new School(i, school.impact)
        @students = for n in [1..1000]
          student = new Student Math.random()
          student.school = @schools[n % 2]
          student


We now need our simulation to do something.  During each tick in the simulation (a generic time period that could represent terms, semesters, or years), a percentage of students graduate and leave the school.  These students are in turn replaced by new enrollments.  A certain percentage of those enrolling will be selective however. 

[Note about selection].

Of these selective students the best will enroll in the top performing school. [Note about school policies and how they can be modelled].

The result is that the graduating cohort will be `reset` with some selectively reallocated.


    Simulation::graduate = () ->


First get average school performace.


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


Now determine which school is better.


      [best, worst] = if @schools[0].score > @schools[1].score
          [@schools[0], @schools[1]]
        else 
          [@schools[1], @schools[0]]


And then reset a percentage of each school and re-enroll selectively as needed.


      @students.map (student) =>
        if Math.random() > 0.8
          student.ability = Math.random()
          if Math.random() < @profile.selectivity
            student.school = if student.ability > 0.5 then @schools[best.id] else @schools[worst.id]


We also provide an accessor method for the simulation to trigger the teaching.


    Simulation::teach = () ->
      @students.map (student) ->
        teach student


## Browser Code

!! I should extract the browser code section to an external file and `require` it as it really doesn't add to the arguments.

Now we need to display the simulation.  To make things look pretty, we will use the [D3.js library](http://d3js.org/) by Mike Bostock.  We will also set some global variables from the browser.


    d3      = require './assets/d3.min.js'
    height  = window.innerHeight - 25 || 600
    width   = window.innerWidth - 25 || 600


We will be running multiple simulations in the browser so will need a way of rendering them graphically.  Here we create a method for building a canvas and adding click events.  When a simulation is clicked, the interval runner starts and fires every 1000 milliseconds.


    display = (id, params) ->
      runner = false
      sim = new Simulation params
      canvas = d3.select("##{id}")
        .append("svg:svg")
        .attr "height", Math.max(width * 0.4, height * 0.8)
        .attr "width", width
        .on "click", () ->
          if runner
            clearInterval runner
            runner = false
          else 
            runner = setInterval () ->
              tick()
            , 1000
      canvas.append('text')
        .attr "y", () -> height * .7
        .attr "x", () -> width * .35


Next, we draw our simulation.  We will represent our students as coloured circles and school allocation by cartisian proximity using D3.js.


      draw = () ->
        render sim
        students = canvas.selectAll "circle"
          .data sim.students
        students.enter().append "circle"
          .style "fill", (student) ->
            colour student, 'ability'
          .style "opacity", 0.5
          .attr "r", 8
          .attr "cx", (d) -> d.x
          .attr "cy", (d) -> d.y 
        


Every cycle of the interval runner triggers the `tick()` function.  This method calls the model to teach, graduate and render.


      tick = () ->
        sim.teach()
        sim.graduate()
        render sim
        circles = canvas.selectAll "circle"
        circles.transition()
          .duration 1000
          .style "fill", (d) -> colour d, 'ability'
          .attr "cx", (d) -> d.x
          .attr "cy", (d) -> d.y
        canvas.select "text"
          .text "#{sim.schools[0].score.toFixed(5)} - Average Student Ability - #{sim.schools[1].score.toFixed(5)}"

      draw()


We will display student ability graphically using colour.  Blue represents high ability and red low ability.  With a little bit of maths, we can convert ability on a range of 0.0 to 1.0 to a hexidecimal representation of Red-Green-Blue colour.


    colour = (d, attribute) ->
      red = Math.floor( (1-d[attribute])*255 ).toString 16
      blue = Math.floor( d[attribute]*255   ).toString 16
      red = "0#{red}" if red.length is 1
      blue = "0#{blue}" if blue.length is 1 
      "##{red}00#{blue}"


To graphically represent school enrollment, we create a guasian overlay so all students in the same school clump together. 

    gausian = (range) ->
      Math.random()*range/8 + Math.random()*range/8 + Math.random()*range/8 - range/4


Finally, we need a way to update the position of the students on a cartisian plane.


    render = (simulation) ->
      simulation.schools.map (school) ->
        school.x = width * (0.3 + 0.5 * school.id)
        school.y = height * 0.5
      simulation.students.map (student) ->
        student.x = gausian(width/1.2) + student.school.x
        student.y = gausian(width/1.2) + student.school.y


## Pure Impact

Let's start with a sanity check.  We will begin the simulations modelling two schools that have no educational impact in a system with no selectivity.  What we should observe is not significant change within and between schools. Random enrollment and student ability is doing all the work here.

Click on the simulation to start / stop it.


    display 'sanity-check-1', { 
      schools: [
        {impact: 0.0}, 
        {impact: 0.0}
      ],
      selectivity: 0.0
    }


<div id="sanity-check-1"></div>

In the second simulation we will model two schools - one with the maximal positive education impact and one with the maximal negative impact.  The latter school will make students dumber!  We will also stipulate a selectivity level of `0.0` so no students should change schools.

Both schools start with a uniform random distribution of students.  At every tick, both schools will teach, thereby impacting the students ability, and a percentage will graduate and be replaced with a new cohort of uniform random ability.  If the simulation works as expected, one school should perform well, and another poorly. 


    display 'sanity-check-2', { 
      schools: [
        {impact: 0.5}, 
        {impact: -0.5}
      ],
      selectivity: 0.0
    }


<div id="sanity-check-2"></div>

The simulation delivers the expected results.  We can have confidence in our code.  Yay us!


## Shifting Averages

What happens when schools have no impact but selectivity is present?  In this scenario, any changes in school performance are soley the result of shifting averages.  Both schools are identical teaching wise but as soon as a performance imballance arises, we should expect to see run away performance differences.


    display 'simulation-shifting-averages-1', { 
      schools: [
        {impact: 0.0}, 
        {impact: 0.0}
      ],
      selectivity: 0.5
    }


<div id="simulation-shifting-averages-1"></div>


## Head Starts

- simulation: skewed allocation with negative impact.
- a negative impact school should still outperform a positive one given a skewed enough start with high ability students


## Conclusion


Unless you are controlling for selectivity, there is very little you can reliably infer from proxy measures like student performance.


<script type="text/javascript" src="assets/d3.min.js"></script>
<script type="text/javascript" src="assets/simulation.js"></script> 