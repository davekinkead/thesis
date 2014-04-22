# What's the Problem with the Boundary Problem?


### Background

My name is Dave Kinkead and I'm (hopefully) in the finally year of a PhD in Political Philosophy at the University of Queensland.  My work mainly focuses on normative democratic theory, and my dissertation examines an number of contradictions and paradoxes that lie at the foundations of democratic theory - paradoxes that seep up and undermine subsequent accounts of democratic legitimacy.

The paper that I'm going to present today concerns one of those issues and has become known in the literature as the Boundary Problem of Democratic Theory.

The plan for today is pretty straight forward.  

1. The Problem
2. The Methodology
3. The Simulation
4. The Implications

I'm going to start with a brief overview of the Boundary Problem, how it undermines accounts of democratic legitimacy, and how it has been addressed in the literature.  

Next, I'll provide a short justification for the methodology I'm using.  This paper is somewhat different to standard philosophical fare in that it involves computer simulation.  And while there is nothing particularly new about formal modelling in philosophy, what makes my approach unique is that this paper, is that the paper is simultaneously a philosophical argument and computer simulation.  The formalisations within the paper are machine readable so the same document is both the paper and the source code for the simulation it discusses.  I can go over the details of this in the Q&A if anyone wants more information about this.

The bulk of the presentation however, will involve stepping through some computer modelling of democratic processes and exploring the implications of the results from the simulation.  I'm really looking forward to some critical feedback concerning both the results and methodology.

### The Problem

Democracy begins with the people; democratic theory simply presupposes them.  Who the people are is of fundamental importance for democratic theory because exactly who make up the people largely predetermines the outcome of any democratic process.  Draw the boarders of a political community in one location rather than another, include these people in the political process rather than those, and the outcomes of those processes will likely be very different.

Current events in the Ukraine provide an excellent example of this:

> Should Crimea secede from the Ukraine and form a political union with Russia?

Lets grant a few unlikely concessions for a moment.  Assume that all parties involved are committed democrats - they all hold strong ideals of political equality and popular sovereignty.  And lets further assume that all parties have agreed to a decision mechanism - say a majority binary referendum.

In this scenario, who gets to vote determines the outcome of the vote. If only Crimeans are included in the process, then the result will be a yes.  If all Ukrainians can vote, then answer will be a no.  And if both Russians and Ukrainians are given a say, then the outcome will be an overwhelming yes.

_Who_ determines _what_.

Who is included within a democratic association is a rather important matter, so we obviously need some account of democratic inclusion.  But unfortunately we can't answer this question democratically.

Democratic theory is silent on who ought be included amongst the people.  It can't, because any democratic process first requires the identification of some determinate group of agents - the demos - in order to act democratically.  

Trying to solve the issue of democratic inclusion democratically, is either viciously circular - we need to know the answer before we can know the answer - or results in an infinite regress - who should chose who chose who should participate.

That's because the question of _who the people are_ is logically and temporally prior to the question of _what they decide_.

So if we can't solve the issue of democratic inclusion democratically, then we will need to do it non-democratically. And a number of accounts have been proposed - some based on history, nationality, salience, coercion, and affected interests. But unfortunately, none of these accounts of inclusion are compatible with accounts of democratic legitimacy.

To briefly summarise the literature on why this is the case:  Historical accounts are too arbitrary; those based on nationality, cultural, or linguistic salience lack sufficiently objective criteria.

The all-coerced principle doesn't answer the question - that all those subjected to the coercive force of the state should have some say in its operation is a plausible claim but fails to explain who should be subjected to those coercive forces in the first place.

And the all-affected principle - that anyone affected by an issue should have a say - results in either overlapping issue based jurisdictions incompatible with the idea of territorial sovereignty, or a global government that includes too many.

So at its essence, the Boundary Problem consists of 3 primary claims:

1. That the issue of inclusion is of fundamental importance to democratic theory
2. That the issue of inclusion can't be solved democratically
3. That non-democratic solutions are incompatible with democratic legitimacy

The Boundary Problem is a strangely overlooked issue.  The first modern reference to it was by Dahl in 1970 who described it as a "curiously neglected and yet absolutely crucial problem" p59.  Since then, only a handful of scholars have attempted to engage with the issue and none has found a satisfactory solution.

The literature does address the Boundary Problem can be summarised thusly:

1. The problem exists
2. The problem is self-evident or obvious
3. Why solutions are (in)compatible

I certainly all other political theorists writing about the issue on 1. the problem most certainly exists; and I agree with the majority theorists about the incompatibility of accounts of inclusion with accounts of legitimacy.  But I depart from the literature on point 2.  

The aim of this paper is to show that the problem is not self evidence or obvious, that the Boundary Problem is in fact three distinct but related problems, of which only some affect only certain accounts of democratic legitimacy.


### Three Problems

