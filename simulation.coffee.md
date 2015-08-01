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