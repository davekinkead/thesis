---
title: Democracy's Paradox
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: PhD thesis draft
license: All rights reserved
---

So here's the thing.  I've just past my final thesis review and all I need to do now is submit.  The only problem is that I've lost all motivation.  Bugger.

On the bright side though, I've got a paper that's been getting rave feedback by colleagues is currently under review at the Journal of Political Philosophy having made it past a desk rejection.

So I now want to write the world's first computer executable philosophy thesis.  I've got three computational papers in various stages of drafts and have a bunch of ideas for more.  That means I can submit a thesis by partial publication which only requires chapters to be under review, along with additional commentary about the project.

Here's what I think my thesis could look like.

## Introduction

Commentary on my project and 1000 word summary of each paper.

  
## Philosophy & Simulation

Methodology. A lit review and justification of computational approaches to political philosophy.


## A New Challenge to the Jury Theorem

This chapter introduces a new challenge to the Jury Theorem.  Condorcet's Jury Theorem (CJT) proves that the likelihood of a simple majority vote on some issue being correct increases to certainty as the number of voters increases to infinity, assuming that the average voter competence is better than 50%.

Demonstrating that the assumption of voter competence holds true in real life proves difficult however.  Ascertaining voter competence empirically requires some independent way of determining the what correct choice is in actual fact.  Yet if this can be known independently, using CJT to justify democracy becomes redundant.  Instead, voter competence is simply presumed by appealing to the the Principle of Charity.  After all, if randomly flipping a coin yields at 50% likelihood of being correct on a binary issue, the addition of even a modicum of reason should increase that likelihood at least a little.

Using computer simulation, I advance Goodin & Estlund's argument for the persuasiveness of democratic majorities and show that diversity of voter competence undermines the Principle of Charity.  To have any plausibility, the PoC should apply equally to indistinguishable polities.  This is not the case however.  Even if the assumptions of CJT hold true for one polity, it is unlikely they hold true for other indistinguishable polities.  Thus, we have even less reason to support the Principle of Charity than previously thought.

(Alternatively, I show whenever choices about inclusion need to be made, CDT assumptions don't necessarily hold internally even when they are true externally.)


## Instrumental Incompatibility. 


Many accounts of democracy justify political authority by reference to the outcomes of democratic processes.  Democracy brings about good things.  These outcomes might be judged according to some content independent criteria - that say, democracy tracks the truth.  They might be judged according to some content relative criteria - that democracy maximises individual preferences. Or they might be judged according to some content-indifferent criteria - that democracy improves the moral character of its citizens.

The outcomes of these processes however, are a function of who is included in those processes.  Including different people amongst _the people_ can change the outcome of the democratic process.  Sometimes, in the case of knife edge decisions, including or excluding a single voter will result in a different outcome.  Other times, millions of voters would need to be substituted for the result to be different.  How and when different accounts of inclusion affect the outcomes of democratic processes depends on the composition of voters and their distribution across a political space.

Any political association can be constituted differently to how it currently is.  The world is divided into 196 recognised sovereign states but these divisions are arbitrary - the results of the accidents of history.  There is no reason that the world couldn't be divided into 1000 states, 100, 10, or even one (the range could be anywhere between 1 and 7 billion assuming a single person state).  For each set of states, their borders could be draw almost anywhere, even with constraints of contiguity and proportionality imposed (constraints that aren't present in our current political divisions).  And for each potential state, the same potential partitions apply internally as nations are divided into states, and states into local government areas.  Given the multitude of possible political associations, and the fact that different associations will produce different democratic outcomes, some account of democratic inclusion is required for these instrumental accounts.

Different accounts of inclusion will support or undermine different accounts of democracy depending on the composition and distribution of voters.  Different borders will produce different results, and different accounts of democracy require different accounts of inclusion.  Content independent justifications of democracy like Condorcet's or Estlund's for example, require a composition of citizens sufficiently diverse and competent for collective judgement aggregation to outperform some form of epistocracy or even random selection.  Without this diversity within polities, democracy has no epistemic value.

Content-relative justifications of democracy like preference realisation accounts by contrast, require citizens to be sufficiently homogeneous for democratic preference aggregation to have value.  They only work when most voters have similar values (or can at least always work better given some other account of inclusion).  These accounts of democracy require incompatible accounts of inclusion, and given the same demos, the requirements of of only one account of democracy can be met. As such, any account of democracy that is based on the instrumental value of democratic outputs must also offer a corresponding, and congruent, account of inclusion.  Failure to do so will mean that any claim of democratic authority's legitimacy is not warranted.

The dilemma for democracy is that while these instrumental accounts of democracy require the articulation of a supporting account of inclusion, democratic theory cannot offer any answers to the question of inclusion.  That's because any attempt to answer the question of inclusion - who the people ought be - democratically, results in an infinite regress.  Before we can vote on who gets to vote, we must first vote on who gets to vote for who gets to vote.

