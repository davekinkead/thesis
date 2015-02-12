---
title: Why borders matter for democracy.
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: draft
license: CC-BY-SA
bibliography: /Users/dave/Dropbox/Research/Reading Notes/.library.bibtex
---

> Many accounts of democracy justify political authority on the grounds that democratic procedures produce desirable results.    Yet the results of any democratic process are also a function of who is included in that process.  Enfranchising one group rather than another, bounding a polity here rather than there, will typically result in different outcomes for identical democratic procedures.

> Democratic theory however, is silent on who ought be included amongst the people.  It must be, because the issue of who the people are is a matter both logically and temporally prior what they decide.  This inability of democratic theory to provide a suitable account of democratic inclusion has become known in the literature as the Boundary Problem.

> Despite a growing awareness of the Boundary Problem within democratic literature, there is a complete absence of work quantifying the extent of the problem and the conditions under which it manifests.  This paper seeks to address this gap in political theory by using formal modelling and computer simulation to examine the relation between democratic outcomes and democratic inclusion.  I show that rather than being a problem for democratic theory in general, the Boundary Problem affects different accounts of democratic authority in different ways.  Futhermore, I show how the requirement for accounts of democratic authority to be compatible with accounts of democratic inclusion renders some justifications of democracy incompatible with each other.

