---
title: Borders & Legitimacy
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

Many accounts of democracy justify political authority on the grounds that democratic procedures produce desirable results.  For some these accounts, we can judge the quality of a democratic outcome against some independent criteria.  Epistemic accounts like Condorcet's Jury Theorem (@condorcet) or @estlund's Epistemic Proceduralism are like this. Democratic processes track the truth and that gives us reasons to abide by their outcomes.

For others, we can judge the quality of democratic outcomes against some agent relative criteria.  We see this in utilitarian justifications of democracy when majority voting maximizes the expected utility of voter preferences (@rae).  But one need not be a utilitarian to employ such an approach.  @rousseau for example, argued that majority rule realises the general will of the people and this gives us reasons to obey.

And for others still, it is not the content of democratic decision making that matters so much as the effects that decision making has on participants.  This is what @mill had in mind when he argued that democracy transforms the moral character of participants.  Democratic participation makes good citizens.

Call these accounts of democracy _consequentialist_ [^qual-1].

[^qual-1]: By _accounts of democracy_, I mean any normative theory of democracy's value.  Not all accounts of democracy are consequenitalist.  Intrinsic accounts of democracy for example, justify political authority without any reference to specific outcomes of the democratic process, and instead appeal to substantive ideals like equality, justice.  Unless explicitely stated, _Democracy_ in this paper refers exclusively those consequentialist conceptions where outcomes do the normatvie work of legitimating political authority.

The outcome of any democratic procedure is a function, in part, of who gets to participate in that procedure.  Enfranchising some people rather than others, drawing the political line on a map in one location rather than another, will often result in different outcomes that would otherwise have occured, even for identical democratic procedures.  Who is included in a particular democracy affects the particular outcomes of that democracy.

Some democractic processes are deterministic.  Voters vote according to their belief and the voting procedures determines a winning outcome.  In these cases, the outcome of a process is fully a function of who participates in that process.  On one extreme, including or excluding a single voter will change the outcome of a democratic process.  At the other extreme, over 50% of voters would need to be replaced for the outcome to change.

Other democratic processes are indeterministic. This may be because voters themselves don't know how they will vote until the moment they cast their ballot, or because the decision mechanism itself is indeterminate such as in the case of sortition.  Still, outcomes of democratic processes remain a function of who is included in those processes.  Changing participants changes the likelihood of a particular outcome.

_Who_ can determine _what_.

So if accounts of democracy justify political authority based on the outcomes of democratic processes, and the outcomes of those democratic processes are determined by who is included in them, then the question of _who should be included_ becomes a matter of fundamental importance for those claims of democratic authority.

The question of who ought be included in a political association - of how the demos ought be bounded - has become known in the literature as the _Boundary Problem of Democratic Theory_ [^other-names].  The Boundary Problem is a problem because it can't be solved democratically - to determine who should be included democratic we must first identify some prior group to make this decision, and to identify that prior group democratically we must identify a prior prior group, _ad infinitum_.  And neither can the question be satisfactory by reference to history, culture, nationality, geography, justice, coercion or affect [^treatment].

[^other-names]: Discuss who has called it what.

[^treatment]: See @whelan1983 for the seminal analysis of these challenges as well as.....


Addressing why the Boundary Problem is a problem, or how it might be solved is not the focus of this paper. Rather, I wish to explore the relationship between accounts of democratic inclusion and accounts of democratic authority and examine _when_ the Boundary Problem becomes a problem.  I wish to advance three claims that relate to any answer to the question of who the people ought be:

  1.  That accounts of democratic authority must be compatible with accounts of democratic inclusion.

  2.  That different accounts of authority require differing, sometimes incompatible accounts of inclusion.

  3.  That different accounts of authority that have incompatible accounts of inclusion are themselves incompatible.

The first claim advances the existing literature on the Boundary Problem by making the link between inclusion and authority explicit, thereby placing additional demands on accounts of democratic authority that are not currently addressed.  Often, political theorists approach the problem from a cosmopolitan position, arguing that the question is primarily about justice.  Other times, the concern is related to whether or not an answer is internally consistent with democracy, or whether it actually is a paradox of founding.  Only rarely is the link between how the problem of democratic inclusion affects the legitimacy of democratic authority addressed, and often this is only implicit.  I show that the legitimacy of any claim of democratic authority must be compatible with it's associated claim of democratic inclusion.

The second claim offers something new.  Different accounts of democratic authority require differing accounts of inclusion for the two to be compatible, and some of these accounts of inclusion are incompatible with others.  As we shall see, accounts of democratic authority based on independent criteria require incompatible accounts of inclusion to accounts of authority based on agent relative criteria.

