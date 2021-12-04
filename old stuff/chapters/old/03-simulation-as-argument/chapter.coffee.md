---
title: Simulation as Argument
author: Dave Kinkead
email: d.kinkead@uq.edu.au
license: CC-BY-SA
status: outline
---

1. Introduction
2. Thought Experiment
  - def / eg 
  - power comes from accessability & phenomenology of conclusions
  - challenge: How is it possible to learn apparently new things about nature without new empirical data?
3. Simulation extending TE? 
  - What sort of problems does simulation solve?
  - What problems does simulation bring?
4. Simulation (as currently done) lacks accessability & phenomenology
5. Literate Programming 
6. Proposal 




### Outline

1. Hard Problems: Simulation can help solve some hard problems in philosophy.
  - Accessability: Some problem domains are inaccessable to researchers.
    - EG: Legal restrictions
    - EG: Ethical restrictions
    - EG: Financial restrictions
    - EG: Physical restrictions
  - Intractability: Some problems are mathematically intractable.
  - Complexity: Some problem domains are complex systems that exhibit emergent behaviour.

2. New Problems: Simulation brings it's own set of problems
  - Replication: The current structure of scholarly simulation makes replication difficult.
  - Reliability: Concerns about software reliability undermine our confidence in the results.
  - Realism: Even if our software is reliable, it may not adequately simulation the reality of the phenomenon under investigation.

3. Comments & Code: Blending the two to solve old and new problems.
  - Knuth developed literate programming to invert the relationship between comments and code. 
  - Literate Programming advantages ...
  - But Literate Programming failed as a software paradigm because ....
  - I propose Simulation as Argument to extend this idea futher ...

4. Arguments and their structure
  - how arguments work
    - arguments connect known or uncontested truth claims with unknown or contested ones.
    - their purpose is to persuade as either justification or explaination.
    - the criteron of persuasion is truth preservation.
  - arguments as propositional models
  - langauge and reason
  - code as language
  - functions as premises
  - Functions as premises

5. Computation and Proof
  - we can use symbolic logic to prove arguments are deductively valid 
  - we can also use pictures to prove claims
  - coherence vs validity
  - inductive inference and probabilistic proof
  - in silico vs cum silico

6. Demonstration

7. Aesthetics and Pursuasiveness


## Introduction

In the last chapter, we say how simulation has been used in philosophy.....

This approach to philosophical investigation as a number of methodological virtues....

  1. Accessability - Many problems of interest to philosophers exist in domains that are difficult to access empricially.

  2. Complexty - Complex system have emergent behaviour

    - non agent based models "filter out all consequences of heterogeneity" @epstein1996 p2
    - game theorists have been preoccupied with static equilibrium @epstein1996 p2
    - they attempt to 'grow' social structures _in silico_ in order to discover "fundamental local or micro mechanisms that are sufficient to _gerneate_ the macroscopic social structures and collective behaviours of interest". @epstein1996 p4
    - "fundamental social structures and group behaviours emerege from the interaction of individual agents operating on aritifical environments under rules that place onl bounded demands on each agent's information and computational capacity." p6

  3. Intractability - Some problems cannot be solved analytically making computational approaches essential

    - "Computer simulations extend the class of tractable mathematics and thereby broaden the range of modelling tools that we can use." @frigg2009 p594

    - issues
    - approximation
    - trunctation
    - interpretation

Simulation however, also comes with its own unique set of limitations...

  1. reality
  2. replication
  3. reliability


## Simulation as Argument 

Normally when using simulation within an argument, we use simulations to establish the truth or plausibility of particular premse claims.  Do X?  Does Y?

This usage sees simulation used in an evidentiary role.  A data point. Whilst important to the argument, simulation remains exogenous or external to it. 



What is an argument? - propositions supporting other propositions...

It is in how these premises support their conclusions that an argument is made.

The role of argument form....

In a typical argument, these propositions are collections of words formed into truth bearing statements.

This need not be the case ... programming as propositions

Introduce Literate Programming ...

What this would look like ...

How might we use it ...

  - model theory rather than reality 
  - act as a coherence test for our theories when empiric data is unavailable
  - is a theory's conclusion entailed by its assumptions and premises
  - show what's possible or even plausible plausible

How is this different from normal simulation ....

Both can be used to
  - to predict and test theory
  - to generate data 
  - support an argument

We might call this approach _argumentum cum silico_.

Literate programming - call this _argumentum in silico_ - overcomes many of the limitations of simulation whist maintain their benefits.

## Literate programming

What is it
Why this method
solves the problems of replication