> Simultaneously a philosophical argument and a computer simulation, this paper is written in [literate coffeescript](http://coffeescript.org/), allowing the code described by the text to be executed with the command `coffee -l filename`.  The following links outline [installation](http://coffeescript.org/#installation) and [dependency](https://npmjs.org/doc/install.html) requirements.

---

## Introduction

Many accounts of democracy justify political authority on the grounds that democratic procedures produce desirable results [^qual-one]. Democratic processes it is claimed, track the truth (@condorcet), considers the interests of all citizens (@mill) represent the general will of the people (@rousseau), or maximizes each voter's expected utility (@rae).

[^qual-one]: And many other accounts of democracy justify political authority without any reference to specific outcomes of the democratic process. _Democracy_ in this paper refers exclusively those consequentialist conceptions where outcomes do the normatvie work of legitimating political authority.

The outcome of any democratic process however, is also a function of who is included in that process.  Enfranchising some people rather than others, or drawing the boarders of a state in one location rather than another, will typically result in different outcomes for identical democratic procedures.

To demonstrate just how this occurs, consider the following hypothetical:

> Should Crimea secede from the Ukraine and form a political union with Russia?

Lets grant a few unlikely concessions for the sake of simplicity.  Assume that all parties involved are committed democrats - they all share a strong belief in political equality, popular sovereignty, and the rule of law.  And lets further assume that all parties have agreed to be bound by the outcome of a particular decision mechanism - say a simply majority vote referendum.

In this scenario, who gets to vote determines the outcome of the vote. If only Crimeans are included in the process, then the result will be approximately 60:40 in favour of secession.  If all Ukrainians can vote, then answer will be a clear no.  And if both Russians and Ukrainians are given a say, then the outcome will be an overwhelming yes.

_Who_ often determines _what_.

Who ought be included in a political association - how the demos ought be bounded - is a question of significant normative importance for democratic theory.  In the preceding hypothetical, all parties have a strong _prima facie_ claim for inclusion, as all are significantly impacted by the outcome of the decision, yet which parties are included predetermines the outcome of it.

The problem of inclusion is not limited to issues of secession and union either.  Every politiy with a federal strucutre must somehow decide the appropriate level of government for particular issues.  The populus of a city or county may strongly prefer education to be a matter for local government while surrounding regions prefer it to be state or federal matter.  What the appriopriate unit of decision is is of fundamental importance to democracy.

But democratic theory is silent on who ought be included amongst the people.  It can't, because any democratic process first requires the identification of some determinate group of agents-the demos-in order to act democratically. As @whelan1983 notes, the question of _who the people are_ is logically and temporally prior to the question of _what they decide_.  Attempting to solve the issue of democratic inclusion democratically, is either viciously circular - we need to know the answer before we can know the answer - or results in an infinite regress of who should chose who chose who should participate.

For accounts of democratic authority that derive their legitimacy from the claim that democratic processes bring about superior outcomes or results, the predetermination of democratic outcomes by the issue of inclusion, combined with the inability of democracy to justify who ought be included in the demos, undermines their subsequent claims of legitimacy.  This problem has become known as the _Boundary Problem of Democratic Theory_.

Political theorists have attempted to solve the Boundary Problem in a variety of ways.  Numerous accounts of democratic inclusion - who ought be included in the demos - have been proposed, yet none seem compatible with accounts of democratic authority, at least whenever that authority is justified by a difference making democracy.

 To briefly summarise the literature on why this is the case:  Historical accounts are too arbitrary; those based on nationality, cultural, or linguistic salience lack sufficiently objective criteria.

The all-coerced principle doesn't answer the question-that all those subjected to the coercive force of the state should have some say in its operation is a plausible claim but fails to explain who should be subjected to those coercive forces in the first place.

And the all-affected principle-that anyone affected by an issue should have a say-results in either overlapping issue based jurisdictions incompatible with the idea of territorial sovereignty, or a global government that includes too many.



> SEGWAY - is this true in all cases? in all conditions? Justify simulation...

> When do boarders matter for democracy? ....



## The Model

The model comprises three distinct conceptual entities: a `Political Space` representing the problem domain, `Political Agents` who are distributed across the space, and partitions of the space that group agents into associations or `Polities`.  An agent represents a political actor or citizen.  

Agents in this model are a simple folk who can hold a single discrete belief, which is represented formally as:


    class Agent
      constructor: (@belief) ->


Agents exist within a Space which represents the problem domain.  


    class Space
      constructor: (@agents) ->


Agents are distributed across the space according to a cluster factor which determines the proximity of agents holding similar beliefs to each other.  A factor of `1.0` will result in a highly clustered space with all like agents grouped together while `0.0` will result in a uniform random distribution.


    Space::distribute = (cluster=0.0) ->
        quota, @agents = @agents, []
        while quoa.length > 0
          limit = Math.round( Math.random() * quota.length * (1-clustering) )
          @agents = @agents.concat quota.splice limit, 1


Spaces are partitioned into polities.  A polity represents a unit of political association that holds some degree of sovereignty regarding specific issues, such as a nation-state, province, or local council.  The number of possible partions of a space is the sum of binomial coefficients of agents, _n_, and partitions, _k_.   

∑ (n choose k) increases exponentially with n & k, meaning simulating all possible partitions within a reasonable timeframe is beyond the capacity of desktop computing.  Instead, a stochastic algorithm to divide the space into different polities will be used.  The partitioning algorithm recursively divides the largest polity of the space at a random point until the desired number of polities have been produced - each characterised by a differing number and composition of agents.


    Space::partition = (k) ->
      @polities = [@agents]
      while k > 1
        k = Math.min k, @agents.length
        polity = @polities.shift()
        cut = Math.floor( Math.random() * (polity.length - k) ) + 1
        @polities.push polity[...cut]
        @polities.push polity[cut..]
        @polities.sort (a,b) -> b.length-a.length
        k--
      this


A simple majority vote on a binary issue will be used as the decision procedure as this is the simplest decision mechanism to model.  Agents vote deterministically according to their belief.


    vote = (polity) ->
      votes = {}
      for agent in polity
        if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
      max = Math.max.apply null, (num for belief, num of votes)
      votes.winner = belief for belief, num of votes when num is max
      votes


## Simulating Democracy

The relationship between democratic authority and democratic inclusion will be explored by running a Monte Carlo [^monte] simulation of the model for various agent profiles and clusterings.  At the beginning of each simulation, a space is created with a fixed agent belief profile and clustering factor.  During each run, the space is partitioned into the desired number of polities which then vote and the results are logged.  The partion-vote-measure loop is repeated 1000 times resulting in a probability density function for the the result of each belief-cluster-partion tuple.

[^monte]: Monte Carlo simulations are stochastic computational algorithms that rely on statistical sampling from repeated simulation trials [see @fishman1996].  The results in this paper were aggregated from each simulation run 1000 times.


> Extract generic sim code here


## Epistemic Democracy

One of the most common justifications for democratic authority is epistemic - that democracy, or at least democratic procedures, have instrumental value as truth tracking processes.  Epistemic accounts can be relatively simple like Condorcet's Jury Theorem [see @list2001], or more nuanced such as Epistemic Proceduralism [@estlund2009].  And while they all differ in many ways, they all rely on the claim that democratic procedures, on average, are better at determining an independently correct result than competing procedures.

The criterion that the quality of outcomes are assessed against could be described as epistemic virtue - the difference between the likelihood of a collective process and a random individual selecting the correct answer.  If the likelihood of a majority decision of 1000 votes being correct was 99% and the likelihood of a randomly selected voter being correct was 51%, then the epistemic virtue of the process is the difference between the two - 48% - whereas a coin toss has no epistemic virtue. (see @estlund1997 for a deeper discussion of the mathematics behind Condorcet's Theorem).

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


Running a Monte Carlo simulation 216,000 times for a range of partition numbers, cluster factors and epistemic base rates yields a four dimensional data cube representing probability distributions of the expected correct majority vote for each epistemic-partition-cluster tuple.

![Epistemic virtue by cluster factor](graphs/epi-600-c.png)

In the graph above, the impact of that repartitioning has on the epistemic virtue of a polity is clear.  In this case, given an epistemic base rate of 0.6 (ie the likelihood of a randomly selected voter being correct), the likelihood that the majority vote of polity is the correct choice is near certain when no clustering of agent belief is present, but quickly deteriorates to the epistemic base rate once belief clustering reaches 0.5. This hold for all levels of partition numbers.

![Epistemic virtue by partition number](graphs/epi-600-p.png)

Examining the data from the perspective of partition number, we see little impact of partition number on epistemic virtue for higher cluster factors, and only limited impact for low levels of clustering, concordant with Condorcet's Theorem.

The relationship is repeated for all epistemic base rates between 0.51 and 0.99.

These results indicate that the epistemic virtue of majority voting processes is dependent not only on individual agent belief having a greater than 50% likelihood of being correct, but also how those agent belief are distributed across the political space.  A uniform distribution of agent belief is a critical requirement of epistemic justifications of democracy like Condorcet's Theorem.  Conversly when agent belief is highly clustered, then the epistemic virtue of majority voting, and therefore epistemic justifications of authority base on it, is undermined.

  !! explore  empiric evidence that demonstrates that people do cluster based on belief in real life

From these results, we can make two claims about epsitemic accounts of democracy and accounts of democratic inclusion...

> Claim 1: For an account of democratic inclusion to be compatible with an epistemic account of democratic authority, it must ensure that:
>1. Polities are sufficiently large for the Condorcet effect to emerge, 
>2. Voters in each polities are uniformly distributed by epistemic competence.


##  Preference Justifications

Epistemic justifications of democracy are just one of many types, and one subject to a number of criticisms, not least of which is the fact that not all matters of collective decision have independently correct or preferable outcomes.  Most problems of politics, and almost all contentious issues concern matters of values, to which epistemic justifications offer little support for.

Another way to justify democracy is strategically.  All political authority involves the exercise of power by some people over others.  Singer for example, argues that we all want to be dictators but because we can't all exercise complete power over each other, democracy is the fairest compromise.  

Carol Gould takes a distinct but similar approach-all our lives are affected by our surroundings, and it is only when we have some influence over these affairs that we have self rule.  Self determination and rule being a fundamental human right, democracy is the only way for us to have self government.

While each of these accounts is based on different principles (Singer's on equality, Gould's on liberty), one common characteristic is that both value democracy as a way of realising individual aims within a collective setting.  So one way that strategic accounts can be assessed is by measuring the fidelity of individual belief or preference to the collective outcome.      

  !! Or perhaps describe this in relation to the general will.  Here's Christian List in SEP http://plato.stanford.edu/entries/social-choice/

>  Another consequentialist argument for majority rule is utilitarian rather than epistemic. It does not require the existence of an independent fact or state of the world that the collective decision is supposed to track. Suppose each voter gets some utility from the collective decision, which depends on whether the decision matches his or her vote (preference): specifically, each voter gets a utility of 1 from a match between his or her vote and the collective outcome and a utility of 0 from a mismatch.[3] The Rae-Taylor theorem then states that if each individual has an equal prior probability of preferring each of the two alternatives, majority rule maximizes each individual's expected utility (see, e.g., Mueller 2003).

> Relatedly, majority rule minimizes the number of frustrated voters (defined as voters on the losing side) and maximizes total utility across voters. Brighouse and Fleurbaey (2010) generalize this result. Define voter i's stake in the decision, di, as the utility difference between his or her preferred outcome and his or her dispreferred outcome. The Rae-Taylor theorem rests on an implicit equal-stakes assumption, i.e., di = 1 for every i ∈ N. Brighouse and Fleurbaey show that when stakes are allowed to vary across voters, total utility is maximized not by majority rule, but by a weighted majority rule, where each individual i's voting weight wi is proportional to his or her stake di.
    
    
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

In other words...

- any consequentialist account of democracy must be compatible with accounts of democratic inclusion 
- different accounts of authority require differing, sometimes incompatible accounts of inclusion
- different accounts of authority that have incompatible accounts of inclusion are themselves incompatible


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

---

## Bibliography