Which leads to the third claim.  Whenever the differing accounts of inclusion are incompatible with each other, their subsequent accounts of democratic authority must also be incompatible with each other.  Yet political theorists frequently combine these incompatible accounts of democratic authority.  Mill for example justifies democratic rule on the ground that it is more reliable in determining the right decision (independent criteria), takes into consideration the preferences of all (agent relative criteria), and transforms the moral character of participants (non-content criteria).

It might also be helpful at this stage to clarify what issues I am not addressing and what claims I am not making.  This paper is focused exclusively on the relationship between accounts of democratic inclusion and accounts of democratic authority.  The Boundary Problem raises a number of issues for democratic theory but here I focus exclusively on the Boundary Problem as it relates to claims of democratic legitimacy.  As such, it doesn't seek to explain who should be included in the demos, nor what principles might guide us to an answer.  Instead, this paper is examines _when_ the Boundary Problem challenges the legitimacy of democratic authority by specifying the conditions under which inclusion affects democratic outcomes.


## A Model of Democracy

Why this hasn't occurred until now....

Why simulation is a valuable alternative....

Methodology...why is the code in text....the reader doesn't need to understand the code...its there 

The model comprises three distinct conceptual entities: a `Political Space` representing the problem domain, `Political Agents` who are distributed across the space, and partitions of the space that group agents into associations or `Polities`.  An agent represents a political actor or citizen.  They are simple folk who can hold a single discrete belief, which is represented formally as:


    class Agent
      constructor: (@belief) ->


Agents exist within a Space which represents the problem domain.  A space is constructed by giving it a an agent profile of how many agents hold which belief or prefernce, such as `{ 'chocolate': 400, 'vanilla': 600 }`.


    class Space
      constructor: (agent_profile) ->
        @agents = []
        for belief, believers of agent_profile
          for n in [1..believers]
            @agents.push new Agent(belief)


Agents are distributed in some manor across the space.  This distribution could be uniformly random with any partition having an equal likelihood of having a similar make up as another, or the distribution could be clustered around belief with any partition having a greater chance of a particular a composition the closer it is to a cluster.  Our space will be distributed with a cluster factor which determines the proximity of agents holding similar beliefs to each other.  A factor of `1.0` will result in a highly clustered space with all like agents grouped together while `0.0` will result in a uniform random distribution of agent belief.


    Space::distribute = (cluster=0.0) ->
      quota = @agents
      @agents = []
      while quota.length > 0
        limit = Math.round( Math.random() * quota.length * (1-cluster) )
        @agents = @agents.concat quota.splice limit, 1


Spaces can be partitioned into polities.  A polity represents a unit of political association that holds some degree of sovereignty regarding specific issues, such as a nation-state, province, or local council.  The number of possible partitions of a space is the sum of binomial coefficients of agents, _n_, and partitions, _k_.   

∑ (n choose k) increases exponentially with n & k, meaning simulating all possible partitions within a reasonable time frame is beyond the capacity of desktop computing.  Instead, a stochastic algorithm to divide the space into different polities will be used to generate partition samples.  The partitioning algorithm recursively divides the largest polity of the space at a random point until the desired number of polities have been produced - each characterised by a differing number and composition of agents.


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


The decision procedure used by our model democracy will be a majority vote on a binary issue, as this is the simplest decision mechanism to model.  Agents vote deterministically according to their belief.


    vote = (polity) ->
      votes = {}
      for agent in polity
        if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
      max = Math.max.apply null, (num for belief, num of votes)
      votes.winner = belief for belief, num of votes when num is max
      votes


The relationship between democratic authority and democratic inclusion can now be explored by running Monte Carlo simulations [^monte] of the model for various combinations of agent, clusterings, and partitions.  At the beginning of each simulation, a space is created with a fixed agent belief profile, clustering factor, and number of partitions.  During each run, the space is partitioned into the desired number of polities which then vote, with the results being recorded for statistical analysis.  The partion-vote-measure loop is repeated 1000 times resulting in a probability density function for the the voting result of each belief-cluster-partion tuple.

[^monte]: Monte Carlo simulations are stochastic computational algorithms that rely on statistical sampling from repeated simulation trials [see @fishman1996].  Where else are they used???


## Epistemic Democracy

One common justifications for democratic authority is epistemic - that democracyhas instrumental value as a truth tracking processes.  Epistemic accounts can be relatively simple like Condorcet's Jury Theorem [see @list2001], or more nuanced such as Epistemic Proceduralism [@estlund2009].  

While different, all epistemic accounts rely on the claim that democratic procedures, on average, are better at determining an independently correct result than alternate procedures.  This type of justification obviously requires some way of comparing the epistemic performance of different decision procedures and one intuitive way to do this is to assess them against a base line metric, such as the likelihood that any randomly selected voter holds the correct belief or votes correctly.