## Coffee script

What is it
Why use it
examples

## Demonstatration


## Persuasion

Graphic

> On pages 112-114 Humphreys seems to suggest that the fact that the outputs of simulations are represented visually bears special weight.

Dynamic

Believable - Counter intuitive results are more likely to be accepted

Clarity - Simulation forces us to be explicit when we might otherwise hand wave.




## A New Model of Segregation

Rather than labour the point futher, I think a demonstration of _simulation as argument_ would be germane.  In what follows, I'll reproduce Thomas Schelling's seminal work _Models of Segregation_ in order to highlight the advantages of this method for philosophy.

 --->  Racial segregation was a pertinent topic in 1969 and remains one today.....

Some types of segregation might be justified as "socially efficient satisfaction of individual preferences" (p488) but Schelling doubted racial segregation was one such type because urban demographics in the US were so extremely U-shaped -- neighbourhoods were nearly all white or nearly all black with very few mixed below 75% of a single race.

This is a problem with an abundance of empiric data at the system level but a complete absence at the individual level.  Detail demographic data existed showing the exact racial make up of urban neighbourhoods but there was little data on individual preferences concerning their neighbourhood demographics -- did whites and blacks prefer exclusively white and black neighbourhoods or were they satisfied to live in mixed ones?  Even if individual racial preference data was obtainable through a mechanism like surveys, there are strong grounds to doubt its accuracy owing the socially delicate nature of the question -- few like to admit to being being racist.

By formalising the problem however, some constraints become apparent -- if both blacks and whites want to be in the majority within their neighbourhood, then these preferences are not mutually compatible within integrated communities.  The minimum  threshold for 'racial likeness' for different races must sum to less that 100%.  If it exceeds 100%, then either individuals will be forced to move or the racial composition of the neighbourhood will not be a "socially efficient satisfaction". 

In his original 1969 work, Schelling used naughts and crosses in a one-dimensional plane to show how a random distribution of races (or any categorically distinct difference) will not be socially efficient if individuals have a greater than 50% preferences for living amongst those similar to themselves. Schelling's key insight was that 

> the interplay of individual choices, where unorganised segregation is concerned, is a complex system with collective results that bear no close relation to individual intent. (p488)

This conclusion is profound yet counter-inuitive -- even if everyone is perfectly content with living in a mixed-race neighbourhood, complete racial stratification remains the stable equilibrium whenever individuals have a preference being more than the slightest majority.

Yet as important as Schelling's insight into complex and emergent systems was, his method of manually shifting naughts and crosses on paper had obvious limitations.  How does the conception of neighbourhood depth relate to the likelihood of stratification? What happens when more than two races are present?  As Schelling himself acknowledges:

> All of this is too abstract to be a motion picture of whites and blacks or boys and girls choosing houses on a road or even stools along a counter; but it is suggestive of some of the dynamics that could be present in individually motivated segregation. (p491)

 --->  His response was to model the problem at a system level.  By making some simplifying assumptions, Schelling constructed intersecting parabolas representing frequency distributions of whites and blacks shaped according to their stipulated racial-mix preference. .....  

 ---> the problem of system level analysis....

Computer simulation can answer these questions.  Simulation as argument makes the results more pursuasive.

Rather than model a system as Schelling did, we are going to model agents acting independently and observe any emergent system level behaviours. Like Schelling's naughts and crosses model, our's will consist soley of agents who have: 

  - a conception of neighbourhood based on geographic proximity
  - a degree of satisfaction based tolerance ratios being satisfied
  - an ability to move if unhappy

The first step is to formalise our agents.  To instantiate an agent, we will give it a set of parameters specifying its race, how deep it perceives it neighbourhood to be, and minimum tolerance for racial similarity within their neighbourhood.  We'll also randomly assign them to somewhere in a two-dimensional space.


    class Agent
      constructor: (@race, @tolerance, @depth) ->
        @x = Math.floor Math.random() * space.width
        @y = Math.floor Math.random() * space.height        


Agents are happy if the composition of their neighbourhood is within their tolerance. A low tolerance for diversity should should correlate with greater levels of unhappiness, all other things being equal.


      isHappy: () ->


<div id="space"></div>

## The Model

Rather than model a system as Schelling did, we are going to model agents acting independently and observe any emergent system level behaviours.  This means we are going to need agents with:

- satisfaction based on how far one's neighbourhood extends
- happiness depends on tolerance ratios being satisfied
- agents move if unhappy

