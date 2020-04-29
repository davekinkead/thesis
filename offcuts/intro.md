

## A New Challenge to the Jury Theorem

This chapter introduces a new challenge to the Jury Theorem.  Condorcet's Jury Theorem (CJT) proves that the likelihood of a simple majority vote on some issue being correct increases to certainty as the number of voters increases to infinity, assuming that the average voter competence is better than 50%.

Demonstrating that the assumption of voter competence holds true in real life proves difficult however.  Ascertaining voter competence empirically requires some independent way of determining the what correct choice is in actual fact.  Yet if this can be known independently, using CJT to justify democracy becomes redundant.  Instead, voter competence is simply presumed by appealing to the the Principle of Charity.  After all, if randomly flipping a coin yields at 50% likelihood of being correct on a binary issue, the addition of even a modicum of reason should increase that likelihood at least a little.

Using computer simulation, I advance Goodin & Estlund's argument for the persuasiveness of democratic majorities and show that diversity of voter competence undermines the Principle of Charity.  To have any plausibility, the PoC should apply equally to indistinguishable polities.  This is not the case however.  Even if the assumptions of CJT hold true for one polity, it is unlikely they hold true for other indistinguishable polities.  Thus, we have even less reason to support the Principle of Charity than previously thought.

(Alternatively, I show whenever choices about inclusion need to be made, CDT assumptions don't necessarily hold internally even when they are true externally.)

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


  - computational approaches have much to offer philosophy because they overcome the epistemic limitations associated with complexity, intractability, and emergence.

  - augmented argumentation offers additional benefits because it overcomes the key methodological challenges of simulation, namely reproducability and reliability.