We can call the difference between the epistemic performance of a decision procedure and it's base line of comparison _epistemic virtue_.  If the base line likelihood of a randomly selected voter being correct was 51%, and the likelihood of a majority decision of 1000 votes being correct was 99%,  then the epistemic virtue of the process is the difference between the two - 48% - whereas a coin toss has no epistemic virtue. (see @estlund1997 for a deeper discussion of the mathematics behind Condorcet's Theorem).

  !!! I think I need a better language here to describe epistemic performance - reliability maybe?

In our simulation, epistemic virtue can be measured as the frequency based probability that a polity will vote correctly given the initial conditions of the space.  During each trial, the number of polities that voted correctly will be measured and the impact of differing partitions assessed.  The correct answer will be know in advance because we stipulate it when we create agents with either the `right` or `wrong` belief.


    Space::virtue = () ->
      correctVotes = 0
      for polity in @polities
        election = vote polity
        correctVotes += 1 if election.winner is 'right'
      correctVotes / @polities.length


Running a Monte Carlo simulation 216,000 times for a range of partition numbers, cluster factors and epistemic base rates yields a four dimensional data cube representing probability distributions of the expected correct majority vote for each epistemic-partition-cluster tuple.

![Epistemic virtue by cluster factor](graphs/epi-600-c.png)

In the graph above, the impact of repartitioning on the epistemic virtue of a polity is clear.  With an epistemic base rate of 0.6 (ie the likelihood of a randomly selected voter being correct), the likelihood that the majority vote of polity is the correct choice is near certain when no clustering of agent belief is present, but quickly deteriorates to the epistemic base rate once belief clustering reaches 0.5. This hold for all levels of partition numbers.

![Epistemic virtue by partition number](graphs/epi-600-p.png)

Examining the same data from the perspective of partition number, we see little impact of partition number on epistemic virtue for higher cluster factors, and only limited impact for low levels of clustering, concordant with Condorcet's Theorem [^explain].  This relationship holds for all epistemic base rates between 0.51 and 0.99.

[^explain]: Condorcet's Jury Theorem posits that the likelihood of majority rule selecting the correct outcome increases as the number of voters increases (assuming voters have an independent better than even chance of voting correctly).  The 0 cluster line deceases as the same number of voters in the space is partitioned into increasing numbers of polities.


These results indicate that the epistemic virtue of majority voting processes is dependent not only on individual agent belief having a greater than 50% likelihood of being correct, but also how those agent belief are distributed across the political space.  

A uniform distribution of agent belief is a critical requirement of epistemic justifications of democracy like Condorcet's Theorem.  Conversly when agent belief is highly clustered, then the epistemic virtue of majority voting, and therefore epistemic justifications of authority base on it, is undermined.


  !!! Does this make sense?

  !!! I need to explore empiric evidence that demonstrates that people do cluster based on belief in real life


For a polity to have epistemic virtue greater than the epistemic base rate of its individual voters, Condorcet's Jury Theorem requires that a polity contain sufficiently many voters with a greater and even chance of voting correctly [^how-many].  These results demonstrate however, that even when these conditions are true for a political space - the world, a nation, or a region - these conditions are not necessarily true for any partition of that space - into countries, states, or cities.

[^how-many]: find a citation for the 1000 voters @ 0.51

Furthermore, it demonstrates that any epistemic justification of democratic authority requires a corresponding account of democratic inclusion that ensures that:

  1. Polities are sufficiently large for the Condorcet effect to emerge.

  2. Voters in each polity are uniformly distributed by epistemic competence.


Restating this another way.....any account of inclusion for a polity in which an epistemic justification of democracy will be used must show that each polity has a greater than 50% chance of any randomly selected voter voting correctly.

If voters are uniformly distributed by belief in the political space, then almost any account of inclusion will be compatible with an epistemic justification of authority.  If voters are highly clustered however, then any arbitrary partioning of the space will undermine the subsequent claims of epistemic virtue and therefore legitimacy.  In scenarios where clustering of belief is present, then the account of inclusion must explicitly show it satisfies the assumptions of its corresponding account of authority.

  !! Another restatement: Where we draw boundaries is irrelevent for this account of democracy if the distribution of voters by belief is uniform.  Where we draw boundaries is very important however, when the distribution of voters by belief is clustered.


##  Preference Justifications

Epistemic justifications of democracy are just one of many types, and one subject to a number of criticisms, not least of which is the fact that not all matters of collective decision have independently correct or preferable outcomes.  Most problems of politics, and almost all contentious issues concern matters of values, to which epistemic justifications offer little support for.