We start with our agents.  Our agents exist in a 2D space, are of a certain race, and hold a xenophobic disposition.  For now, we will randomly assign them their race and geographic location. Their xenophobia will also be a function of their race.

In this case, we will create 3 races of agents and give them a xenophobia level of just 40% (ie agent will only be happy if more than 40% of thier neighbours are the same).


    class Agent
      constructor: (@space) ->
        [@race, @xenophobia] = switch Math.floor Math.random() * 3
                  when 0 then ["blue", 0.4]
                  when 1 then ["red", 0.4]
                  when 2 then ["green", 0.4]
        @x = Math.floor Math.random() * @space.width
        @y = Math.floor Math.random() * @space.height
        @step   = 50 
        @depth = 100


The happiness of agents is determined by their neighbourhood composition.  If the homogeniality is greater than their xenophobia, then they are happy.  High levels of xenophobia should correlate with greater levels of unhappiness, all other things being equal.


      isHappy: () ->
        homogeneity = @space.homogeneity(this)
        if homogeneity >= @xenophobia then true else false


Next, we difine a 2D space representing the problem domain. Our space contains a geographical distribution of agents stored in a list.  We also give a space a width and height to manage the relation between the simulation and the client.


    class Space
      constructor: (@height, @width) ->
        @agents = []


In spacial arranements, everybody is next to somebody - their neighbour.  The relative composition of that neighbourhood - 10% homogeniality or 50% homogeniality - is determined by the race of ones neighbours and how deep the conception of neighbourhood extends.


    Space::neighbourhood = (x, y) ->
      neighbours = []
      for other in @agents
        if x - other.depth < other.x < x + other.depth and y - other.depth < other.y < y + other.depth
          neighbours.push other
      neighbours


The homogeniality of a neighbourhood relative to an agent is therefore calculated as the proportion of like neighbours to total neighbours.


    Space::homogeneity = (agent) ->
      same = 0
      others = 0
      neighbours = this.neighbourhood agent.x, agent.y
      for neighbour in neighbours
        same += 1 if agent.race is neighbour.race
        others += 1 if agent.race isnt neighbour.race
      same / (same + others)


Now that we have defined our model, we need some functions to initiate and control behaviour.  We will instantiate the simulation by invoking the `agents` function.  This will create a space and populate it with agents.


    agents = (height, width) ->
      space = new Space(height, width)
      for n in [1..2000]
        space.agents.push new Agent space 
      space.agents


We then need some logic for moving our agents around the space.  Movement could be intentionally directed or (as in this case), agents move to a random spot near by, only moving if they are unhappy with their neighbourhood.


    move = (agent) ->
      unless agent.isHappy()
        xRand = Math.random() * agent.step
        yRand = Math.random() * agent.step
        agent.x += xRand - agent.step / 2
        agent.x = xRand / 2 if agent.x < 0
        agent.x = agent.space.width - xRand /2 if agent.x > agent.space.width
        agent.y += yRand - agent.step / 2
        agent.y = yRand /2 if agent.y < 0
        agent.y = agent.space.height - yRand / 2 if agent.y > agent.space.height


Finally, we declare our public API so that other modules can access it.


    simulation = {agents: agents, move: move}


## Browser Code

This is the browser file where we pull together different parts of the simulation and wrap it up in the browser.  We'll start out by importing our libraries and defining any global variables we might need.


    d3      = require 'd3'
    running = false
    height  = window.innerHeight  - 40 || 600
    width   = window.innerWidth - 40 || 600


Next, we'll grab create our svg canvas, apply some event listeners and add it to the DOM.


    canvas = d3.select("#space")
                .append("svg:svg")
                .attr("height", height)
                .attr("width", width)
                .on "click", () ->
                  running = if running is true then false else true
                

Now we need to createsvg circles to represent our agents and bind them to the actual agents from the simulation.  The `d` in the functions here is the D3js accessor to the agent data.

  
    populate = () ->
      canvas.selectAll "circle"
        .data simulation.agents(height, width)
        .enter().append "circle"
        .style "fill", (d) -> d.race 
        .style "opacity", 0.5
        .attr "r", 8
        .attr "cx", (d) -> d.x
        .attr "cy", (d) -> d.y

    populate()


We then write a loop where each svg circle triggers the move function for its bound agent.  


    move = () ->
      circles = canvas.selectAll "circle"
      circles.each (d) ->
        d = simulation.move d
      .transition()
      .duration 50
      .attr "cx", (d) -> d.x
      .attr "cy", (d) -> d.y

    run = () ->
      move() unless running is false


Finally, we run the loop continuous with a half second pause.


    setInterval run, 50