The Boundary Problem is really three distinct but interconnected problems. The first of these, what we might call the _justification problem_, is that a democracy cannot determine who should be a member of it democratically. 

As discussed earlier, any attempt to justify the inclusion of some people but not others within the demos will either be circular or result in an infinite regress because who the people are is a matter logically and temporally prior to how they might decide. 

Yet any non democratic accounts of inclusion aren't compatible with accounts of democratic legitimacy.  We lack the ability to adequately justify inclusion.

The lack of justification for who the people ought be raises two more derivative problems concerning contradiction with democratic principles and the undermining of democratic attempts to legitimate the authority of the state. 

What we might call the _value problem_ arises when arbitrary methods of determining the demos conflict and contradict with core democratic values. The most fundamental of these are the principles of self-determination and self-rule. Failure to properly define the people, and the subsequent over or under enfranchisement of a political association results in a state of heteronomy, the political subjugation of one group by another.

An example will demonstrate this.  If I'm one of 100 people affected be some issue, then giving each of an equal say - 1/100th of collective power - satisfies the substantive democratic requirements of political equality and popular sovereignty.

But if give 10,000 people a say in the matter when only 100 are affected, then the voice and sovereignty of those 100 people is undermined.  Others who seem to have no normative claim, now rule over me.

The justification problem also raises another challenge, what we might call the _predetermination problem_. This stems from the fact that the logical and temporal priority of the who over the how results in the who having a fundamental impact on the how. 

Who participates in any democratic process it critical in determining the outcome of it; and given sufficient polarity and clustering of agent preferences and values across any political space, the question of inclusion fully predetermines the outcome of any democratic mechanism. 

And when the basis of democracy’s legitimising claims rest the difference making qualities of democratic processes, then the predetermination of outcomes renders these difference making and legitimising claims vacuous.

Its this last problem of predetermination that I now wish to explore.


### Methodology

One important reason that the specifics of the Boundary Problem have received such little attention is the paucity of empiric evidence to examine.  The Boundary Problem is a _what if_ problem; it's counter-factual nature, that if the accidents of history had consigned the boarders of some state elsewhere, then the people of that state would have decided differently, makes contrastive evaluations difficult.  

It is impossible to generate contrastive empiric claims about how different boarders would have led to different outcomes when we lack the ability to fix variables, adjust inputs, and experiment to test our theories.  Thus the Boundary Problem becomes a _drunkard's search_[^kaplan1964:p11], with solutions sought only where they are easiest to find.

Generative approaches by contrast, allow us to investigating the problem in places most likely to deliver results. Generative approaches such as computer modelling allow us to make our assumptions explicit and manipulate the variables under examination in any manor we choose.  

I'm not going to address any specific concerns regarding the philosophy of simulations here or what type of knowledge simulations can help us accrue, but I don't seen any concerns with the claim that modelling allows us to formalise our assumptions and demonstrate the coherence or lack there of between them.


### The Model

What follows is a very simple model of a democratic process in which the Boundary Problem can arise.  The model comprises three distinct conceptual entities: political agents, groupings of agents into associations or polities, which exist within the problem domain or political space.  

#### Entities

An `Agent` represents a political actor - a citizen.  Agents in this model are a simple folk who can hold a single discrete belief, which is represented formally as:

    class Agent
      constructor: (@belief) ->

Agents exist within a `Political Space` which represents the problem domain.  The distribution of Agents across the Political Space and how they are partitioned into polities is what drives the Boundary Problem.  

The Space might be characterised by Agents holding beliefs on a spectrum from highly polarised to unanimous; and how these Agents might be clustered together according to their beliefs, from high clustered `1.0` or with a uniform random distributed `0.0`.

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
          #if (Math.random() < clustering)
          
          limit = Math.round( Math.random() * quota.length * (1-clustering) )
          @agents = @agents.concat quota.splice limit, 1
    

A `Space` can be partitioned into different polities.  How we partition - how we answer the question of democratic inclusion - forms the crux of the Boundary Problem.  As outlined earlier, there are variety of competing accounts as to how we should bound polities so the primary purpose of this model is to demonstrate the effect of different partitions on the outcomes of democratic processes.

The actual number of possible unique partitions is an exponential function of the number of _n_ agents and _k_ partitions. Specifically, it is a binomial coefficient, either ∑ (n choose k).

> ABCD
> A|BCD, B|ACD, C|ABD, D|ABC, AB|CD, AC|BD, AD|BC
> A|BC|D, A|CD|B, A|BD|C, B|AD|C, B|AC|D, C|AB|D
> A|B|C|D

