---
title: What can student results tell us about school performance?
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: PESA draft
bibliography: /Users/dave/Dropbox/Research/readings/.library.bibtex
---

# What can student results tell us about school performance?

> It seems likely that most people believe schooling somehow affects student ability.  After all, we as a society invest significant amounts of time and money in various endeavours trying to measure exactly this.  Yet these endeavours face an epistemic challenge.  Because we can't measure the causal impact of schools directly, we can't know this causal impact with certainty.  Instead, we _infer_ the causal impact of schools on student ability by way of proxy measures such as student results.  If student results improve, then we can _infer_ that some aspect of schooling _caused_ this.  Perhaps.

> How warranted is this inference from student results to school performance?  With the aid of computer simulation, I investigate the robustness of this inference mechanism in a variety of common scenarios.  Simulation allows us to stipulate causal mechanisms that cannot be observed in the real word and measure how well our empiric inferences map actual causes.  I show that when selectivity, either by student or school, is present, the inference mechanism from student results to school performance is very poor.  And if our causal inferences fail when causes are known, they must also fail when causes are not known.

> Written in [Literate Coffeescript](http://Coffeescript.org/), this paper is an argument for epistemic scepticism about school performance measurement. Simultaneously a philosophical argument and a computer simulation that demonstrates the argument, it is [best viewed in HTML](http://blind-review.github.io/school-performance/) as this offers the reader the chance to interact with simulation and visualisations. A static version suitable for PDF or print is currently under development.


## Introduction

I take it as uncontested the claim that schooling somehow affects student ability.  However we measure the academic ability of students - whether by _declarative knowledge_, the learning and appropriate recall of particular facts; or by _procedural knowledge_, the application of skill and know-how - few people if any would claim that school policies, pedogogy, and environment have no causal impact on students.  After all, as a society we invest significant amounts of time and money in various endeavours like the National Assessment Program - Literacy and Numeracy (NAPLAN), Trends in International Mathematics and Science Study (TIMSS), and the Programme for International Student Assessment (PISA), trying to measure exactly this.

Measuring school performance is therefore vital.  Parents want to know which school will best educate their children; principles want to know if their leadership makes a difference; politicians and bureaucrats want to know if their policies work.  To do this, we use a range of metrics: Standardised literacy and numeracy tests like NAPLAN; the Peabody Picture Vocabulary Test [@dunn1965]; IQ scores or the Wechsler Intelligence Scale for Children (WISC-IV) [@wechsler2003].  Yet none of these assessments measure school performance directly.  Instead, they reply on a proxy measure, student results, to _infer_ school performance.  Thus, when student results improve, we can _infer_ that some aspect of schooling _caused_ this; that school performance has improved.  

Perhaps.

The challenges associated with infering school performance from student results have long been documented [@coleman1970]. Ecological models stress the important role non-school factors such as the family and neighborhood have on student performance [ @bronfenbrenner1994, @zubrick2000].  Further clouding our understanding are the variety of often competing causal theories that attempt explain how schools affect student ability - peer effect [@hanushek2003], class size policies [@ehrenberg2001], or teach training and qualifications [@kosgei2013].  How and to what degree schools themselves affect student ability remains an open question, therefore how much changes in student results can be attributed to school performance is also uncertain.  

With the aid of computer simulation, I introduce a novel model of school performance in order to judge how warranted the _student results to school performance_ inference mechanism is.  I introduce a new variable that is largely overlooked by the education literature, _selectivity_, and show that when selectivity is present in a school system, we should be very skeptical about infering anything about school performance from student results.


## Motivation & Methodology

The limits of causal knowledge are well known.  Causation cannot be observed directly - it can't be seen, heard, or touched.  Neither can it be know _a priori_.  Causal claims might be true or false, but they are never contradictory [@hume1748 §4.2.16].  Instead, causal connections must be _inferred_ from their obverable, posited effects.  In order to discover the causes of effects, we try to hold all but a few variables fixed, and observe the co-variance between them in order to infer causality.

In complex systems however, accurate causal inferences are especially challenging.  Common causes, feedback loops, under-determination, over-determination, and causal indeterminacy all strain the certainly of our inference mechanisms despite the best controls, protocols, and experimental design we might put in place.  Causal inference is difficult.  Infering school performance from student results in a complex education system with multiple confounders is even more difficult.

So just how warranted is this inference from student results to school performance?  In some scenarios, inferring school performance from student results might be perfectly justified.  Changes in student results might be largely or even wholly explainable by a school's causal impact.  In many other scenarios however, we might have serious grounds for scepticism.  Confounders such as parental age and socio-economic status [@caro2009], birth weight, neighborhood characteristics [@nghiem2015], or even a student's breakfast consumption [@adolphus2013] might explain a great deal about differences in student results.

If infering from observable effects to their causes is difficult, then judging the quality of the inference mechanism is even harder.  Doing so requires some standard against which we can make comparisons, but our knowledge of this standard is limited by the same problem of inference.  How can we judge the quality of the inference from student results to school performance if can't be certain what is the cause of student results in the first place?  We lack the epsitemological foundations to properly ground our second order judgements.

Computer simulation however, offers us one way out of this problem. Simulation allows us to not only model how we think the world _is_, but to also stipulate how we think the world _should be_.  It allows us to know the causal relationships within the model with certainty because they are explicitly stipulated in code.  With causality known, we can then observe the empiric data and assess the quality of the inference mechanism - we can judge how good the inference mechanism from student results to school performance really is, in our model at least.

What follows in this paper is a simulation of a simple model of school performance, encompasing a just handful of variables.  First I describe and define a model of students and schools.  Student ability is created at random and students are randomly allocated to schools.  A school's causal impact is stipulated however, and this varies between schools.  Schools causally impact student's ability and this impact is measured via student results.  Over time, some students graduate and new students enroll.  Aggregate student results are used as a proxy measure of school performance.  This is a non-ecological model - changes in student results are fully caused by the schooling process.  We then introduce two variables representing common phenomena in many school systems: selectivity and skew.  _Selectivity_ determines what percentage of students enrol non-randomly, while _skew_ determines how random the initial distribution of students between schools is. 

Because the causal impact of a school on student ability is known by stipulation, we can assess how accurately empiric data about student results maps to the stipulated causal impact of the school - to our belief about school performance.  If the inference mechanism from _student result to school performance_ is warranted in the simulation when the causal mechanism is stipulated, then we have some grounds to be confidend about the inference mechanism in the real world, additional confounders not withstanding.  _But if the inference isn't warranted when the causal mechanism is known, then it can't be warranted when the causal mechanism is unknown._  This simulation will therefore allow us to say when the _student result to school performance_ inference might be warranted, and when it cannot be warranted.

Written in [Literate Coffeescript](http://Coffeescript.org/), this paper is simultaneously a philosophical argument and a computer simulation that demonstrates the claims of the argument.  Literate Programming [@knuth1984] involves embedding computer code within a written argument and has much to offer scholarly writing.  Firstly, it ensures that all assumptions of the model are explicit.  Computer programs are deterministic, so all the instruction nescessary for the simulation to run have to be explicitly documented.  Literate Programming also allays concerns relating to validation and replication.  Often, simulations are 'black boxes' of code - opaique to the reader and reviewer alike.  Because all the code nescessary for the simulation to run is embedded in the paper, replication is as simple as following the installation instructions in the appendix. 

I make no assumptions about the reader's knowledge of computer programming.  Code is indicated by `monospace font and indented blocks`, is written to be as informative as possible, and is fully described in the surrounding text.  Any code that is not germain to the argument itself has been placed in the appendix. Best viewed in HTML at [http://blind-review.github.io/school-performance/](http://blind-review.github.io/school-performance/) to take advantage of the interactive visualisations, a static but less engaging version of this paper is available in PDF or print.


## A Model of School Performance

We begin by modelling students.  Students are simple creatures who have an academic ability measured from a minimum of `0.0` to a maximum of `1.0`.  Academic ability is broadly construed and can be interpreted as any attribute of value that can be influenced by schooling.  This ability is uniformly randomly generated and is centred around a stipulated mean.


    class Student
      constructor: () ->
        @ability = Math.random()


Next we model schools.  Schools are modelled as collections of students upon whom they have some causal impact on academic ability.  In short, schools teach students.  The causal impact of a school on academic performance ranges from `-1.0` to `1.0` and assumed to be fixed for the duration of the simulation.  Again, no claim is made to  how educational impact is transmitted to student ability in the real world.  Policy, pedogogy, or the school environment are all possible causal mechanisms compatible with this model.  The key stipulation is that `@impact` is the only causal mechanism at work.  Schools also have an id so we can keep track of them. 


    class School
      constructor: (@id, @impact) ->


Finally, we create a class to encapsulate the simulation itself.  We construct the simulation with a profile containing information about schools and student distribution.  We then create 1000 students of random ability and enrol them in the schools according to the simulation profile.


    class Simulation
      constructor: (@profile) ->
        @schools = for school, i in @profile.schools
            new School(i, school.impact)
        @students = for n in [1..1000]
          student = new Student()
          student.school = enrol student, @schools, @profile.skew
          student


Events in the simulation will occur during a generic time perior called a `tick`.  A tick can represent any fixed period of time such as a term, semester, or year.  During each tick schools will `teach` students, some students will `graduate`, and some new students will `enrol`.

The initial enrolment of students between schools is determined by a skew factor ranging from `0.0`, meaning all the below average abiltity students in the first school, to `1.0`, all the above average ability students in the first school.  The default value of `0.5` results in an even distribution of students by ability.  Subsequent enrolments will be random.


    enrol = (student, schools, skew=0.5) =>
      school_id = if student.ability > 0.5
        if Math.random() < skew then 0 else 1
      else
        if Math.random() > skew then 0 else 1
      schools[school_id]


Schools causally impact students' ability.  Again, this could represent a variety of causal mechanisms such as pedogogy, policy, or classroom environment.  As a non-ecological model, schooling is the only mechanism by which student ability can change within the model.  The causal impact on student ability is assumed to be linear and a constraint is applied to ensure ability remains between `0.0` and `1.0`.


    Simulation::teach = () ->
      @students.map (student) ->
        student.ability = Math.min student.ability * (1 + student.school.impact * 0.2), 1.0


We now measure school performance by calculating the average student ability in each school.  Imagine this as an error free method of assessment which removes concerns about measurement validation from the model.  School performance will therefore perfectly track the academic ability of the students enrolled.


    Simulation::measure_performance = () ->
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
      [best, worst] = if @schools[0].score > @schools[1].score
          [@schools[0], @schools[1]]
        else 
          [@schools[1], @schools[0]]


In each tick, a percentage of students will graduate and be replaced by new students enrolling.  Depending on the _selectivity_ parameter, some students will attempt to enrol in the best performing school.  Schools will attempt to accept the highest ability students of those selectively enroling first so that all schools have even numbers of students.


    Simulation::graduate = () ->
      [best, worst] = @measure_performance()
      @students.map (student) =>
        if Math.random() > 0.8
          student.ability = Math.random()
          if Math.random() < @profile.selectivity
            student.school = if student.ability > 0.5 then @schools[best.id] else @schools[worst.id]

      display = () ->


We now have a simple model of students with initial uniformly random `ability`, schools whose stipulated `impact` is the only mechanism for affecting student ability, a perfect measure of school performance as average student ability, and methods for some student to graduate and new ones to enrol.


## Simulation

With the model defined, we can begin with a test to ensure the simulation is working as expected.  We will begin with students split evenly into two schools.  We stipulate that schools have no causal impact on student ability, and that there is no selectivity within the system - i.e. all students will enrol randomly.  Student ability is represented in colour - blue for > 0.5 and red for < 0.5 ability.

What we _should_ observe is no significant change within and between schools.  Random enrolment and student ability should doing all the work driving school performance.  Click on the simulation at any time to start or stop it.


    sanity_check_1 = { 
      schools: [{impact: 0.0}, {impact: 0.0}],
      selectivity: 0.0
    }


<figure class="simulation">
<div id="sanity-check-1"></div>
<figcaption>Simulation 1: No impact, no selectivity.</figcaption></figure>

The results are as expected. During each tick, the `teach` method has no impact on student ability because both schools have `0.0` impact. Some students graduate and are replaced with new students of random ability.  As such, school performance, measured by average student ability, remains close to 0.5.

Next, we will model two schools with different causal impact - one positive and one negative - again with no selectivity.  While both schools will start with similar student ability levels, the `teach` method _should_ see performance in the first school increase while it decreases in the second. 


    sanity_check_2 = { 
      schools: [{impact: 0.5}, {impact: -0.5}],
      selectivity: 0.0
    }


<figure class="simulation">
<div id="sanity-check-2"></div>
<figcaption>Simulation 2: School impact, no selectivity.</figcaption></figure>

Again, the simulation generates the expected results with one school's performance stabalising at approximately `0.65` and the other at `0.31`.  In both cases, the simulation performed as expected and our inference from student results to school performance is warranted.


## Performance as Shifting Averages

What happens when selectivity is introduced?  In the next scenario, we take parameters of Simulation 1 where schools have no causal impact on student ability, but introduce selectivity into the model.  Because both schools are identical in terms of their causal impact, any changes must be the result of selectivity.


    shifting_averages = { 
      schools: [{impact: 0.0}, {impact: 0.0}],
      selectivity: 0.5
    }


<figure class="simulation">
<div id="shifting-averages"></div>
<figcaption>Simulation 3: No impact but with selectivity.</figcaption></figure>

While the performance of both schools is approximately `0.5` when the simulation begins, any minor imbalance in relative performance caused by random variation in new student ability results in a run-away effect.  As soon as one school is perceived to perform better than others, _selectivity_ ensures that students who do selectively enrol, choose the school with the higher percentage of high ability students.  After a few ticks, the simulation stabilises with one school performing at approximate `0.63` and the other at `0.37`.

Recall however that the impact of schools is stipulated as zero.  Individual student ability never changes because schools have no impact.  The large differences in school performance are therefore completely explained by _selectivity_.  As selectivity and the percentage of students enroling non-randomly increases, so too does the performance difference.  In this scenario, differences in school performance as measured by student ability are the result of nothing more than shifting averages of student ability.


## Performance is Relative

The previous simulation showed how significant performances differences can arise even when schools are causally identical.  The next simulations demonstrate how a school with a low or negative impact can appear to perform well above what it should.  We begin with two schools having negative impact of differing levels but with no selectivity.  In this case the average performance of both schools _should_ decrease, propped up only by new enrolments whose average ability is `0.5`.


    relative_1 = { 
      schools: [{impact: -0.25}, {impact: -0.5}],
      selectivity: 0.0
    }


<figure class="simulation">
<div id="relative-1"></div>
<figcaption>Simulation 4: Negative impact, no selectivity.</figcaption></figure>

Again, the simulation results are as expected.  Both schools performed poorly but the school with the lowest causal impact performed the worst.  Next however, we introduce selectivity to the same schools and students.


    relative_2 = { 
      schools: [{impact: -0.25}, {impact: -0.5}],
      selectivity: 0.5
    }


<figure class="simulation">
<div id="relative-2"></div>
<figcaption>Simulation 5: Negative impact with selectivity.</figcaption></figure>

When selectivity is present, the inference between student results and school performance breaks down.  The school with the negative but better causal impact performs far better than its causal impact says it should.  Meanwhile, the school with the worst causal impact performs much worse than it should.  As selectivity increase, so too does the disconnect between perceived performance and caisal impact. The mere presence of a school with lower causal impact on student ability combined with selectivity results in the higher ability students enrolling in the _least worse_ school, thereby _inflating_ that school's apparent performance.  Thus, school performance as measured by student ability is determined not only by the causal impact of a school but also by the relative performance of other schools.  This is not to say that school performance _is_ relative, but rather that the performance of one school is affected by the performance of another, whenever selectivity is present.


## Lucky Starts

Until now, we have looked at scenarios where both schools started with similar initial random distributions of students.  In the next simulations, we add a new parameter, `skew`, that alters the initial enrolment of students.  Every simulation is made up of 1000 students of uniformly random ability (mean of 0.5).  Skewing the initial distribution means allocating students to schools non-randomly.  A `skew` value of `0.75` here means that 75% of the above average, and therefore 25% of the below average students, will initially be enrolled in the first school.  The default value of `0.5` means there is an equal distribution of ability.

In this simulation, we stipulate that schools have different causal impact but the initial distribution of student ability is skewed in favour of the school with the lowest impact.  No selectivity is present so we should expect the initial mismatch between school impact and performance to be corrected over time.


    head_start_1 = { 
      schools: [{impact: -0.25}, {impact: 0.25}],
      selectivity: 0.0,
      skew: 0.75
    }
    # http://blind-review.github.io/school-performance/#head-start-1


<figure class="simulation">
<div id="head-start-1"></div>
<figcaption>Simulation 6: Mixed impact with skew.</figcaption>
</figure>

As expected, any skewness in the initial distribution when selectivity is absent is eliminated given enough time.  In each tick, the causal impact of schools affects student ability, and every enrolling cohort normalises school performance to a degree.  The first school, while appearing to perform strongest initially, eventually performs poorly, with the opposite occurring in the second school.  Next, we add selectivity to the same parameters and see how this changes performance.


    head_start_2 = { 
      schools: [{impact: -0.25}, {impact: 0.25}],
      selectivity: 0.75,
      skew: 0.75
    }


<figure class="simulation">
<div id="head-start-2"></div>
<figcaption>Simulation 7: Mixed impact with skew and selection.</figcaption></figure>

When selectivity is present, school performance again no longer reflects a school's stipulated causal impact.  A skewed initial distribution of students and selectivity results in a school with a much weaker causal impact performing better than a school with a much stronger causal impact.  Given a sufficiently skewed initial distribution, schools with negative causal impact can continue to outperform schools with postitive impact.  Again, the presence of selectivity in the school system undermines the student results to school performance inference mechanism.


## Discussion

We want to measure school performance but cannot do so directly.  Instead, we rely on student results as a proxy, and _infer_ school performance.  This of course, raises a number of epistemic issues.  Few people if any would claim that current school performance measurement regimes that rely on student results as proxy data such as NAPLAN are perfect.  What these simulations demonstrate however, is that _if selectivity is present, then the inference from student results to school performance is unwarranted_.  If a causal inference mechanism isn't warranted when causes are known with certainty, the it seems highly unlikely that the inference can be warranted when causes aren't known or observable.  

The inference from student results to school performance is poor even under the very best epistemic conditions.  The model above allows us to stipulate the behaviour of much that is uncontrollable in the real world.  Within the model, our knowledge of student ability is perfect and not affected by test errors, strategic teaching, or exam stress.  So too is our knowledge of the causal mechanism.  As a non-ecological model, we have stipulated that the only what student ability can change in the simulation is via school impact.  We could not ask for more perfect conditions from which to _infer_ causal impact yet even here the link between proxy evidence and actual cause breaks down.  _We should therefore be very skeptical about infering school performance from student results_.

This is of course, a purely theoretical argument.  It remains an open empiric question just how well the simulation models reality, and how much selectivity occurs within our school systems.  Social scientists are likely to be better placed answering this question than philosophers are, but a few observations about the Australian context are germain.  Approximately 35% of all students currently attend a non-government school [@abs2014] indicating a minimum level of explicit selectivity.  Then there is selectivity within government schools.  Data on what percetnage of students attend their _nearest_ school is difficult to find, as it data on parents moving to different school catchment zones because of perceived school performance, but anecdotal evidence suggests this too occurs.

One might object to my conclusion by claiming that the model described doesn't accurately reflect the real world.  This is true but not grounds to reject the conclusion.  All models are abstractions and simplifications of reality - this is their strength.  In this case, the model described presents a best case epistemic scenario for measureing school performance.  As such, the simplification of the model strengthens the claims for epistemic skepticism towards school performance.  Increased "realism" such as testing errors when measuring student ability would only undermine support for the student results to school performance inference further.

Despite its simplicity, the model also appears to conform with empiric observation.  In the sanity check simulations, the model performed exactly as expected.  When selectivity was introduced, the simulation was compatible with recent Australian data. @nghiem2015 analysis of the Longitudinal Study of Australian Children showed that non-government (and therefore selectively enrolled) shools had higher average student NAPLAN results but once controlled, performed equally or worse in the case of Catholic schools.

However, some might simply dispute that student results are typically used for measuring school performance.  NAPLAN, Peabody, and Wechsler tests intended for measuring student, not school performance.  Longitudinal [@zubrick2000], predictive [@lavin1965], and pyschological studies of academic performance [@pintrich1990] all rely on these measures without making claims about school performance.  My conclusion may be valid but it is poorly targeted.  While it is certainly true that student results are used for much more than assessing school performance, student results are still used infer school performance by parents, teachers, and policy makers alike.  NAPLAN is explicit - "[s]chools can gain detailed information about how they are performing, and they can identify strengths and weaknesses which may warrant further attention." [@naplan2015]

We should approach claims like these with a great deal of caution and be very skeptical about infering school performance from student results.


---

# Appendix

> This paper is written in Literate Coffeescript to make replication available to all readers.  Running your own simulation is easy.  You just need to specify the parameters and call `display(target-location, parameters)` and add a target location in HTML `id="target-location"`

> Make sure you've got [Coffeescript](http://Coffeescript.org/), and therefore [node.js](https://nodejs.org/), installed.  To transpile the code, you'll need [Browserify](https://www.npmjs.com/package/browserify) and [Coffeeify](https://www.npmjs.com/package/coffeeify) to run the command `browserify -t coffeeify paper.coffee.md > assets/simulation.js`.  This will turn the paper into javascript.

> The javascript just transpiled is now included back into the paper, which we transpile into HTML, and view in the browser.  You can use any markdown to HTML converter you like for this such as [Pandoc](http://pandoc.org/).

> All the source code for this simulation is contained in this argument.  You can [view the repo here](https://github.com/blind-review/school-performance).

> Coincidently, the Coffeescript transpiler is written in Coffeescript itself so we are using Coffeescript to transpile Coffeescript to transpite Coffeescript into javascript which is then used by the same transpiled Coffeescript.


## Browser Code

Much of the browser code required in this simulation is not germain to the argument and so has been extracted to the appendix.  First we need to display the simulation somehow.  To make things look pretty, we will use the [D3.js library](http://d3js.org/) by Mike Bostock.  We will also set some global variables from the browser such as height and width.


    d3      = require './assets/d3.min.js'
    width   = window.innerWidth - 25 || 600
    height  = width * 0.4


We will be running multiple simulations in the browser so will need a way of creating different ones.  Here we define a `display` method for creating a simulation and binding it to a canvas with click events.  When a simulation canvas is clicked, the interval runner starts and calls the `tick` method every 1000 milliseconds.  We will also append the school averages in text form.


    display = (id, params) =>
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


In every tick cycle, we run call simulation's `teach` and `graduate` methods.  We then `render` the simulation to calculate the x & y coordinates for the students, and update the canvas.


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


We then `draw` the students on the canvas.  We will represent our students as coloured circles and schools by student proximity.


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
        
      draw()


In the browser code above, we have relied on a few helper methods.  The first of these represents student ability graphically using colour.  Blue represents high ability and red low ability.  With a little bit of maths, we can convert ability on a range of 0.0 to 1.0 to a hexadecimal representation of Red-Green-Blue colour.


    colour = (d, attribute) ->
      red = Math.floor( (1-d[attribute])*255 ).toString 16
      blue = Math.floor( d[attribute]*255   ).toString 16
      red = "0#{red}" if red.length is 1
      blue = "0#{blue}" if blue.length is 1 
      "##{red}00#{blue}"


To display students and indicate school enrolment by student proximity, we create a Gaussian overlay so all students in the same school clump together.  Each student is assigned a randomised position centred on their school.


    render = (simulation) ->
      simulation.schools.map (school) ->
        school.x = width * (0.3 + 0.5 * school.id)
        school.y = height * 0.6
      simulation.students.map (student) ->
        student.x = gausian(width/1.2) + student.school.x
        student.y = gausian(height/0.5) + student.school.y

    gausian = (range) ->
      Math.random()*range/8 + Math.random()*range/8 + Math.random()*range/8 - range/4


Finally, we trigger the various simulations outlined in the paper once all the scripts have loaded.


    window.onload = () ->
      display 'sanity-check-1', sanity_check_1
      display 'sanity-check-2', sanity_check_2
      display 'shifting-averages', shifting_averages
      display 'relative-1', relative_1
      display 'relative-2', relative_2
      display 'head-start-1', head_start_1
      display 'head-start-2', head_start_2


<script type="text/javascript" src="assets/d3.min.js"></script>
<script type="text/javascript" src="assets/simulation.js"></script> 


## Bibliography