Neither can non-democratic accounts of inclusion help.  Many of these lack the sufficient normative to justify inclusion of one group over another.  Accounts of inclusion based on nationality, historic accident, linguistic, economic, or cultural salience are like this.  But accounts of inclusion that are sufficiently normative either lack sufficient specificity or enfranchise too many. The all-coerced principle merely says that anyone subject to a law must be included in the law making processes.  This however only says what is necessary for _any_ political association.  

The all-affected principle says that anyone affected by some law should have a say in the matter.  This results in either a single global demos or issue specific demoi.  A global demos is compatible with content-independent instrumental justifications but content-relative ones.  Overlapping demoi are compatible with content-relative instrumental justifications but not content-independent ones.  And neither are compatible with the current Westphalian system of states.  

Thus, no existing democratic state is justifiable on instrumental grounds, and it is doubtful that any democratic state could be.  Not only is it the case that the actual conditions necessary for instrumental accounts to be entailed are not realised, but the inability to identify the most appropriate account of inclusion means instrumental justifications of democratic authority are not internally coherent.


## Egalitarianism and Inequality

Some justifications of democracy are egalitarian.  According to these accounts, democracy has value because it embodies political equality.

But _equality_ is one of those essentially contested terms and a great deal hinges on exactly which conception of equality democracy requires.  One important distinction when considering equality is thinking of it as either _procedurally_ or _substantively_.  

Procedural equality requires treating relevant people the same. It is an agent-blind conception that doesn't make distinctions between agents and treats everyone the same.  

Substantive equality, by contrast, requires that a process actually realises equality.  It permits treating different people differently in order to achieve equality.  

Yet procedural equality is too weak a concept to do the necessary normative work of legitimating democracy.  Why should we care if a process treats people the same when it doesn't actually _realise_ political equality?  If it is actual equality that matters, then we must focus of substantive equality.

In this paper, I want to explore the relationship between procedural and substantive equality and answer the question: 'Under what conditions does procedural equality map substantive equality, and under what conditions does it not?'.  

I will then attempt to demonstrate that egalitarian justifications of democratic authority fail under normal conditions because they cannot reliably produce egalitarian outcomes.

To do this, I'm going to create a computer model of a simple democracy with procedural equality and measure it's substantive equality for a range of parameters.

The model consists of agents who hold stipulated preferences `A`, `B`, `C`, `D`, etc, and who all exist in a single polity.

First, we model three democratic processes that have procedural equality:

  - unanimity voting
  - majority voting
  - sortition

In the voting processes, agents have an equal vote and vote naively according to their preference.  Under sortition, agents have an equiprobable chance of having their preference selected.

We then measure the substantive equality that the democratic processes realise over a range of parameter variable in a Monte Carlo simulation with 1000 trials.  In each trial, agents are created with preferences based on stipulated input parameters, before voting or casting lots as modelled above.

The outcome of the decision procedure is recorded, along with which agents had their preferences realised by the procedure.  This process of agent creation, decision, and measurement is repeated 1000 times to generate a probability density function with frequency based likelihoods that any agent will have their preference realised by a given procedure.

Substantive equality is measured by calculating the standard deviation of the likelihood that an agent's preferences will be realised by a decision process.  The idea here is that a process is substantively equal (SD is low) whenever agents have equiprobable preference realisation.  When it is likely that some agents rather than others will have their preferences realised (SD is high), then a process has little substantive equality.

The first parameter value examined is preference distribution.  We start with a uniformly random distribution of preferences across agents ie. roughly equal numbers of each preference being held.  We then `skew` the distribution of preferences so that more of one preference is common within our _digital demos_.

> The expectation here is that when preferences are evenly distributed, all three procedures will realise substantive equality.  When preferences are skewed, however, we will (hopefully) see voting but not sortition result in persistent minorities, and thus not realise substantive equality.

> Now we have a criteria for saying when sortition is better than majority voting.

Next, we look at preference distribution over time.  Preferences on distinct issues can be consistent or independent.  `Consistency` in preferences here means that if an agent has preference `A` on issue `1`, then they will likely have preference `A` for issue `2`.  We repeat our simulation with both a range of `skew` and `consistency` values.

> The expectation now is that when preferences are consistently skewed, persistent minorities will be present in all procedures.  None of them will realise substantive equality in these circumstances.

Finally, we add influence to the model.  By influence I mean informal political power (the ability to chance other's preferences) as opposed to formal power (the right to vote).  We run the simulation again with influence values ranging from uniform to highly concentrated.

> The expectation here is that influence will undermine substantive equality in even the non-skewed voting processes.  I'm really not sure what will happen for sortition.

> Also for debate here is whether we should treat the influence as resulting in enlightened preference or are others misled. The former requires measuring against final preference while the latter against initial preference.

Will this be enough to seriously challenge egalitarian justifications of democracy? I have a strong hunch that it will undermine the application of these accounts to our actual democracies that use voting rather than sorting and have concentrated informal power structures.

## States of Nature.  

I demonstrate the (in)compatibility of assumptions about the nature of man made by Hobbes, Locke, & Rousseau.


## Conclusion.

And that's that. I may have to change the authority stuff to democracy but why not?
