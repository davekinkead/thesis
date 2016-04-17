---
title: Games of Throwns
author: Dave Kinkead
---

  - I argue that Leviathan is either valid but with implausible premises or has plausible premises but is invalid.

  - Leviathan is awesome!
  - many theorists have attempted to use game theory to model hobbes
  - it hasn't been fully successful - why?
  - quick survey on the lit - who did what.
  - summarise hobbes argument & build model
  - build games from lit
  - show they don't work
  - show how they can work

  1. naive PD
  2. naive AG

<div id="space" class="simulation fullscreen"></div>


## Modelling Hobbes' Leviathan

--> Move this below


The most common approach to modelling Leviathan is to use a Prisoner's Dilemma (cite who).

Why the PD?

In a pure strategy Prisoner's Dilemma, players have the choice of cooperating (C) or defecting (D).  Cooperation can describe a range of behaviours such as refraining from combat or conflict, the sharing of resources, or simply non-interference with others.  Defection on the other hand can represent (cite Hobbes) .....

In a Prisoner's Dilemma, the optimal strategy for each player is contingent on the other player's action (this is what makes it a _game_).  The typical represention of the payoff matrix using ordinal preferences is like so:

    #  2,2 | 4,1
    # -----------
    #  1,4 | 3,3

The socially optimal outcome is for both players to cooperate, yet no rational player would do so.  If the other player cooperates, the best strategy is to defect (1 > 2), and if the other player defects, then defection remains the best strategy (3 > 4).  As a symetric game, the same holds true for the other player.  Mutual defection is the only Nash Equilibrium point.

One interpretation of Hobbes is to model the state of nature as a single round Prisoner's Dilemma.  If the game is played only once, then all rational players will defect (see XXX for a formal proof).  But what of irrational players who cooperate in a altruistic lapse of judgement?  This possibility is inconsequentual to Hobbes' argument.  For the State of Nature to be a _war of all against all_, only the expectation of conflict is necessary for other rational agents to strike first.  When confronted with altruists in a pure strategy Prisoner's Dilemma, the rational player defects and peace is impossible.

The single round interpretation of the State of Nature is extremely implausible however.  It requires that players only interact once .... yes death is a possibility but....  Hobbes also says that ....

A far more plausible model is an iterated PD.  List problems and then over come them....

What about evolutionary models...

We can now test the validity of Hobbes' argument as pure strategy evolutionary Prisoner's Dilemma.  We will populate a simulation with 1000 cooperators and 1000 defectors and observe the local interaction.  

Explain evolutoinary stability....

For Hobbe's argument as a PSPD to be invalid, we must observe an outbreak of cooperation in the state of nature.....

If our rational defectors dominate the simulation, Hobbes' argument is plausible [^note-on-proof].  Run enough times, we can even assign a frequence based probability to the likelihood of _war of all againt all_ obtaining.  Given Hobbes' definition or war, even an oscilating cycle of cooperators out populating defectors who then outpopulate cooperators is sufficient to demonstrate plausibility.

[^note-on-proof]: I say plausible here because a stochastic simulation with infinite possible runs obviously cannot definiately prove the impossibility of cooperation.

<figure>
  <div id="pure-prisoners-dilemma" class="simulation fullscreen"></div>
  <figcaption>Pure Strategy Prisoner's Dilemma. Click to start/stop.</figcaption>
</figure>

The outcome of a PSPD overwhelming supports Hobbes' argument that the State of Nature is a war of all against all.  From an initial state of equal strategies, defectors (in red) quickly out populates cooperators (blue).  Thanks to the dynamics of local interaction, pockets of mutual cooperation remain but as neighbourhoods slowly change, these pockets also adjust their strategy to defection.  Given these assumptions, Leviathan as a PSPD represents a valid argument.

--> results from 1000 simulations

How plausible are these premises however....

What about mixed strategies...

