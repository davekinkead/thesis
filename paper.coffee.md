---
title: Democracy, Borders, & Legitimacy
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: pre-review draft
license: CC-BY-SA
bibliography: /Users/dave/Dropbox/Research/readings/.library.bibtex
csl: https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-philosophy.csl
---

# Democracy, Borders, & Legitimacy

> This is an argument about the relationship between democratic inclusion and instrumental justifications of democracy.  I show that any account of democracy that relies on the outcomes of democracy processes to demonstrate democracy's value must have a congruent account of inclusion.  Not only that, but because different accounts of democracy rely on different and incompatible accounts of inclusion, these accounts of democracy are themselves incompatible.

> This paper is unique in that is simultaneously a philosophical argument and a computer simulation.  Written in [literate coffeescript](http://coffeescript.org/), the code described in the paper can also be run by the coffeescript compiler to demonstrate the argument being described by the paper.  The reader may generate both the argument in PDF, or the simulation and results in HTML with the command `coffee paper.coffee.md`.  

> Best viewed in HTML with interactive graphs, the following links outline [paper](https://github.com/davekinkead/modelling-the-boundary-problem), [installation](http://coffeescript.org/#installation), and [dependency](https://npmjs.org/doc/install.html) requirements.  A PDF version is also available with static images.


## Introduction

There are many ways one might justify democracy [^definitions].  One common approach is to point to the desirable outcomes that democratic procedures bring about. Democracy in this light leads to good policy.  

Sometimes the desirability of these outcomes is judged according to some independent criteria.  According to these accounts, there is some external standard for measuring the quality of a decision.  Epistemic accounts of democracy like Condorcet's Jury Theorem [@condorcet1976] or David Estund's Epistemic Proceduralism [@estlund2009] are like this.  Truth exists independently of our beliefs; democratic processes track the truth; so this gives us reason to value democracy.

Other times, we might judge the quality of democratic outcomes against some agent relative criteria.  Rather than rely on something external, the desirability of a particular result is assessed against some internal standard.  It isn't the collective decisions of democracy that matter _per se_ but how those collective decisions correspond with individual choices.  We see this in utilitarian justifications of democracy where majority voting maximises the expected utility of voter preferences [@rae1969].  But one needn't be a utilitarian to employ such an approach - @rousseau1920 for example, argued that majority rule realises the general will of the people and this gives us reasons value it.

And for others still, it is not the particular content of democratic decision making that matters so much as the effects that democratic processes have on the participants.  Democracy changes people.  This is what @mill1862 had in mind when he argued that democracy transforms the moral character of its participants.  Democratic participation makes good citizens.

Call these accounts of democracy _instrumental_ [^instrumental].

[^definitions]: The term justification has been used in a variety of ways within political theory.  Sometimes it is used normatively to describe the content of reasons that might _legitimate_ democratic authority.  Other times it is used descriptively to to describe the giving of such reasons.  In this paper I use _justifications of democracy_ and _accounts of democracy_ synonymously to mean any normative theory of democracy's value.

[^instrumental]: Of course not all accounts of democracy are instrumental.  Sometimes democracy is justified intrinsically by appealing to substantive ideals like equality or justice.  Unless explicitly stated, _democracy_ in this paper refers exclusively those instrumental conceptions where outcomes do the normative of explaining democracy's value.

  * * * 

The outcome of any democratic procedure is a function, in part, of who gets to participate in that procedure.  Enfranchising some people rather than others, drawing the political line on a map in one location rather than another, will often result in different outcomes than would have otherwise occurred, even when the same procedures are used.  Who is included in a particular democracy affects the outcomes of that democracy.

Some democratic processes are deterministic.  Given the same inputs for some democratic system, the result will always be the same.  People vote according to their belief or preference and the voting procedures employed determines a winning outcome.  This is true for both _naive voting_, where voters believe they alone determine the outcome, as well as _strategic voting_, where voters support a choice other than their sincere preference in an attempt to increase the likelihood of an acceptable outcome [@feddersen1999].  

For both naive and strategic voting, the outcome of a democratic process is fully a function of who participates in that process.  On one extreme, when voters are fully polarised, including or excluding a single voter will change the outcome of the democratic process.  At the other extreme of complete consensus, over 50% of voters would need to be replaced for the outcome to change.

Other democratic processes however, are indeterministic. This may be because voters themselves don't actually know how they will vote until the moment they cast their ballot, or because the decision mechanism itself is random, as in the case of sortition or selection by lottery.  Yet even in these cases, the outcome of a democratic processes remain a function of who is included in that process, because changing participants changes the likelihood of particular outcomes.

_Who_ votes affects _what_ is decided.

  * * * 

So when democracy is justified by way of its outcomes, and those outcomes are determined by who is included in the democratic process, the question of _who should be included_ becomes a matter of fundamental importance for those accounts of democracy.

Yet the question of who ought be included in a political association - of how the _demos_ ought be bounded - presents a challenge to democratic theory.  If we attempt to answer the question of inclusion _democratically_, an infinite regress results.  To vote on who gets to participate in a democracy first requires the identification of some prior group to make this decision, and to identify that prior group democratically requires the identification a prior prior group, _ad infinitum_.  

In what has become known as the _Boundary Problem of Democratic Theory_ [^other-names], no account of inclusion can be shown to be compatible with a broad range of justifications of democracy.  Accounts of inclusion based on the status quo make the democratic outcomes contingent upon the accidents of history; those based on nationality lack a clear and objective criteria of what nationality is; cultural and linguistic salience as a criteria for inclusion ignores the reality of multiculturalism and multilingual communities; and accounts based on coercion and affected interests are incompatible with the current system of nation-states [^treatment].

[^other-names]: The _Boundary Problem of Democratic Theory_ has gone by a number of names in political theory.  @dahl1989 [p. 193] has called it "the problem of the unit" while @goodin2007 [p.42] refers to it as the problem of "constituting the demos".  Most other theorists have settled on "the Boundary Problem".

[^treatment]: See @whelan1983 for the seminal analysis of the challenges that the Boundary Problem presents as well as more recent work by @dahl1989, @arrhenius2005, @bergström2007, @goodin2007, @miller2009, @agné2010, @abizadeh2012, @schaffer2012, @song2012, and @erman2014.

The Boundary Problem is a "fundamental issue in democratic theory" [@arrhenius2005 p1] with "no theoretical solution to the puzzle, only pragmatic ones". It is a problem that presents "an important practical limit to the scope of democracy as a method of making collective decisions" [@whelan1983 p13] but one "almost totally neglected by all the great political philosophers who write about democracy" [@dahl1970 pp59-60].  While a vexing issue for all accounts of democracy, the Boundary Problem is especially problematic for instrumental accounts that rely on the content of specific outcomes.  

The question I wish to explore in this paper then is _when is the Boundary Problem a problem for instrumental accounts of democracy_?  Addressing _why_ the Boundary Problem is a problem, or _how_ it might be solved is not my aim. Rather, I wish to explore the relationship between accounts of inclusion and accounts of democracy and advance three claims that impact any answer to the question of who the people ought be:

  1.  That accounts of democracy must be compatible with accounts of inclusion.

  2.  That different accounts of democracy require differing, sometimes incompatible accounts of inclusion.

  3.  That different accounts of democracy that have incompatible accounts of inclusion are themselves incompatible.

The first claim advances the existing literature on the Boundary Problem by making the link between inclusion and justifications of democracy explicit.  Often, political theorists approach the problem of inclusion from a cosmopolitan position, arguing that the question is primarily about justice [^cosmo].  Other times, the concern is related to whether or not an answer is internally consistent with democracy, or whether it actually is a paradox of founding [^coherence].  Only rarely however, is the link between the problem of inclusion and the value of democracy addressed, and typically this is only ever implicit.  I will show that any instrumental account of democracy's value must be compatible with its corresponding claim of democratic inclusion.

[^cosmo]: See @goodin2007, @agné2010, @abizadeh2012, @saunders2012, and @erman2014 for arguments from the cosmopolitan perspective.

[^coherence]: See @whelan1983, @arrhenius2005, @bergström2007, @miller2009, @schaffer2012, @song2012, and @espejo2014 for work concerned with how the Boundary Problem affects democratic legitimacy and territorial states.

The second claim offers something new.  Different accounts of democracy require different accounts of inclusion.  As we shall see, accounts of democracy based on content-independent criteria require different accounts of inclusion to those based on content-relative criteria. Content-indifferent accounts of democracy by contrast, are compatible with a wider variety of accounts of inclusions, and are therefore less affected by the Boundary Problem.

Which leads to the third claim: whenever differing accounts of inclusion are incompatible, their corresponding accounts of democracy must also be incompatible.  The necessary relationship between democratic inclusion and justification means that accounts of democracy cannot be mixed if their supporting accounts of inclusion are not compatible.

Political theorists however, frequently combine incompatible justifications of democracy.  Mill as just one example justifies democratic rule on the ground that it is more reliable in determining the right decision (a content-independent criteria), takes into consideration the preferences of all (a content-relative criteria), and transforms the moral character of participants (a content-indifferent criteria).  The relationship between democratic inclusion and justification has broader implications than is currently recognised.

To reiterate, this is not an argument about _how_ or _why_ the Boundary Problem is a problem for democratic theory.  The Boundary Problem raises a number of challenges for democracy but here I focus exclusively on how it relates to instrumental accounts of democratic justification.  As such, I don't seek to explain who should be included in the demos, nor what principles might guide us to an answer. Rather, this paper is an examination of _when_ the Boundary Problem is a problem - of when accounts of democratic inclusion undermine accounts of democracy's value.


## Methodology

How then can we examine the relationship between democratic inclusion and democratic authority?  How does changing the make up of the demos changes the outcome of democratic processes? As philosophers, deductively reasoning from first principles or mutually agreed upon premises is a time-honoured approach.  We might first postulate some axioms of human nature and essential conditions of democracy before then demonstrating that certain states of affairs are necessary or possible, entailed or contradictory.  The obvious limitation with this approach however, is that many fundamental questions of political science, theory, and philosophy, are questions of empirical fact.  The biological and psychological forces that drive human behaviour, and the conditions under which actual democracies operate, are such that they cannot be deduced from self reflection whist sitting in a leather arm-chair.

Given the empirical nature of the investigation then, we could perhaps employ a scientific approach.  We might observe how actual democratic polities form and how different compositions of polities lead to different democratic outcomes.  Yet the complexity of human political systems makes causal claims all but impossible.  The lack of adequate sample sizes when using democratic states as relata, the non-linearity that arises from multiple interacting feedback loops, and the inability to hold variables fix 'in the wild' impose severe limits on our causal modelling and explanations that are well known to social scientists.

But a third approach, although rarely used in philosophy, offers considerable insight into this problem.  Computer simulation combines advantages of both approaches.  Typically, simulations are used to make predictions about the real world.  They attempt to model reality as accurately as possible before showing how changes in inputs lead to changes in the simulation.  Yet this is also the primary weakness of this approach.  How well does the simulation model reality?  If the model lacks fidelity with external world, then any inferences from the model will offer little insight into reality.  And given the empirical challenges of modelling complex human systems discussed above, the problems of simulating political reality look overwhelming.

An alternative approach would be to simulate _theory_.  All theories are abstractions of reality, so simulating theory simply formalises into code the abstractions that theorists have made for centuries.  This type of simulation can be thought of as coherence testing particular theories. By making the assumptions and abstractions of a theory explicit in code, we can see if the predictions and claims of the theory are entailed, or at least made probable.  We can show that a theoretical model is coherent even if we can't show that the theory's assumptions do in fact hold true in reality.

What follows in the remainder of this paper is both a description of a model of democracy as well as a simulation of that model.  It attempts to capture the key claims of instrumental accounts of democracy and explore how changing the composition of a polity affects the democratic processes of that polity.  

The simulation process begins by defining a simple model of democracy consisting of naive voters populating some abstract political space.  Methods of inclusion and voting are then defined.  Next, three instrumental accounts of democracy - content-independent, content-relative, and content-indifferent - are formalised and simulated in the model over a wide variety of parameters.  Finally, the relationship between democratic inclusion and democratic outcomes is explored by examining how different compositions of agents lead to different results. 

A form of literate programming [^lit], this paper embeds executable source code within the description of the model.  Simulation code is indicated by `indented code blocks`.  The reader need not understand the embedded code or syntax in order to understand the simulation however.  The code, it's purpose, and function will be fully explained in the surrounding text. It's presence serves to formalise the assumptions of the model in much the same way as one might include mathematical symbolism to formalise a proof, and to promote reproducibility and testability of the research herein.

[^lit]: Literate programming is a paradigm of computer programming that explains the logic of a system in essay like form, interspersed with snippets of source code that a compiler executes.  The aim is to prioritise human understanding of the program logic over compiler efficiency.  See @knuth1984 for an introduction to the topic.


## A Model of Democracy

The model comprises three distinct conceptual entities: a `Political Space` representing the problem domain, `Political Agents` who are distributed across the space, and partitions of the space that group agents into political units or `Polities`. 

An agent represents a political actor or citizen.  They are simple folk who hold a single discrete value representing a belief, preference, character trait, or virtue - right or wrong, Republican or Democrat, chocolate or vanilla, virtuous or iniquitous. This is represented formally in code as:


    class Agent
      constructor: (@belief) ->


Agents exist within a space which represents the problem domain.  A space is constructed by specifying a profile of how many agents hold which belief, preference, or virtue.  These belief are stipulative.  They are defined at the start of the simulation and form its parameters.  For example, a profile of  `{ 'chocolate': 400, 'vanilla': 600 }` would create a space with 400 agents whose preference is chocolate and 600 whose preference is vanilla.


    class Space
      constructor: (profile) ->
        @agents = []
        for belief, believers of profile
          for n in [1..believers]
            @agents.push new Agent(belief)


Agents are distributed across the space in some way according to their belief.  This distribution could be perfectly uniform, with agents evenly spread across the space; or agents could be tightly clustered so that all agents of a similar belief are grouped together.

Agents in our space will be distributed according to a cluster factor which determines the proximity of agents holding similar beliefs with one another.  A factor of `1.0` will result in a highly clustered space with all like agents grouped together, while `0.0` will result in a uniform random distribution of agent belief.


    Space::distribute = (cluster=0.0) ->
      quota = @agents
      @agents = []
      while quota.length > 0
        limit = Math.round( Math.random() * quota.length * (1-cluster) )
        @agents = @agents.concat quota.splice limit, 1


Spaces are partitioned into polities.  A polity represents a unit of political association that holds some degree of sovereignty regarding specific issues, such as a nation-state, province, or local council.  Most political spaces are partitioned in some way - the world is divided into countries, countries are divided into states or provinces, states are divided into electorates etc.

How we partition a space - how we decide who will be included in which political association - forms the crux of the Boundary Problem and there are many competing theories concerning how to partition.  Amongst accounts of democratic inclusion we find proposals to group agents according to nationality, cultural or linguistic salience, degree of economic or social interdependence, by who is affected by a policy or issue, or even to not partition at all [^world].

[^world]: As @goodin2007 [p. 55] observes, "Virtually (maybe literally) everyone in the world — and indeed everyone in all possible future worlds — should be entitled to vote on any proposal or any proposal for proposals". 

While numerous accounts of inclusion exist in political theory, the combination of actual possible partitions of any space is orders of magnitude greater [^combos].  To simplify the model and remain agnostic about particular theories of inclusion while capturing a wide variety of possible agent compositions, a stochastic algorithm to divide the space into different polities will be used to generate a random sample of polities.

[^combos]: The possible number of different partitions is the sum of binomial coefficients of agents and the number groups they are partitioned into.  This increases exponentially as the number of agents and groups increases, making a simulating all possible partitions within a reasonable time frame is beyond the capacity of current desktop computing.

The partitioning algorithm recursively divides the largest polity of the space at a random point until the desired number of polities have been produced - each characterised by a differing number and composition of agents.  


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


Democracies make collective decisions - it's why they exist.  The decision procedure for our model democracy will be a naive majority vote by each polity on a binary issue.  This is the simplest decision mechanism to model and it will assume that agents vote sincerely and deterministically according to their belief.


    vote = (polity) ->
      votes = {}
      for agent in polity
        if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
      max = Math.max.apply null, (num for belief, num of votes)
      votes.winner = belief for belief, num of votes when num is max
      votes


With our model now defined, the relationship between accounts of democracy and accounts of inclusion can now be explored by running Monte Carlo simulations of the model for various combinations of agent, clusterings, and partitions [^monte].  

At the beginning of each simulation, a space is created with a fixed agent profile, clustering factor, and polity number.  During each run, the space is partitioned into the desired number of polities which then vote, with the results being recorded for statistical analysis.  

This partition-vote-measure loop is repeated 1000 times, generating in a probability density function of the votes in each polity for each belief-cluster-partition tuple.  These results are then assessed against three classes of instrumental accounts of democracy to examine the conditions under which accounts of inclusion affect accounts of democracy.

[^monte]: Monte Carlo simulations are class of computational algorithms that rely on statistical sampling from repeated simulation trials to generate numerical results. [see @fishman1996 for a full treatment of their use in computer simulation].


## Content Independent Outcomes

One common justification for democracy is epistemic - that democracy has instrumental value as a truth tracking processes.  Some of these epistemic accounts are relatively simple and Condorcet's Jury Theorem is one such example. Given a better-than-even chance of any voter being correct on some choice, then the likelihood of a majority vote being being correct on that choice approaches certainty as the number of voters increases [see @list2001].  

Others, like @estlund2009's Epistemic Proceduralism, are more nuanced.  Rather than valuing democracy on the basis of the outcome of a specific vote, democracy has legitimacy because much like a jury, its decision processes have a tendency to produce correct decisions. Even when the majority is wrong on a particular matter, the majority decision is still morally binding, so long as majority voting remains the more reliable procedure than alternatives.

While different, all epistemic accounts rely on the claim that democratic procedures, on average, are better at determining the correct result than alternate ones. Further more, these results are correct _independently_ of the decision procedure used.  

This type of justification requires some way of comparing the epistemic performance of different decision procedures and one intuitive way to do this is to assess them against some base line metric.  An obvious candidate for such a metric is the likelihood that any randomly selected voter holds the correct belief or votes correctly - what I will call the _epistemic base rate_ of a political space.  We can then judge the epistemic performance of a decision procedure against the epistemic base rate.  Call this difference a procedure's _epistemic virtue_.

In our simulation, the epistemic virtue of a simple majority vote can be measured as the frequency based probability that a polity votes correctly given the initial conditions of the space.  During each trial, the number of polities that voted correctly is measured and the impact of differing partitions assessed.  The correct answer to the question our agents vote on is known in advance because we stipulate it when we create agents with either `right` or `wrong` belief.


    Space::virtue = () ->
      correctVotes = 0
      for polity in @polities
        election = vote polity
        correctVotes += 1 if election.winner is 'right'
      correctVotes / @polities.length


Running a Monte Carlo simulation hundreds of thousands of times for a range of partition numbers (5 to 30), cluster factors (0.0 to 1.0) and epistemic base rates (0.5 to 1.0) yields a four dimensional data cube of probability distributions for the expected correct majority vote in each base-rate-partition-cluster tuple.

We can examine the results from any perspective or slice of the data cube.  In the graph below, we see the impact of repartitioning on epistemic virtue at an epistemic base rate of 0.6 from the perspective of clustering.  The vertical axis represents epistemic virtue and the horizontal axis, the degree of clustering.  Each line represents the number of polities the space was partitioned into, ranging from 5 to 30 partitions.

<figure>
<div id="epistemic-by-cluster" class="graph"></div>
<figcaption>Epistemic virtue by cluster factor</figcaption></figure>

The likelihood of any randomly selected voter in the space being correct is 0.6. When agents are uniformly distributed across the space by belief (i.e. no clustering of agent belief is present), the epistemic virtue of majority voting  - the likelihood that the majority vote of any polity is the correct choice - is very high (0.82-0.97).  This quickly deteriorates as clustering of agent belief increases however, with no epistemic virtue of majority voting evident once agent clustering reaches 0.5.  This holds true for all levels of partition numbers and epistemic base rates > 0.5, although the effect diminishes as diversity across the space diminishes [^diversity].

[^diversity]: A general principle about polity likeness is observable.  For any given distribution of agents across a space, the more internally homogeneous a polity is, them more externally heterogeneous it must be, and vice versa.  This is most pronounced when agent diversity within the space is high, i.e. when epistemic or preference base rates are close to 0.5, but the relationship deceases as the diversity in the decreases, i.e. when the base rates approach 0.0 or 1.0.

<figure>
<div id="epistemic-by-partition" class="graph"></div>
<figcaption>Epistemic virtue by partition number</figcaption></figure>

Examining the same data from the perspective of partition number, we see little impact of partition number on epistemic virtue for higher cluster factors, and only limited impact for low levels of clustering, concordant with Condorcet's Theorem [^explain].  This relationship holds for all epistemic base rates between 0.51 and 0.99.

[^explain]: Condorcet's Jury Theorem posits that the likelihood of majority rule selecting the correct outcome increases as the number of voters increases (assuming voters have an independent better than even chance of voting correctly).  We should expect to see a gradual decrease in epistemic virtue as the same number of voters in the space are partitioned into increasing numbers of polities.

These results indicate that the epistemic virtue of majority voting is dependent not only on individual agent belief having a greater than 50% likelihood of being correct, but also on how those agent beliefs are distributed across the political space.  A key stipulation of the Jury Theorem is that there must a better than average chance of any voter being correct - we might call this the _competency requirement_.  This simulation shows that when clustering of agent belief is present, even if the competency requirement is met for the space as a whole, it is not necessarily met for every partition of that space.  Furthermore, as clustering of agent belief across the space increases, the likelihood that every partition of the space satisfies the competency criteria decreases.

The relationship between content-independent justifications of democracy and democratic inclusion is now clearer. Epistemic justifications of democracy require accounts of inclusion that ensures that:

  1. Polities are sufficiently large for the Condorcet effect to emerge.
  2. Any partition of a space that satisfied the competency requirement must also satisfy the competency requirement.

When the distribution of voter belief is uniform, where we draw the boundaries of our democracies is largely irrelevant for content-independent accounts of democracy. Any account of democratic inclusion will do.  But when the distribution of voter belief is clustered, where we draw boundaries of our democracies becomes very important. In this case, any compatible account of democratic inclusion will need to demonstrate that each polity satisfies the competency requirement for epistemic justifications.  

We can summarise this finding by stating that the Boundary Problem only becomes a problem for content-independent justifications of democracy when homogeneity of voter belief or competence is high within polities but low between them.  In these instances, how we bound the _demos_ and draw political borders is critical.  Content-independent justifications require accounts of inclusion that generate sufficiently large, externally homogeneous polities.  Polities needs to be large and have similar voter composition otherwise only some of them can be justified by content-independent accounts. 


##  Content Relative Outcomes

Not all instrumental accounts of democracy are epistemic however.  Utilitarians justify democracy on the grounds that it promotes the greatest happiness.  Majority voting maximises the expected utility of voter preferences when each individual has an equal chance of preferring each of two alternatives [@rae1969].  But one needn't be a card carrying utilitarian to employ such an approach.  @rousseau1920 argued that majority rule realises the general will of the people and this gives us reasons to obey, while social choice theorists hold that majority voting realises individual choice when collectively binding decisions must be made (@may1952).

While these accounts of democracy differ in many ways, they all share a similarity in that the value of democracy stems from some content-relative criteria - of fidelity between individual preference and collective outcomes.  It is not the contents of the outcome of a democratic process that matters per se, but rather how well this collective outcome matches the wants, preferences, or intent of individual participants.

We can judge these content-relative outcomes by defining the fidelity of a democratic procedure as the likelihood that an individual's preference is the same as, or compatible with, the majority outcome.  Formalising fidelity as individual-collective choice equivalence we get:
    
    
    Space::fidelity = () ->
      winners = 0
      population = 0
      for polity in @polities
        election = vote polity
        for key, val of election
          winners += val if key is election.winner
          population += val unless key is 'winner'
      winners / population 


Running the same Monte Carlo simulation with the same parameters as the epistemic simulation yields a different set of results to those of the content-independent one.  Below, we see the fidelity of individual preference to majority vote for a distribution of agents with a 60:40 preference for some choice A or B over a range of clustering and partition variables, viewed by degree of clustering.

<figure>
<div id="preference-by-cluster" class="graph"></div>
<figcaption>Preference fidelity by clustering</figcaption></figure>

Again, when viewed by degree of clustering, the effect of polity composition on preference realisation is stark.  When agents are uniformly distributed by preference across the space (i.e. when clustering is low), the likelihood of an individual's preference being realised by majority vote is identical to that of any two random agents preference being the same (i.e. the preference base rate).

As clustering of agent preferences across the space increases however, the fidelity between individual and majority preference increases significantly. At its most extreme, there is near certainty that any individual preference will be realised by a majority vote of a polity when the distribution of agents across the political space is fully clustered - when agents are completely segregated by preference.  This relationship holds for all preference base rates, although it is more pronounced when the preference base rate - the ratio of competing preferences - is lower.

In contrast with the epistemic simulation of democracy however, the impact of agent clustering on outcome quality is reversed.  Majority voting has the greatest likelihood of fidelity with individual preference, and therefore greatest value from a content-relative perspective, when agents are highly clustered.  This contrasts sharply with the content-independent perspective where the greatest epistemic value of majority voting was found with a completely uniform agent distribution.

<figure>
<div id="preference-by-partition" class="graph"></div>
<figcaption>Preference fidelity by partition number</figcaption></figure>

The number of polities a space is partitioned into has only a limited effect in individual-majority preference fidelity. As the space is partioned into increasing numbers of polities, fidelity increases slightly when preference are highly clustered, but the influence of partition number is significantly less than the impact of preference clustering.

The key implication from this analysis is that accounts of democracy based on content-relative criteria such as the fidelity of individual with group preference require an account of democratic inclusion that ensures that: 

  1. Polities are sufficiently small.
  2. Voters are as internally homogeneous as possible.

Restated, where we draw political boundaries is largely irrelevant for content-relative accounts of democracy if the distribution of voters by preference is highly clustered.  Just about any account of inclusion will likely generate internally homogeneous polities.  Where we draw boundaries is very important however, when the distribution of voters by preference is uniform.  The Boundary Problem only becomes a problem for content-relative justifications of democracy when homogeneity of voter preferences is low within polities but high between them.  Content-independent justifications require accounts of inclusion that generate sufficiently small, internally homogeneous polities.


## Content Indifferent Outcomes

A third type of instrumental justification of democracy is concerned not with the specific content of democratic outcomes, but with their beneficial side effects.  It is not the result of a vote or policy deliberation that matter _per se_, rather it is the effect that democratic participation has on citizens that is valuable.  Democracy on this account is _transformative_.

Public life as the path to personal improvement is an idea that can be traced back to the Greeks.  More recently, @rousseau1920 [§ 1.8.3] thought democracy a necessary condition for the realisation of moral autonomy:

> ... what man acquires in the civil state, moral liberty, which alone makes him truly master of himself; for the mere impulse of appetite is slavery, while obedience to a law which we prescribe to ourselves is liberty.  

For @mill1862 [Ch 3], democracy was the means to improve the moral character of the people.  The weighing of different people's interests, being guided by other's rules, and applying principles that advanced the common good, enhanced a citizen's moral capacities:

> Still more salutary is the moral part of the instruction afforded by the participation of the private citizen, if even rarely, in public functions ... He is made to feel himself one of the public, and whatever is for their benefit to be for his benefit.  

We might call these types of instrumental justifications of democracy _content indifferent_, because it's not the content of democratic outcomes that matters _per se_ but rather some side effect of democratic activity that matters [^isolation].

[^isolation]: Content indifferent justifications are not typically used in isolation.  Both Mill and Rousseau used these content indifferent justifications in conjunction with other instrumental justifications of democracy such as strategic value, truth divination, and preference articulation.

One way to formalise this type of account is to stipulate that agent character improves consistently for all citizens when they vote (or deliberate).  This would model an agent-blind process in which every voter's character improves to the same degree, regardless of how politically active they are or who they interact with.  A more plausible model however, would see agent character improve dependent on _who_ they interact with.  Win-at-all-costs politics characterised by media manipulation and voter apathy seem less likely to positively transform the character of participants than contests marked by honest and open debate.

In the formalisation below, agent character improves relative to the average character of their polity, with more virtuous polities improving their citizen's character to a greater extent than less virtuous ones.  `Good eggs` are assigned a random value representing moral character between `0.5` and `1.0` while `bad apples` are assigned one below `0.5`.  Democratic activity here 'closes the gap' between an agent's actual and maximum character potential, by a factor determined by the average character in their polity.


    Space::character = () ->
      polity_improvements = []
      for polity in @polities
        characters = polity.map (agent) ->
          character = if agent.belief is 'good' then 0.5 else 0.0 
          character += Math.random() / 2
        average_character_in_polity = ave characters
        gap_closed = ave characters.map (val) ->
          (1 - val) * average_character_in_polity + val
        polity_improvements.push gap_closed
      ave polity_improvements


<figure>
<div id="character-by-cluster" class="graph"></div>
<figcaption>Character improvement by clustering</figcaption></figure>

When viewed from the perspective of clustering, a small effect on moral character is noticeable.  With little agent clustering across the space, the improvement in an agent's moral character is strong (at a base rate of 0.6, average improvement is approximately 0.8).  As clustering increases, character improvement is less strong (0.75 for the same parameters).  Unlike content-independent and content-relative justifications in which changes in clustering can completely undermine the relevant instrumental effect, the effect of content-indifferent accounts is still present across all clustering levels.

<figure>
<div id="character-by-partition" class="graph"></div>
<figcaption>Character improvement by partition number</figcaption></figure>

Viewed from the perspective of partition numbers, no change in moral character is observer able.  Differences in the transformative impact of democracy on an agent's moral character appear to be fully dependent on the degree of clustering across the space.

While less clustering is optimal for content-indifferent accounts of democracy, any partition of a space will result in a positive transformative effect as modelled here.  Any account of inclusion will do.  Content-indifferent justifications of democracy are compatible with both content-independent and content-relative accounts.

## Conclusion

The claims of some justifications of democracy are not entailed in all circumstances.  How we answer the question of _who the people should be_ can either support or undermine these accounts.  Content-independent accounts like Condorcet's Jury Theorem are unlikely to hold true when people are highly clustered by belief or epistemic competence.  When clustering is present, democracy has no epistemic virtue.  Content-relative accounts like preference realisation by contrast, are likely to be entailed when peoples preferences or values are evenly spread.  A uniform distribution undermines claim that democracy maximised preferences or best realises personal values.  Meanwhile, content-indifferent accounts perform almost equally well irrespective of how people are distributed.

The implication of inclusion on instrumental justifications of democracy is clear.  If we are to accept the claims of these accounts, then they must provide a corresponding and congruent account of inclusion.  The impact of voter composition on the outcomes of democratic processes places an addition constraint upon these accounts of democracy, such that any instrumental account of democracy must also offer a corresponding account of inclusion.

Different accounts of democracy require different accounts of inclusion.  As can be seen from the simulation of the epistemic and preference realisation models, the corresponding account of inclusions needed are incompatible.  Content-independent justifications require accounts of inclusion that generate sufficiently large, externally homogeneous, and typically, internally heterogeneous polities.  Content-independent justifications require the opposite.  They require accounts of inclusion that generate sufficiently small, internally homogeneous, and typically, externally heterogeneous polities.  These accounts of inclusion are obviously incompatible.  How we answer the question of _who should the people be_ for one account of democracy will not be same for another account of democracy.

So if instrumental justifications of democracy require different accounts of inclusion, and those accounts of inclusion are incompatible, then certain instrumental justifications of democracy are themselves incompatible.  One simply cannot maintain that democratic authority is justified because it has both epistemic virtue and realises individual preferences.  Yet many justifications of democracy do exactly this. Mill for example, justifies democracy on both epistemic and strategic grounds, arguing that democratic authority is legitimate because it generally reaches good decisions and is forced to consider the preferences of all citizens.  The incompatibility of accounts of inclusion that these approaches require however, demonstrates that this type of hybrid justification is incoherent.

Of course, this incompatibility constraint does not apply to all instrumental justifications of democracy.  Content-indifferent justifications like Mill's moral transformation account can work with any distribution of voter character.  For content-indifferent accounts, any account of inclusion will do.  The accounts of inclusion required by these types of justification are compatible with those required for either content-independent or content-relative justifications.  But not, however, with both.


## Appendix

A number of helper functions are necessary for the simulation to work as an independent program.  As these are not germane to the central argument, the have been extracted from the paper's body to here.  

First let's define some simple statistical functions.


    sum      = (arr) -> arr.reduce (a,b) -> a + b
    ave      = (arr) -> sum(arr) / arr.length
    variance = (arr) ->
      mean = ave(arr)
      (arr.reduce ( (a,b) -> a + (mean-b)*(mean-b)), 0) / arr.length
    stdev    = (arr) -> Math.sqrt( variance arr)


Next, we need to run the simulation.  The following function runs a simulation for the given parameters and number of trials.


    simulateDemocracy = (account, agents, partitions, clustering, trials) ->
      space = new Space agents
      space.distribute clustering
      results = { 'a': agents, 'p': partitions, 'c': clustering, 'trials': [] }
      for trial in [1..trials]
        results.trials.push space[account]( space.partition partitions )
      results


The results now need to be saved.  We'll save them in to a local file in JSON format for ease of consumption later on.


    fs = require 'fs'
    save = (name, results) ->
      fs.writeFile "assets/#{name}.json", JSON.stringify(results) , (err) ->
        if err then console.log err


Now we need to bootstrap the simulation.  We run it by assigning a name, metric, and some choices for the agents to vote on.


    runSimulation = (name, metric, choices) ->
      bases = [0..10]
      partitions = [1..6]
      clusters = [0..10]
      results = []

      for b in bases
        b = 500 + b*50
        for p in partitions
          p = p * 5
          for c in clusters
            c = c / 10
            sim = simulateDemocracy metric, 
              {"#{choices[0]}": b, "#{choices[1]}": 1000-b}, p, c, 1000
            results.push { 
              "baserate": b, 
              "partitions": p, 
              "clustering": c.toFixed(2), 
              "#{name} #{metric}": ave(sim.trials).toFixed(15) }
            process.stdout.write "Running #{results.length * 1000} #{name} trials\r"
      save name, results
    

Finally, we capture terminal inputs to start up the simulation.  To run the simulation of epistemic democracy, use the command `coffee paper.coffee.md epistemic`.  This will execute the code embedded described in the paper above.


    process.argv.forEach (val, index, array) ->
      runSimulation('epistemic', 'virtue', ['right', 'wrong']) if val is 'epistemic'
      runSimulation('preference', 'fidelity', ['red', 'blue']) if val is 'preference'
      runSimulation('moral', 'character', ['good', 'bad']) if val is 'character'

<script src="assets/d3.v3.min.js"></script>
<script src="assets/dimple.v2.1.2.min.js"></script>
<script src="assets/graph.js"></script>