Another way to justify democracy is strategically.  All political authority involves the exercise of power by some people over others.  Singer for example, argues that we all want to be dictators but because we can't all exercise complete power over each other, democracy is the fairest compromise.  

Carol Gould takes a distinct but similar approach-all our lives are affected by our surroundings, and it is only when we have some influence over these affairs that we have self rule.  Self determination and rule being a fundamental human right, democracy is the only way for us to have self government.

While each of these accounts is based on different principles (Singer's on equality, Gould's on liberty), one common characteristic is that both value democracy as a way of realising individual aims within a collective setting.  So one way that strategic accounts can be assessed is by measuring the fidelity of individual belief or preference to the collective outcome.      

  !! Or perhaps describe this in relation to the general will.  Here's Christian List in SEP http://plato.stanford.edu/entries/social-choice/

>  Another consequentialist argument for majority rule is utilitarian rather than epistemic. It does not require the existence of an independent fact or state of the world that the collective decision is supposed to track. Suppose each voter gets some utility from the collective decision, which depends on whether the decision matches his or her vote (preference): specifically, each voter gets a utility of 1 from a match between his or her vote and the collective outcome and a utility of 0 from a mismatch.[3] The Rae-Taylor theorem then states that if each individual has an equal prior probability of preferring each of the two alternatives, majority rule maximizes each individual's expected utility (see, e.g., Mueller 2003).

> Relatedly, majority rule minimizes the number of frustrated voters (defined as voters on the losing side) and maximizes total utility across voters. Brighouse and Fleurbaey (2010) generalize this result. Define voter i's stake in the decision, di, as the utility difference between his or her preferred outcome and his or her dispreferred outcome. The Rae-Taylor theorem rests on an implicit equal-stakes assumption, i.e., di = 1 for every i ∈ N. Brighouse and Fleurbaey show that when stakes are allowed to vary across voters, total utility is maximized not by majority rule, but by a weighted majority rule, where each individual i's voting weight wi is proportional to his or her stake di.
    
    
    Space::fidelity = () ->
      winners = 0
      population = 0
      for polity in @polities
        election = vote polity
        for key, val of election
          winners += val if key is election.winner
          population += val unless key is 'winner'
      winners / population 


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

!! Yes, I need to rewrite this conclusion

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

    fs       = require 'fs'
    sum      = (arr) -> arr.reduce (a,b) -> a + b
    ave      = (arr) -> sum(arr) / arr.length
    variance = (arr) ->
      mean = ave(arr)
      (arr.reduce ( (a,b) -> a + (mean-b)*(mean-b)), 0) / arr.length
    stdev    = (arr) -> Math.sqrt( variance arr)


    simulateDemocracy = (account, agents, partitions, clustering, trials) ->
      space = new Space agents
      space.distribute clustering
      results = { 'a': agents, 'p': partitions, 'c': clustering, 'trials': [] }
      for trial in [1..trials]
        results.trials.push space[account]( space.partition partitions )
      results

    save = (type, results) ->
      fs.writeFile "graphs/#{type}.json", JSON.stringify( results, null, 2 ) , (err) ->
        if err then console.log err

    runEpistemicSimulation = () ->
      results = []
      for e in [0..5]
        e = 500 + e*50
        e = 510 if e is 500
        for p in [0..5]
          p = (p+1)*5
          for c in [0..5]
            c = c/5
            es = simulateDemocracy( 'virtue', {'right': e, 'wrong': 1000-e}, p, c, 1000 )
            results.push { e: e, p: p, c: c, value: ave(es.trials).toFixed(15) }
            process.stdout.write "Running #{results.length * 1000} epistemic trials\r"
      save 'epistemic', results
      
      
    runPreferenceSimulation = () ->
      results = []
      for f in [0..5]
        f = 500 + f*100
        for p in [0..5]
          p = (p+1)*5
          for c in [0..5]
            c = c/5
            ps = simulateDemocracy( 'fidelity', {'chocolate': f, 'vanilla': 1000-f}, p, c, 1000 )
            results.push { f: f, p: p, c: c, value: ave(ps.trials).toFixed(15) }
            process.stdout.write "Running #{results.length * 1000} preference trials\r"
      save 'preference', results
    
    module.exports = { simulate: simulateDemocracy }

Finally, we capture terminal inputs to start up the simulation.  To run the simulation of epistemic democracy, use the command `coffee paper.coffee.md epsitemic`.  This will execute the code embedded described in the paper above.


    process.argv.forEach (val, index, array) ->
      runEpistemicSimulation() if val is 'epistemic'
      runPreferenceSimulation() if val is 'preference'

---