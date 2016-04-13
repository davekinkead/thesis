---
title: Games of Throwns
author: Dave Kinkead
---

  - I argue that Leviathan is either valid but with implausible premises or has plausible premises but is invalid.
  - summarise hobbes argument & build model
  - quick survey on the lit
  - build games from lit
  - show they don't work
  - show how they can work



## Modelling Hobbes' Leviathan

## Introduction

Leviathan

Many theorists have attempted to model Hobbes' account in a game theoretical mannor.

Current approaches have been limited by their analytic approach.

This chapter attempts to investigate whether Hobbes' conclusion is entailed under a charitable reading and if not, what in his theory would need to change.

I argue that Hobbes' argument in Leviathan is either valid but based on implausible premises, or based on plausible premises but invalid.

## Leviathan

Outline Hobbes argument.  Bring in support from secondary sources.  Justify my interpretation.

  1. Peace is only possible with an absolute soveriegn
  2. It is rational to desire peace
  3. Therefore it is rational to submit to an absolute soveriegn


In the state of nature

  1. Everyone is motiviated for self-preservation (its a natural right)
  2. Competition for scare resources creates conflict 'a state of diffidence'
  3. The only way to secure these resources is by acquiring more
  4. Some are instrinsically motiviated by power as well
  5. The result is a state of war of all against all.

Only absolute power works



## Hobbes & Game Theory Literature

Hobbes has been described as the proto-game theorist (by who?).  And it's easy to see why.  (explain).

There is now a large body of work applying game theory to Hobbes [Footnote who].  Yet there is considerable disagreement on how exactly, Leviathan should be modelled.

Review who has applied game theory and how.
  - Guathier
  ....

What is the source of the disagreement?

  1. interpretation of the text
  2. methodological constraints

I will avoid the debate in by modelling multiple games.  I will overcome 2 by using an agent based approach

<div id="space" class="simulation fullscreen"></div>


## Modelling Leviathan

It is clear that there are two distinct arguments:

  - the source of war
  - the solution to war

As @eggers notes, much of the literature focuses on only one, or conflates the two.  Examples.

What we need to do then is model both, and perhaps combine them.

One reason this hasn't been done is that it is very difficult using analytic game theory. It's too complex.

An agent based approach can overcome this.

Build a basic model here.

The Moving parts

Iterative and evolutionary
  - show how Hobbes would except this
  - rebutt @eggers minimax claim

Trigger and Foole

Dominators and Moderates


## States of Nature

The purpose of this is to determine if Hobbes' conclusion is entailed.  Under which interpretations of Hobbes does the state of nature lead to _bellum omnina contra ommes_.

Prisoner's Dilemma
  - people are equal

Assurance Game

Chicken Game



---

## Simulation Code


First up, lets define the entities in our simulation.  We'll start with two - agents and the space they exist in.  Agents belong to a space and have a game strategy.


    class Agent
      constructor: (@space, @strategy) ->


Agents live in a space which we define as a 2D space representing the problem domain.  When we crate a space, we populate it with agents, and give it a neighbourhood depth value.


    class Space
      constructor: (@height, @width, agent_profile) ->
        @populate agent_profile



    Space::populate = (agent_profile) ->
      @agents = []
      for strategy of agent_profile
        for n in [1..agent_profile[strategy]]
          @agents.push new Agent this, strategies[strategy]


Now we turn to our game.  The browser will trigger the main game interface `interact(agent)` every tick.  


In spacial arranements, everybody is next to somebody - their neighbour.  A neighbourhood is simply a list of all the agents within given area of an agent.  Here we return everyone within a square from an x, y coordinate.


    Space::neighbourhood = (x, y) ->
      @depth = Math.sqrt(@width * @height / @agents.length) + 1
      neighbours = []
      for other in @agents
        if x - other.space.depth < other.x < x + other.space.depth and y - other.space.depth < other.y < y + other.space.depth
          neighbours.push other
      neighbours


