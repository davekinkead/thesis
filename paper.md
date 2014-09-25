---
title: Authority, Inclusion, & Incompatibility
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: draft
license: CC-BY-SA
bibliography: /Users/dave/Dropbox/Research/Reading Notes/.library.bibtex
---

# Authority, Inclusion, & Incompatibility

### Or why boarders matter for democratic legitimacy

## Introduction

Etymology tells us that democracy means the rule of the common people.  The vast majority of democratic theory focuses on the _kratos_ rather than the _demos_ of _dēmokratia_ - on how the people should be ruled, on the limits to that power, on when that rule is legitimate.  Outside cosmopolitan political theory, only passing attention has been given to the matter of who should be ruled, of who exactly should constitute the _demos_ [^1].  And even less attention has been given to the relationship between who makes up the _demos_ and what justifies or legitimates their _kratos_.


[^1]: A notable exception to this claim is a small but growing body of literature on the _boundary problem_, starting first with @dahl1970, then @whelan1983, @dahl1989, @arrhenius2005, @goodin2007, @erman2011, @näsström2011, @song2012.


This is a mistake because who the people are is a key determining factor in how democratic authority is legitimate.  In this paper, I use computer simulation to examine the relationship between accounts of democratic inclusion and accounts of democratic authority.  With the aid of agent based modelling and stochastic montecarlo simulation, I show that the factors that legitimate democratic authority place specific and differing demands upon accounts of democratic inclusion.  Furthermore, I demonstrate that the differing requirements placed upon accounts of democratic inclusion by different accounts of democratic authority render some accounts of democratic authority incompatible with each other, and therefore ruling out the possibility of certain hybrid justifications of democracy proposed by a number of theorists.


## Democratic Authority

- outline key accounts of authority


## Democratic Inclusion

- outline key accounts of inclusion


## Computer Simulation

- explain the role of simulation


## Modelling Democracy

To explore the relationship between inclusion and authority, we will construct a simple model of an idealised democratic process.  The model is comprised of three entities: _agents_ representing the political participants; a _space_ representing the problem domain in which the agents are distributed across; and _polities_ representing regions of political association in which the space is divided into.

The model is instantiated by assigning an agent profile to the space.  The agent profile specifies the number of agents, their beliefs or preferences, how they are to be distributed across space, and the number of polities the space is to be partitioned into.  Agents can be distributed across the space according to a cluster factor ranging from 0.0, representing a uniformly random distribution, to 1.0 representing a complete clustering by belief or preference.

Figure 1

Figure 2

Figure 3

Once instantiated, the space is partitioned into specified number of polities.  These polities represents a unit of political association that holds some degree of sovereignty regarding specific issues, such as a nation-state, province, or local council.  To demonstrate the effect of differing accounts of democratic inclusions, we randomly partition the space using recursive stochastic algorithm.  

How we partition a space - how we answer the question of democratic inclusion - is the hypothesised factor that promotes or undermines the legitimacy of various accounts of democratic authority.  If different partitions of the space result in different outcomes of the democratic processes we simulate, and if the legitimacy of democratic authority depends on the output of democratic processes, the we will have shown that accounts of democratic authority must be congruent with accounts of democratic inclusion.

After the space is partitioned, we simulate a democratic process in each polity with a simple binary majority vote.  The justification for the choice of this decision mechanism over say, deliberation or alternative voting methods, is pure expedience.  A binary majority vote is the least complex decision procedure to model and the key claim of this paper - that accounts of democratic authority must be congruent with accounts of democratic inclusions - can be sufficiently demonstrated without recourse to more complex processes.

The partition - vote - measure process explained above represents a single trial in the simulation, after which the space is repartitioned according to the stochastic algorithm for a total of 1000 trials.  The simulation is then re-instantiated with different agent profiles so that numerous sets 1000 trials are conducted for various combinations of agent belief / preference ratios, agent clustering, and polity numbers.

The results from the many hundreds of thousands of trials is a probability distribution of the impact of repartitioning a space on voting outcomes, for each of the agent belief-clustering-polity number combinations.  The distribution of voting outcomes are then assessed against three common accounts of democratic authority.


## Epistemic Virtue


## Preference Realisation


## Moral Character





