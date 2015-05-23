---
title: The Problem of the People
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: first draft
license: CC-BY-SA
bibliography: /Users/dave/Dropbox/Research/Reading Notes/.library.bibtex
---

# The problem of the people

---

> Many accounts of democracy justify political authority on the grounds that democratic procedures produce desirable results.  But exactly who is included in any democratic process has a fundamental influence on the outcome of that processes.  Enfranchising one group rather than another, bounding a polity here rather than there, will typically result in different outcomes for identical democratic procedures.

> Democratic theory however, is silent on who ought be included amongst the people.  It must be, because the issue of who the people are is logically and temporally   what they decide.  This inability of democratic theory to provide a suitable account of democratic inclusion has become known in the literature as the Boundary Problem.

> Despite a growing awareness of the Boundary Problem, there is a complete absence of work quantifying the extent of the problem and the conditions under which it manifests.  This paper seeks to address the gap in democratic theory by conducting a detailed examination of the issue using formal modelling and computer simulation.  I show that rather than being a issue concerning democratic theory in general, the Boundary Problem affects different accounts of democratic authority in different ways.

> Simultaneously a philosophical argument and a computer simulation, this paper is written in [literate coffeescript](http://coffeescript.org/), allowing the code described by the text to be executed with the command `coffee -l filename`.  The following links outline [installation](http://coffeescript.org/#installation) and [dependency](https://npmjs.org/doc/install.html) requirements.

---

## Introduction

Democracy begins with the people.  Democratic theory simply presupposes them.  They come together, unite as one and declare:

> We the people of the United States ...

> Le peuple français proclame ...

> 日本国民は ...

As both a system of government and political theory, democracy starts with a determinant group of people, _the demos_, and proceeds to explain and attempts to justify how they should organise politically. Yet democratic theory is silent on who they people ought be.  It can't because who the people are is a matter logically and temporally prior to that of what they do and how they do it.

But who the people are is of fundamental importance to democracy.  Enfranchising some people rather than others, or drawing the boarders of a state in one location rather than another, will typically result in different outcomes for identical democratic procedures.  To demonstrate just how this occurs, consider the following hypothetical:

> Should Crimea secede from the Ukraine and form a political union with Russia?

Lets grant a few unlikely concessions for the sake of simplicity.  Assume that all parties involved are committed democrats - they all have strong commitments to the ideals of political equality, popular sovereignty, and the rule of law.  And lets further assume that all parties have agreed to be bound by the outcome of a particular decision mechanism - say a simply majority vote referendum.

In this scenario, who gets to vote determines the outcome of the vote. If only Crimeans are included in the process, then the result will be approximately 60:40 in favour of secession.  If all Ukrainians can vote, then answer will be a clear no.  And if both Russians and Ukrainians are given a say, then the outcome will be an overwhelming yes.

_Who_ determines _what_.

Who ought be included in a political associated - how the demos ought be bounded - is a question of significant normative importance.  In the preceding hypothetical, all parties have a _prima facie_ claim for inclusion, and all are impacted by the outcome of the decision, yet which parties are included predetermines the outcome of it.

Democratic theory is silent on who ought be included amongst the people.  It can't, because any democratic process first requires the identification of some determinate group of agents-the demos-in order to act democratically. As @whelan1983 notes, the question of _who the people are_ is logically and temporally prior to the question of _what they decide_.  Attempting to solve the issue of democratic inclusion democratically, is either viciously circular - we need to know the answer before we can know the answer - or results in an infinite regress-who should chose who chose who should participate.

For accounts of democratic authority that derive their legitimacy from the claim that democratic processes bring about superior outcomes or results, the predetermination of democratic outcomes by the issue of inclusion, combined with the inability of democracy to justify who ought be included in the demos, undermines their subsequent claims of legitimacy.  This problem has become known as the _Boundary Problem of Democratic Theory_.

Political theorists have attempted to solve the Boundary Problem in a variety of ways.  Numerous accounts of democratic inclusion - who ought be included in the demos - have been proposed, yet none seem compatible with accounts of democratic authority, at least whenever that authority is justified by a difference making democracy.

> Good place for a lit review...


## One problem or many?

> Show how current lit on the BP is actually discussing 3 related but different problems
> Focus this paper on the predetermination problem

While no account of democratic legitimacy can provide a suitable account of democratic inclusion, the Boundary Problem only manifests when accounts of inclusion and legitimacy conflict.  Purely procedural accounts of democratic legitimacy based on the coercion principle for example, do not necessarily fail afoul of it.  By justifying the legitimacy of democratic authority on the claim that all those subjected to the coercive force of the state ought be entitle to some say in the formulation of its coercive laws, then such an account of legitimacy becomes compatible with any account of inclusion.  Who the people are is completely irrelevant so long as they are given an appropriate chance to formulate the laws that shape their lives [^note-ppc].

[^note-ppc]: Mere compatibility between accounts of inclusions and legitimacy is not however, sufficient to justify any account of democratic legitimacy. There are numerous objection to this particular conception of democracy, not least of which is the fact that it fails to justify the imposition of coercive force in the first place.

The Boundary Problem does however, affect _difference making_ accounts of democracy.  Democratic theory has a rich tradition of justifying the authority of democratic states with reference to their difference making capacities - their epistemic virtue, history of superior policy outcomes, beneficial consequences,or transformative effects upon their constituents.

Despite the diversity of approaches amongst difference making accounts, one element common to them all is that the legitimacy of a democratic regime is derived from its capacity to produce superior outcomes, however defined, compared to alternative forms of government.

## Modelling the Problem

One reason that the specifics of the Boundary Problem have received such little attention is the paucity of empiric evidence to examine.  The Boundary Problem is a _what if_ problem; it's counter-factual nature, that if the accidents of history had consigned the boarders of some state elsewhere, then the people of that state would have decided differently, makes contrastive evaluations difficult.

It is impossible to make contrastive empiric claims about how different boarders would have led to different outcomes when we lack the ability to fix variables, adjust inputs, and experiment to test our theories.  Finding a solution to the Boundary Problem therefore becomes a _drunkard's search_ [@kaplan1964 p11], with solutions sought only where they are easiest to find.

Generative approaches by contrast, allow us to investigating the problem in places most likely to deliver results. Generative approaches such as computer modelling allow us to make our assumptions explicit and manipulate the variables under examination in any manor we choose.

> How much do I need to address this debate?

> I'm not going to address any specific concerns regarding the philosophy of simulations here or what type of knowledge simulations can help us accrue, but I don't seen any concerns with the claim that modelling allows us to formalise our assumptions and demonstrate the coherence or lack there of between them.

Agent based modelling provides a perfect methodology for generating the data necessary to explore the relationship between democratic inclusion and the predetermination problem.  The aim of the model is to simulate how differing partitions of a determinate political space characterised by agents of various beliefs and their distributions over the space change the outcomes of democratic processes in those partitions.

The model comprises three distinct conceptual entities: a `Political Space` representing the problem domain, `Political Agents` who are distributed across the space, and partitions of the space that group agents into associations or `Polities`.  An agent represents a political actor or citizen.  Agents in this model are a simple folk who can hold a single discrete belief, which is represented formally as:

    class Agent
      constructor: (@belief) ->

Agents exist within a Space which represents the problem domain.  The space is created by issuing it with a some agents and a clustering factor which determines the proximity of agents holding similar beliefs to each other.  A factor of `1.0` will result in a highly clustered space with all like agents grouped together while `0.0` will result in a uniform random distribution.

    class Space
      constructor: (agents, clustering=0) ->
        # create a quota of agents based on belief
        quota = []
        @agents = []
        for belief, believers of agents
          for n in [1..believers]
            quota.push new Agent(belief)
        # cluster agents tightly or randomly
        while quota.length > 0
          limit = Math.round( Math.random() * quota.length * (1-clustering) )
          @agents = @agents.concat quota.splice limit, 1

Political spaces are partitioned into Polities.  A polity represents a unit of political association that holds some degree of sovereignty regarding specific issues, such as a nation-state, province, or local council.  How we partition a space - how we answer the question of democratic inclusion - forms the crux of the Boundary Problem.

For a Space populated with any significant number of agents, there is a massive range of possible unique partitions determined by the exponential function of the number of _n_ agents and _k_ partitions. Specifically, it is the sum of binomial coefficients,  ∑ (n choose k).  Because ∑ (n choose k) can become so massive, running the simulation over all possible partitions within a reasonable timeframe is beyond the capacity of desktop computing.

Instead, a stochastic algorithm to divide the space into different Polities will be used, with a Monte Carlo simulation then generating a sufficient number of partition combinations.  The partitioning algorithm recursively divides the largest polity of the Space at a random point until the desired number of polities have been produced with each characterised by a differing number and composition of agents.

    Space.prototype.partition = (n) ->
      @polities = [@agents]
      while n > 1
        n = Math.min n, @agents.length
        polity = @polities.shift()
        cut = Math.floor( Math.random() * (polity.length-n) ) + 1
        @polities.push polity[...cut]
        @polities.push polity[cut..]
        @polities.sort (a,b) -> b.length-a.length
        n--
      this


## Simulating Democracy

With the model of Agents, Spaces, and Polities defined, various conceptions of democracy can be simulated.  The simulation process involves the instantiation of the model with its assigned initial conditions of Agents, along with their specified beliefs and distribution across the Space, followed by repeated Monte Carlo simulation where each run re-partitions the Space according to the stochastic partition algorithm [^monte].  In each trial of the simulation, the Agents in each Polity will vote on a single binary issue, with a simple majority determining the winning outcome.

[^monte]: Monte Carlo simulations are stochastic computational algorithms that rely on statistical sampling from repeated simulation trials [see @fishman1996].  The results in this paper were aggregated from each simulation run 1000 times.

Majority voting on a binary issue will be used as the decision procedure as it is the simplest decision mechanism to model.  A number of implicit assumptions are built into the voting algorithm, such as the requirement that all agents vote according to their beliefs and don't engage in any strategic voting.

    vote = (polity) ->
      votes = {}
      for agent in polity
        if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
      max = Math.max.apply null, (num for belief, num of votes)
      votes.winner = belief for belief, num of votes when num is max
      votes

Each simulation consists of 1000 trials meaning that the voting outcomes of 1000 different partition combinations are measured from the fixed initially conditions.  The voting outcomes form a probability density function that shows the frequency that different partitions of a space with fixed characteristics generate different voting results.  With these results in hand, an assessment of how different ways of partitioning a space of specified initial conditions influences outcomes of democratic processes can be made.

Democratic processes can be simulated in a variety of ways.  This analysis concentrates on instrumentalist accounts of democratic authority - those who justify democracy on the grounds that it creates good outcomes.  These accounts can be largely categorised as either epistemic - democracy tends to find the right answers; consequentialist - democracy brings about good outcomes; or transformative - democracy improves the character of the participants.

## Epistemic Democracy

One of the most common justifications for democratic authority is epistemic - that democracy, or at least democratic procedures, have instrumental value as truth tracking processes.  Epistemic accounts can be relatively simple like Condorcet's Jury Theorem [see @list2001], or more nuanced such as Epistemic Proceduralism [@estlund2009].  And while they all differ in many ways, they all rely on the claim that democratic procedures, on average, are better at determining an independently correct result than competing procedures.

The notion of epistemic virtue can therefore be defined as the degree to which a decision making process increases the likelihood of it selecting an independently correct answer relative to a random choice.  According to this accounts, a coin toss has no epistemic virtue, while the majority choice of a large group of voters each with a greater than 50% chance of being correct has a high degree of epistemic virtue (see @estlund1997 for a deeper discussion of the mathematics behind Condorcet's Theorem).

In the simulation, epistemic virtue can be measured as the frequency based probability that a polity will vote correctly given some specified initial conditions in the space.  During each trial, the number of polities that voted correctly will be measured and the impact of differing partitions assessed.

    epistemicVirtue = (space) ->
      correctVotes = 0
      for polity in space.polities
        election = vote polity
        correctVotes += 1 if election.winner is 'right'
      correctVotes / space.polities.length

    simulateEpistemicDemocracy = (agents, partitions, clustering, trials) ->
      space = new Space( agents, clustering )
      results = { 'a': agents, 'p': partitions, 'c': clustering, 'trials': [] }
      for num in [1..trials]
        results.trials.push epistemicVirtue space.partition partitions
      results



So the analysis of what drives the boundary problems challenges us in a number of ways..

For epistemic accounts of democracy, we need to ensure 

1. Polities are large enough
2. Voters in polities are uniformly distributed 

- clustering impacts epistemic virtue far more than partition number does


###  Preference Justifications

Epistemic justifications of democracy are just one of many types, and one subject to a number of criticisms, not least of which is the fact that not all matters of collective decision have independently correct or preferable outcomes.

Most problems of politics, and almost all contentious issues concern matters of values, to which epistemic justifications offer little support for.

Another way to justify democracy is strategically.  All political authority involves the exercise of power by some people over others.  Singer for example, argues that we all want to be dictators but because we can't all exercise complete power over each other, democracy is the fairest compromise.  

Carol Gould takes a distinct but similar approach-all our lives are affected by our surroundings, and it is only when we have some influence over these affairs that we have self rule.  Self determination and rule being a fundamental human right, democracy is the only way for us to have self government.

While each of these accounts is based on different principles (Singer's on equality, Gould's on liberty), one common characteristic is that both value democracy as a way of realising individual aims within a collective setting.  So one way that strategic accounts can be assessed is by measuring the fidelity of individual belief or preference to the collective outcome.      
    
    
    fidelity = (space) ->
      winners = 0
      population = 0
      for polity in space.polities
        election = vote polity
        for key, val of election
          winners += val if key is election.winner
          population += val unless key is 'winner'
      winners / population 
        
    simulatePreferenceDemocracy = (agents, partitions, clustering, trials) ->
      space = new Space( agents, clustering )
      results = { 'a': agents, 'p': partitions, 'c': clustering, 'trials': [] }
      for num in [1..trials]
        results.trials.push fidelity space.partition partitions       
      results


## Epilogue

A number of helper functions are necessary for the simulation to work.

    sum      = (arr) -> arr.reduce (a,b) -> a + b
    ave      = (arr) -> sum(arr) / arr.length
    variance = (arr) ->
      mean = ave(arr)
      (arr.reduce ( (a,b) -> a + (mean-b)*(mean-b)), 0) / arr.length
    stdev    = (arr) -> Math.sqrt( variance arr)

    runEpistemicSimulation = () ->
      results = []
      for e in [0..5]
        e = 500 + e*50
        e = 510 if e is 500
        for p in [0..5]
          p = (p+1)*5
          for c in [0..5]
            c = c/5
            es = simulateEpistemicDemocracy {'right': e, 'wrong': 1000-e}, p, c, 1000
            results.push e: e, p: p, c: c, value: ave(es.trials).toFixed(15)
            process.stdout.write "Running epistemic simulation #{results.length * 1000} of #{216000}\r"
      console.log results
      
      
    runPreferenceSimulation = () ->
      results = []
      for f in [0..5]
        f = 500 + f*100
        for p in [0..5]
          p = (p+1)*5
          for c in [0..5]
            c = c/5
            ps = simulatePreferenceDemocracy {'chocolate': f, 'vanilla': 1000-f}, p, c, 1000
            results.push e: f, p: p, c: c, value: ave(ps.trials).toFixed(15)
            process.stdout.write "Running preference simulation #{results.length * 1000} of #{216000}\r"

      console.log results
      

Finally, we capture terminal inputs to start up the simulation.  To run the simulation of epistemic democracy, use the command `coffee paper.coffee.md epsitemic`.  This will execute the code embedded described in the paper above.

    process.argv.forEach (val, index, array) ->
      runEpistemicSimulation() if val is 'epistemic'
      runPreferenceSimulation() if val is 'preference'

---

## Bibliography