We now introduce six additional mixed strategies based on the possible combinations of initial move, response to cooperation, and response to defection.  In addition to always cooperating and always defecting, players can also adopt a _tit for tat_ strategy, responding in kind based on the last interact, or a _perverse_ strategy, taking the opposite action to the other players previous round moves.  These four strategies can also be distinguished by their opening move by being _friendly_ (cooperating) or _suspicious_ (defecting).  (See @axelrod pxxx for a more detailed overview of these possibilities)

In the next simulation, we will observe a Mixed Strategy Prisoner's Dilemma using the same assumptions as before but with equal numbers of the eight deterministic strategies outlined above.  As before, after interacting with others in their neighbourhood for a number of turns, players will update their strategy to that of the best performing in the neighbourhood.

<figure>
  <div id="mixed-prisoners-dilemma" class="simulation fullscreen"></div>
  <figcaption>Mixed Strategy Prisoner's Dilemma. Click to start/stop.</figcaption>
</figure>

The introduction of mixed strategies into the Prisoner's Dilemma results in a vastly different outcome for the game.  In the initial generations, friendly and cooperative strategies (blues) are rapidly displaced by suspicious, perverse, and non-cooperative ones (yellows and reds).  After a handful of generations however, clusters of friendly tit for tat emerge. Gradually, these clusters begin displacing more and more of their surroundings until they eventually displace all non-cooperative strategies.  The State of Nature as a Mixed Strategy Prisoner's Dilemma is _not_ a war of against all.

The dymaics of the MSPD are are subtle and counter-intuative. 

## Introduction

Leviathan represents...

Hobbes has been described as the proto-game theorist (by who?).  And it's easy to see why.  (explain).  Many theorists have attempted to model Hobbes' account in a game theoretical mannor.

Summary of who has done what....

Current approaches have been limited by their predominately analytic approach.  How do they do it....  Exceptions...

To comprehensively justify Hobbe's Leviathan with game theory, one must fulfil three requirements:

  1. Accurately translate the premises of Hobbes' argument into a formalisation useful for game theoretic analysis.

  2. Show that those premises are at least a plausible description of reality.

  3. Demonstrate that the formalised premises entail Hobbes' conclusion, namely that the inevitable result of the state of nature is a _warre of all against all_.

Extant literature is characterised by disagreement.  Why

  1. interpretation of the text
  2. methodological constraints

This chapter attempts to investigate whether Hobbes' conclusion is entailed under a charitable reading and if not, what in his theory would need to change.

In part....

I argue that Hobbes' argument in Leviathan is either valid but based on implausible premises, or based on plausible premises but invalid.


## Lit survey


  - Leviathan is awesome!
  - many theorists have attempted to use game theory to model hobbes
  - quick survey on the lit - who did what.
  - it hasn't been fully successful - why?
  - what will I do that is different.
    - use an agent based evolutionary causal model
    - why is this a better idea.

> First, the ‘evolution’ treated by evolutionary game theory need not be biological evolution. ‘Evolution’ may, in this context, often be understood as cultural evolution, where this refers to changes in beliefs and norms over time. Second, the rationality assumptions underlying evolutionary game theory are, in many cases, more appropriate for the modelling of social systems than those assumptions underlying the traditional theory of games. Third, evolutionary game theory, as an explicitly dynamic theory, provides an important element missing from the traditional theory.  SEP    


## Leviathan

> Outline Hobbes argument.  Run though each premise and formalise it.  Justify the premise.  Bring in support from secondary sources.

Leviathan [^source] is a ....  What does is cover....  In it's simplest form however, it is an argument for ....  It is a justification for why rational men should subjecate themselves completely to an absolute soveriegn - the Leviathan.

[^source]: Hobbes makes similar arguments in .... I will be using the english version of Leviathan...why...

I take the argument to be this:

  1. Peace is possible with either no government, limited government, or absolute government
  2. Peace isn't possible without government
  3. Limited government is illusionary
  4. Peace is only possible with an absolute soveriegn

  1. Peace is only possible with an absolute soveriegn
  2. It is rational to desire peace
  3. Therefore it is rational to submit to an absolute soveriegn

Whist Hobbes offers an account of many things (for example....) it is premise 1 where most work is done and where most disagreement exists...

