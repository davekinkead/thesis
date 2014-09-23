---
title: Authority, Inclusion, & Incompatibility
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: draft
license: CC-BY-SA
bibliography: /Users/dave/Dropbox/Research/Reading Notes/.library.bibtex
---

# Authority, Inclusion, & Incompatibility

Explaination - This is a simulation of democracy writen in Literate Coffeescript.


## Modelling the entities

Our first task is to model the entities we require in the simulation.  Our model will comprise three distinct conceptual entities: a political `Space` representing the problem domain, political `Agents` who are distributed across the space, and partitions of the space that group agents into political associations or `polities`.  An agent represents a political actor or citizen.  Agents in this model are a simple folk who can hold a single discrete belief, which is represented formally as:


    class Agent
      constructor: (@belief) ->


Agents exist within a Space which represents the problem domain.  The space is created by assigning it an agent profile and a clustering factor which determines the proximity of agents holding similar beliefs to each other.  A factor of `1.0` will result in a highly clustered space with all like agents grouped together while `0.0` will result in a uniform random distribution.


    class Space
      constructor: (agent_profile, clustering=0) ->


To distribute the agents in the desired manner, we create a quota of agents based on the agent profile.


        quota = []
        @agents = []
        for belief, believers of agent_profile
          for n in [1..believers]
            quota.push new Agent(belief)


In real life, voters are distributed 3 dimensionally in space.  For our simulation however, we distribute them over just one dimension in a list according to the cluster factor. This simplifies the computational requirements significantly without losing any fidelity of the partitioning effect.


        while quota.length > 0
          limit = Math.round( Math.random() * quota.length * (1-clustering) )
          @agents = @agents.concat quota.splice limit, 1


While we could have distributed agents over 2 or 3 dimensions, pseudo-random or deterministic distribution over 1 dimension is sufficient to demonstrate the effect of democratic inclusion on democratic outcomes.

Political spaces are partitioned into polities.  A polity represents a unit of political association that holds some degree of sovereignty regarding specific issues, such as a nation-state, province, or local council.  How we partition a space - how we answer the question of democratic inclusion - is of critical importance to consequentialist accounts of democracy.

There are a range of accounts of democratic inclusion - nationalism, cultural or linguistic salience, economic intergration, the all affected principle, and the all coerced principle.  The actual number of possible permutations of a one dimensional space it is the sum of binomial coefficients ∑ (N choose K).

Because the number of permutions is so large, we will use a stochastic algorithm to divide the space into different polities, and run a Monte Carlo simulation to generate a sufficient number of partition combinations for statistical inference.  

The partitioning algorithm will recursively divide the largest polity of the Space at a random point until the desired number of polities have been produced with each characterised by a differing number and composition of agents.

    Space::partition = (n) ->
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

A large number of democratic decision processes exist, and an even large number have been proposed.  Democratic outcomes can be the result of sortition, consensus, deliberation, or voting.  The voting method itself can be plurality, preferential, approval, negative, or cardinal to name a few.

We will use majority voting on a binary issue as the decision procedure woing to its sheer simplicty.  We will also assume that all agents vote deterministically according to their beliefs and don't engage in any strategic voting.  Our voting algorithm simply tallies all the votes in a polity and return the corresponding results.


    vote = (polity) ->
      votes = {}
      for agent in polity
        if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
      max = Math.max.apply null, (num for belief, num of votes)
      votes.winner = belief for belief, num of votes when num is max
      votes


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


Running a Monte Carlo simulation over 200,000 times for a range of partition numbers, cluster factors and epistemic base rates yields a four dimensional data cube representing probability distributions of the expected correct majority vote for each epistemic-partition-cluster tuple.

![Epistemic virtue by cluster factor](graphs/epi-600-c.png)

In the graph above, the impact of that repartitioning has on the epistemic virtue of a polity is clear.  In this case, given an epistemic base rate of 0.6, the likelihood that the majority vote of polity is the correct choice is near certain when no clustering of agent belief is present, but quickly deteriorates to the epistemic base rate once belief clustering reaches 0.5, and this hold for all levels of partition numbers.

![Epistemic virtue by partition number](graphs/epi-600-p.png)

Examining the data from the perspective of partition number, we see lno change of re-partitioning the political space on the majority vote likelihood for high levels of belief clustering, and only limited impact for low levels of clustering, concordant with Condorcet's Theorem.

This indicates that the epistemic virtue of majority voting processes is dependent not only on individual agent belief having greater than 50% likelihood of being correct, but also how those agent belief are distributed across the political space.  A uniform distribution of agent belief is a critical requirement of epistemic justifications of democracy like Condorcet's Theorem.  Conversly when agent belief is highly clustered, and there is ample empiric evidence that demonstrates that people do cluster based on belief in real life, then the epistemic virtue of majority voting, and therefore epistemic justifications of authority base on it, is undermined.

Different distributions of agent belief effect epistemic accounts of democracy differently.  Epistemic accounts of democracy must therefore be supported by an account of democratic inclusion that ensures: 

1. Polities are sufficiently large
2. Voters in polities are uniformly distributed 


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


Running the same Monte Carlo simulation as was performed for the epistemic account of democracy yielded a similar data cube.  Results for the slice at preference ration of 600:400 generated the following results.

![Preference realisation by cluster factor](graphs/pref-600-c.png)

When viewd by cluster factor, the impact of re-partitioning on preference realisation is clear.  When agents are uniformly distributed by preference across the space, the likelihood of an individual's preference being realised by majority vote is identical to that of any two random agents preference being the same ie the preference base rate.

As clustering of agent preferences increases however, the fidelity between individual and majority preference increase significantly. 

![Preference realisation by partion number](graphs/pref-600-p.png)

Partion number plays only a limited role in individual-majority preference fidelity. As the space is partioned into increasing numbers of polities, fidelity increases slight when preference are highly clusted, but the influence of partion number is significantly less than the impact of perference clustering.

The key implication from this analysis is that accounts of democratic authority based on preference realisation and fidelity of individual with group preference, require an account of democratic inclusion that ensures: 

1. Polities are sufficiently small.
2. Voters in polities are highly clustered. 


## Conclusion

While I've only examined two accounts of democratic authority from the wide array of accounts offered by political theorists, the data from the simulation allows us to make the number inferences.

Firstly, on both epistemic and strategic accounts of democracy, the method of inclusion used to bound the demos has a clear impact on the outcome of a democratic process, in this case simple majority voting.  Given a some fixed distribution of agents over a political space, how we partition that space has a causal effect on the the outcomes of a voting process within that space.

Secondly, the impact of the inclusion method is not just different but contradictory for epistemic and perference realisation accounts of democratic authority.  Epistemicly accounts of authority require accounts of inclusion that generate large polities with uniformly distributed agent beliefs.  Preference realisation accounts of authority on the other hand, require accounts of inclusion that generate small polities with highly clustered agent preference.

Thirdly, the conflicting nature of the required accounts of inclusion for epistemic and perference realisation accounts of authority mean that these accounts are incompatible with each other.  One cannot maintain that democratic authority is justified because it has both epistemic virtue and realises individual preferences.  

Many justifications of democracy employ this type of hybrid approach.  Mill for example, justifies democracy on both epistemic and strategic grounds, arguing that democratic authority is legitimate because it generally reaches good decisions and is forced to consider the preferences of all citizens.  The incompatibility of accounts of inclusion that these approaches require however, demonstrates that this type of justification is incoherent.


## Limitations

There are many, yadda yadda yadda....


## Epilogue

A number of helper functions are necessary for the simulation to work, as well as initiate the Monte Carlo runs.

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