Each agent finds their neighbours and plays against them for a number or rounds, with the agent score calcuated from the payoff matrix.  In every contest, we set the agent score and last_game values to 0.  We also throw in some Brownian motion to encourage disequilibrium.

  
    Agent::interact = () ->
      @score = 0
      last_game = []
      rounds = 10
      neighbours = @space.neighbourhood(agent.x, agent.y)
      for neighbour in neighbours
        for round in [0..rounds]
          last_game = [@play(neighbour, last_game), neighbour.play(agent, last_game)]
          scores = play @space.game, last_game
          @score += scores[0]
      walk agent
      agent


We need to talk about possible strategies


    strategies = {
      "farm": { i: 1, c: 1, d: 1, name: "Farm", color: "green" },
      "fight": { i: 0, c: 0, d: 0, name: "Fight", color: "red" },
      "ftft": { i: 1, c: 1, d: 0, name: "Tit for Tat", color: "blue" }
    }

---

# Appendix - Supplimentary Code


    d3 = require 'd3'
    buffer = 50
    height = window.innerHeight - buffer || 600
    width = window.innerWidth - buffer || 600


Let's also throw in some logic for walking our agents around the space.  Movement could be intentionally directed or (as in this case), agents move to a random spot near by.


    Agent::walk = () ->
      xRand = Math.random() * @space.step
      yRand = Math.random() * @space.step
      agent.x += xRand - @space.step / 2
      agent.x = xRand / 2 if agent.x < 0
      agent.x = @space.width - xRand /2 if agent.x > agent.space.width
      agent.y += yRand - agent.step / 2
      agent.y = yRand /2 if agent.y < 0
      agent.y = agent.space.height - yRand / 2 if agent.y > agent.space.height
      agent


Allocate agents in the space


    Space::position = (where, what) ->
      #what
      for i in [@agents.length-1..1]
        unless what > Math.random()
          j = Math.floor Math.random() * (i + 1)
          [@agents[i], @agents[j]] = [@agents[j], @agents[i]]

      # where
      block = Math.sqrt @width * @height / @agents.length
      x = y = block / 2
      for agent, position in @agents
        hurdle = Math.random()
        agent.x = if where > hurdle then x else Math.floor Math.random() * @width
        agent.y = if where > hurdle then y else Math.floor Math.random() * @height
        x += block if x < @width
        if x > @width 
          y += block
          x = block / 2
        agent.x + buffer / 4
        agent.y + buffer / 4


Now to display the agents in the browser


    display = (target, params) =>
      runner = false
      simulation = new Space height, width, params
      simulation.position 1.0, 0.0
      canvas = d3.select("##{target}")
        .append("svg:svg")
        .attr("height", height)
        .attr("width", width)
        .on "click", () ->
          if runner
            clearInterval runner
            runner = false
          else 
            runner = setInterval () ->
              tick simulation
            , 1000

      tick = (simulation) ->
        circles = canvas.selectAll "circle"
        circles.each (d) ->
            d = interact d
          .each (d) ->
            d = update d
          .transition()
          .duration 500
          .attr "cx", (d) -> d.x
          .attr "cy", (d) -> d.y
          # .attr "r", (d) -> 
          #   if d.strategy.i is 3 then 10 else Math.max 3, (d.score / 10)
          .attr "title", (d) -> "#{d.strategy.name} - #{d.score}"
          .style "fill", (d) -> d.strategy.color


Set up


      populate = (simulation) ->
        console.log simulation
        canvas.selectAll "circle"
          .data simulation.agents
          .enter().append "circle"
          .style "fill", (d) -> 
            d.strategy.color 
          .style "opacity", 0.5
          .attr "r", 7.5
          .attr "cx", (d) -> d.x
          .attr "cy", (d) -> d.y

      populate simulation

Finally....

    window.onload = () ->
      display 'space', {farm: 1000, fight: 1000}