How does Hobbes get there and how can we formalise this?

We being with man.  According to Hobbes, man is the atom of society...prior to...hyper individual, rational egoist...(cite Hobbes)


    class Man
      constructor: (@space, @strategy) ->
        # move step elsewhere
        @step = @space.width * @space.height * 0.00005


Importantly, men are equal.

Men have desires. 

Combined with equality, this leads to overlapping desires.


    Man::means = 1


Some men seek glory


    Man::glory = 1


Man exists in the State of Nature - a place where man's life is infamously _solitary, poor, nasty, brutish, and short_.  This condition of _continual fear and danger of violent death_ is however, Hobbes' conclusion.  To model it as such would be question begging so our model of nature will consist simply of men.

Mans live in a space which we define as a 2D space representing the problem domain.  When we crate a space, we populate it with agents, and give it a neighbourhood depth value.


    class Nature
      constructor: (@height, @width, agent_profile) ->
        @populate agent_profile


N Comp -> Conflict (theft)


--> model interaction here?

N Comp -> Pursuit of Power (aggression)

    Man::power = () ->
      @means + @glory

Conflict -> Pursuit of Power (protection)
Conflict -> Pursuit of Power (aggression)
Conflict -> Distrust
Distrust -> Conflict (stike first defense)
Distrust -> Pursuit of Power (protection)
Pursuit of Power -> P Comp
P Comp -> Conflict
Glory -> P Comp



    #   power: () ->
    #     @glory + @means



    # class Nature
    #   constructor: (@men)


The genisis of the war of all against all begins, according to Hobbes, with competition for resources. (source).  

Men desire self-preservation above all else.  They compete for scares resources. 

This scarcity can't be soley for the goods necessary for survival however.  If it were an essential fact of nature that there were insufficient goods for survival, then survival of all would be impossible even under a sovereign.  Of course, scarcity could be a contingent fact of nature - in a war of all against all, there is little time to sow crops and tend to livestock, so there is too little for all.  The security of the Leviathan could also provide the conditions necessary for increased productivity and surplus.  Yet to simply assert that there are insufficient resources in the state of nature and sufficient in civil society would again be question begging.

--> three types of goods?

Luckily for Hobbes, scarcity of the resources necessary for survival aren't essential for his argument.  Even when mans current needs are satisfied, he must still compete (source).  Because no individual can secure their own security, they must strive for more power in order to secure their future needs

!!!! It is war that leads to shortages, not the other way around.  The initial competition 

Introduce glory and the vanglorious man.

This brings us to two types of men - the moderate and the dominator.  The moderate .... The dominator ....


---

    # class Man
    #   constructor: (@strategy) ->
    #     @glory = 1
    #     @means = 1

    #   power: () ->
    #     @glory + @means

Conflict 

  - conflict outcome is an uncertain (stochastic) function of power differential
    (a random number compared to the proportion of power)
  - A gains the @means of B and half their glory

Strategies

The Moderate
  - if a.power > b.power (sufficiently) then a will steal from b else farm

The Peacenik

The Foole

The Trigger




 - distrust leads to strike first CH13


In the state of nature

  1. Everyone is motiviated for self-preservation (its a natural right)
  2. Competition for scare resources creates conflict 'a state of diffidence'
  3. The only way to secure these resources is by acquiring more
  4. Some are instrinsically motiviated by power as well
  5. The result is a state of war of all against all.

Only absolute power works



## Leviathan as Game Theory

There is now a large body of work applying game theory to Hobbes [Footnote who].  Yet there is considerable disagreement on how exactly, Leviathan should be modelled.

Review who has applied game theory and how.
  - Guathier
  ....

What is the source of the disagreement?

  1. interpretation of the text
  2. methodological constraints

I will avoid the debate in by modelling multiple games.  I will overcome 2 by using an agent based approach

By far the most common approach is to model Leviathan as a Prisoner's Dilemma.....

Single or iterative?

Evolutionary?





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

## Nature Code

