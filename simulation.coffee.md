# What can we lear from school performance

- school effectiveness is being increasingly assessed
- student performance is used as a proxy for school effectiveness
- I postulate that we can infer very little from student results if certain conditions exist

## Model


Students have academic ability measured from `0.0` to `1.0`.  No claim is made to how this relates to IQ, EQ, drive, knowledge etc.  For the purpose of graphical display, schools also have locational coordinates.


    class Student
      constructor: (@ability) ->


Schools are modelled as collections of students upon whom they have some form of academic impact.  In short, schools teach students.  This impact results in a change in the students academic ability.  No claim is made to how this impact comes about such as via teacher performance or curricular changes.  The only stipulation is that the process of schooling is the causal mechanism.  

The causal impact of a school on academic performance ranges from `-1.0`  to `1.0` and assumed to be fixed for the duration of the simulation. 


    class School
      constructor: (@impact) ->


Schools teach students.  This is modelled by applying the schools impact to the students ability in a transformation function.


<!--     School::teach = (student) ->
      student.learn(impact) -->


School effectiveness is measured by testing student ability on standardised testing.  This is treated as a deterministic measure of student ability.

<!-- 
    School::test = (student) ->
      @performance += student.ability -->


Each year, students apply to a school.  There preference will be dictated by relative school performance.


<!--     Student::apply = (schools) ->
      schools.sort () ->
        school.performance -->


Let's also create a function to graphically put the students "in" the school


    Student::move = (school, range) ->
      @x = Math.random() * range*2 + school.x/2 - range
      @y = Math.random() * range*2 + school.y/2 - range
      return this

Finally, a build function to populate the simulation.


    build = (width, height) ->
      a = new School( 0.0 )
      a.x = width * 0.25
      a.y = height * 0.5
      b = new School( 0.0 )
      b.x = width * 0.75
      b.y = height * 0.5
      students = for n in [1..1000]
        school = if n % 2 is 0 then a else b
        student = new Student( Math.random() )
        student.move( school, width * 0.4 )


We start with two schools. In each tick of the simulation, students will apply to a school of their choice and schools will admit their preferred candidates. Schools will teach students resulting in a possible change to the students ability, measured by their performance measured by standardised tests.


    module.exports = simulation ={ build: build } 