Because ∑ (n choose k) is so large, I am going to use a stochastic algorithm to recursively divide the largest partition of the space at a random point until the desired number of partitions are produced.  Then, Montecarlo simulation can then be used to generate a sufficient number of partition conbinations.

    Space.prototype.partition = (n) ->
      @polities = [@agents]
      while n > 1
        n = Math.min n, @agents.length
        polity = @polities.shift()
        cut = Math.floor( Math.random() * (polity.length - n) ) + 1
        @polities.push polity[...cut]
        @polities.push polity[cut..]
        @polities.sort (a,b) -> b.length - a.length
        n--
      this
      
    
#### Decision Mechanisms

With the entities of the model defined, we can now focus on how the entities interact by modelling democratic processes.  And while there are a number of democratic processes that can be used to decide such as sortition or deliberation, the most ubiquitous method is of course voting.

The simplest procedure is majority voting on a binary issue.  We are going to assume that all agents vote according to their beliefs and don't engage in any strategic voting, and formalising an algorithm to calculate the most frequent belief in each polity across a space give us:

    simpleMajorityVote = (space) ->
      results = []
      for polity in space.polities
        votes = {}
        for agent in polity
          if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
        
        max = Math.max.apply null, (num for belief, num of votes)
        results.push belief for belief, num of votes when num is max

      results


### Simulation

Now that the model has been formalised, we can begin simulating the effects of partitioning a space characterised by agent composition, clustering, belief.  The objective is to examine to what extent the outcomes of democratic processes within a static political space change as the space is repartitioned.

To do this, I will run Montecarlo simulations for a range of input variables and assess the resultant data's implication for a variety of accounts of democratic authority.


#### Epistemic Justifications

One of the most common justifications for democratic authority is epistemic - democracy has instrumental value as a truth tracking process.  Epistemic accounts can be simple like in Condorcet's Jury Theorem, or more nuanced such as Estlund's Epistemic Proceduralism.  

But they all rely on the claim that democratic procedures, on average, are better at determining an independently correct result than competing procedures.
  
    sum = (arr) -> arr.reduce (a,b) -> a + b
    
    ave = (arr) -> sum(arr)/arr.length
    
    variance = (arr) ->
      mean = ave(arr)
      (arr.reduce ( (a,b) -> a + (mean-b)*(mean-b)), 0) / arr.length
      
    stdev = (arr) -> Math.sqrt( variance arr)
    
    epistemicSimulation = (agents, partitions, clustering, trials) ->
      space = new Space( agents, clustering )
      results = { 'total': {'right':0, 'wrong':0}, trials: {} }
      for num in [1..trials]
        results.trials[num] = {'right':0, 'wrong':0}
        votes = simpleMajorityVote space.partition partitions
        for vote in votes
          results.trials[num][vote]++
          results.total[vote]++
      results

So to what extent does partitioning the space in different ways alter the truth tracking capacity of democracy?  Let's start with a space containing 1000 randomly distribute agents, 60% of who hold the correct belief and will therefore vote for the correct answer.
    
Partitioning the space into a single polity and using simple majority voting should result in the single polity voting correctly each time.  100 iterations demonstrates this to be the case
    
    for p in [1..50]
      er = epistemicSimulation {'right': 510, 'wrong': 490}, p, 0.0, 100
      #er = epistemicSimulation {'right': .6*p*100, 'wrong': .4*p*100}, p, 0.0, 100
    
      arr = for trial, results of er.trials
        results.right/(results.right + results.wrong)
      
      console.log ave(arr).toFixed(15)
      #console.log "P: #{p} \tM: #{ave(arr).toFixed(15)} \tSD: #{stdev(arr).toFixed(15)}"
    

Implications
- the model doesn't show partitioning differences once we account for the CJT effect
- the BP effects EJ if they are decision specific justification
- the BP doesn't effect EJ if they are 'on balance' justifications
- an EJ account of inclusion would be satisfied by a requirement of sufficiently many informed voted
- this however only applies when we have uniform or random distribution of agent beliefs
- strong clustering of beliefs undermines the episitemic value of voting
- the problem with this is determining how informed voters are

####  Strategic Justifications

Epistemic justifications of democracy are just one of many types, and one subject to a number of criticisms, not least of which is the realisation that not all matters of collective decision have independently correct or preferable outcomes.

Most problems of politics, and almost all contentious issues concern matters of values, to which epistemic justifications offer little support for.

Another way to justify democracy is strategically.  All political authority involves the exercise of power by some over others.  Singer for example, argues that we all want to be dictators but because we can't all exercise complete power over each other, democracy is the fairest compromise.  

Carol Gould takes a distinct but similar approach - all our lives are affected by our surroundings, and it is only when we have some influence over these affairs that we have self rule.  Democracy is the only way for us to have self government.

While each of these accounts is based on different principles (Singer's on equality, Gould's on liberty), one common characteristic is that both value democracy as a way of realising individual aims within a collective setting.  So one way both can be assessed is by measuring the fidelity of individual belief or preference to the collective outcome.