---
title: What does student performance tell us about school effectiveness?
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: journal submission
license: CC BY SA
---

# What does student performance tell us about school effectiveness?

The assessment of school performance has become prevalent in many education systems.  Parents, educators, and bureaucrats all want to know how much teachers, principals, and policy are impacting student ability and learning.  However, because we can’t directly observe the causal impact of policy or pedagogy on students, we must instead rely on indirect measures or proxies such as aggregate student results to measure school performance.

How robust is this inference from student results to school performance though?  A fundamental limitation of traditional empiric approaches for measuring school performance is that we can never know for sure.  We simply hope our proxy measurements are accurate and then extrapolate the cause.

In this paper, I develop a simple model of student and school performance and use computer simulation to explore the relationship between student results and school performance under a variety of parameters.  I simulate a number of scenarios that show when the student to school performance inference is and is not warranted.

Simulation allows us to avoid the limitations of empiric approaches.  By stipulating the cause and observing the effects, we can assess the quality of empiric inference when the causal mechanism isn’t known.  If the inference from student to school performance isn’t warranted when the causal mechanism is known, then it can’t be warranted when it isn’t known.

I demonstrate that whenever two common conditions, school choice and student selectivity, are present, then we cannot reliably infer anything about school performance from student results.

Two schools are populated with a random allocation of students of differing ability. High academic ability students are blue, low ability students are red.  Neither school has any causal impact on a student's academic impact. Instead, at the end of each year, students choose which school they wish to attend based on their perception of school performance. 

We make the following assumptions:

  - School performance is measured by student performance.
  - Students don't know schools have no causal impact.
  - Students want to go to the highest performing school.

And some further assumptions to be trialed:

  - Schools are selective in admission
  - Higher ability students have greater capacity to move school
  - Some schools start with different distributions of student performance.

My hypothesis is that desipite both schools having no causal impact on student performance, the combination of a proxy measure, student choice, and selective mechanisms will result in very different relative performance.

In short, we can infer very little about school performance from student results.

## TODO

  - [] Extract browswer only code
  - [] Tidy up simulation code
  - [] Click to start overlay
  - [x] Add student initial distribtion function
  - [x] Fix simulation CSS position
  - [x] Add narrative outline
  - [x] Add dynamic parameters

## PESA Feedback

  - s-e implications of selectivity (martin thrupp)
  - Policy Futures in Education (Mark Tesar)

## PESA2015 Notes

  - Visible Thinking Project
  - Project Zero (Harvard Graduate School of Ed)
  - Swipe right for scholarship!
  - Michael Apple 9 Things for Critial Engagement
  - 