First up, lets define some payoff matrixes for various games.  A Prisoner's Dilemma is a two (or more) player symmertic non-cooperative non-zero sum game that has payoffs for each player based on the behaviour of other players.  We will create a generic function that returns a tuple representing conditional player outcomes, based on a tuple of player actions eg `[1,0]` for player 1 cooperate & player 2 defect.


    prisoners_dilemma = (game) ->
      payoffs = {
        "1,1": [3,3],
        "1,0": [1,4],
        "0,1": [4,1],
        "0,0": [2,2],
      }
      payoffs[game.toString()]


    stag_hunt = (game) ->
      payoffs = {
        "1,1": [3,3],
        "1,0": [0,1],
        "0,1": [1,0],
        "0,0": [1,1],
      }
      payoffs[game.toString()]      


    snow_drift = (game) ->
      payoffs = {
        "1,1": [3,3],
        "1,0": [1,5],
        "0,1": [5,1],
        "0,0": [0,0],
      }
      payoffs[game.toString()]


There are 8 possible deterministic single round strategies a player could employ in any 2 player game.  These are specified by their inital move `i`, responding to cooperation move `c`, and responding to defection move `d`.  We'll also name these and give them pretty colours and store them in a list.


    strategies = {
      "ALLD": { i: 0, c: 0, d: 0, name: "ALLD", color: "crimson" },
      "SPRV": { i: 0, c: 0, d: 1, name: "SPRV", color: "orange" },
      "ST4T": { i: 0, c: 1, d: 0, name: "ST4T", color: "lightblue" },
      "DTAC": { i: 0, c: 1, d: 1, name: "DTAC", color: "indigo" },
      "CTAD": { i: 1, c: 0, d: 0, name: "CTAD", color: "maroon" },
      "FPRV": { i: 1, c: 0, d: 1, name: "FPRV", color: "yellow" },
      "FT4T": { i: 1, c: 1, d: 0, name: "FT4T", color: "blue" },
      "ALLC": { i: 1, c: 1, d: 1, name: "ALLC", color: "navy" }
    }


Next we model our agents.  These agents exist in a space hold a game strategy which is assigned randomly if none is provided.  We also give them a step length in case they will be walking.


    # class Man
    #   constructor: (@space, @strategy) ->
    #     # @strategy = strategies[Math.floor Math.random() * strategies.length] if @strategies?
    #     # @strategy = strategies[strategy]
    #     @step = @space.width * @space.height * 0.00005




We populate our space from an agent profile.  This profile contains an array such as `[0, 250, 250]` which tells our space to create 250 agents each based on the the 2nd and 3rd strategies profiles defined earlier.


    Nature.prototype.populate = (agent_profile) ->
      @agents = (for name, number of agent_profile
          [1..number].map (n) =>
            new Man this, strategies[name])
        .reduce (lhs, rhs) ->
          lhs.concat rhs


Mans can be arranged in a space either deterministically or stochastically, and this arrangement can relate to either where they are (what x,y coordintate an agent occupies) or what they are (what type of agent is in that x,y coordintate).  The cluster method accepts 2 arguments between `0.0` and `1.0` relating the degree of determinism concerning where an agent is located and what the agent is.

The what-algorithm is a modified Fisher-Yates shuffle that is applied stochastically if the what-cluster value is exceded.  The where-algorithm orders agents in straight lines or stochastically if the where-cluster is exceded.


    Nature.prototype.cluster = (where, what) ->
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
      @agents


In spacial arranements, everybody is next to somebody - their neighbour.  A neighbourhood is simply a list of all the agents within an agent's depth perception.  Here we return everyone within a square from an x, y coordinate.


    Nature.prototype.neighbourhood = (agent) ->
      @depth = Math.sqrt(@width * @height / @agents.length) + 1
      neighbours = []
      for other in @agents
        if agent.x - other.space.depth < other.x < agent.x + other.space.depth and agent.y - other.space.depth < other.y < agent.y + other.space.depth
          neighbours.push other
      neighbours


Now we turn to our game.  The browser will trigger the main game interface `contest(agent)` every tick.  Each agent finds their neighbours and plays against them for a number or rounds, with the agent score calcuated from the payoff matrix.  In every contest, we set the agent score and last_game values to 0.  We also throw in some Brownian motion to encourage disequilibrium.


    contest = (agent) ->
      agent.score = 0
      last_game = []
      rounds = 10
      neighbours = agent.space.neighbourhood(agent)
      for neighbour in neighbours
        for round in [0..rounds]
          last_game = [agent.play(neighbour, last_game), neighbour.play(agent, last_game)]
          scores = prisoners_dilemma last_game
          agent.score += scores[0]
      walk agent
      agent
      

We also need to define the interaction between agents.  The initial move is dictated by the agent's strategy while subsequent moves are based on an opponents last move.


    Man.prototype.play =  (neighbour, last_game) ->
      if last_game.length is 0 then @strategy.i else @next_move last_game

    Man.prototype.next_move = (last_game) ->
      if last_game[1] is 1 then @strategy.c else @strategy.d


Mans also need to update their strategy after each round.  We will do this only after all contests in a tick have finished and scores have been calculated.


    update = (agent) ->
      neighbours = agent.space.neighbourhood(agent)
      max = neighbours.reduce (a, b) -> {score: Math.max a.score, b.score}
      winners = (neighbour for neighbour in neighbours when neighbour.score is max.score)
      agent.strategy = winners[Math.floor Math.random() * winners.length].strategy 
      agent


Let's also throw in some logic for walking our agents around the space.  Movement could be intentionally directed or (as in this case), agents move to a random spot near by.


    walk = (agent) ->
      xRand = Math.random() * agent.step
      yRand = Math.random() * agent.step
      agent.x += xRand - agent.step / 2
      agent.x = xRand / 2 if agent.x < 0
      agent.x = agent.space.width - xRand /2 if agent.x > agent.space.width
      agent.y += yRand - agent.step / 2
      agent.y = yRand /2 if agent.y < 0
      agent.y = agent.space.height - yRand / 2 if agent.y > agent.space.height
      agent


Now that we have defined our model, we need some functions to initiate and control behaviour.  We will instantiate the simulation by invoking the `agents` function.  This will create a space and populate it with agents according to our profile.  We will set the cluster values so that agents are perfectly ordered in space but randomly allocated to a space.  Try adjusting the facts to see what happens! 


    agents = (height, width) ->
      space = new Nature(height, width, [250, 250, 250, 250, 250, 250, 250, 250])
      space.cluster 1.0, 1.0


Finally, we declare our public API so that other modules can access it.


    module.exports = {agents: agents, contest: contest, update: update}

# Appendix - Supplimentary Code


    d3 = require 'd3'
    buffer = 50
    height = window.innerHeight - buffer || 600
    width = window.innerWidth - buffer || 600


Let's also throw in some logic for walking our agents around the space.  Movement could be intentionally directed or (as in this case), agents move to a random spot near by.


    # Man::walk = () ->
    #   xRand = Math.random() * @space.step
    #   yRand = Math.random() * @space.step
    #   agent.x += xRand - @space.step / 2
    #   agent.x = xRand / 2 if agent.x < 0
    #   agent.x = @space.width - xRand /2 if agent.x > agent.space.width
    #   agent.y += yRand - agent.step / 2
    #   agent.y = yRand /2 if agent.y < 0
    #   agent.y = agent.space.height - yRand / 2 if agent.y > agent.space.height
    #   agent


Allocate agents in the space


    Nature::position = (where, what) ->
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
      simulation = new Nature height, width, params
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
            d = contest d
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
      display 'space', {'ALLD': 1000, 'ALLC': 1000}
      display 'pure-prisoners-dilemma', {'ALLD': 1000, 'ALLC': 1000}
      display 'mixed-prisoners-dilemma', {'ALLD': 250, 'SPRV': 250, 'ST4T': 250, 'DTAC': 250,'CTAD': 250,'FPRV': 250,'FT4T': 250,'ALLC': 250}

      # [250, 250, 250, 250, 250, 250, 250, 250]