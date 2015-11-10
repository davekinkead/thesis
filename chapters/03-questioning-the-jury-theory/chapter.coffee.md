# Chapter

Working Title: Competence, Inclusion, and Legitimacy - A New challenge to Condorcet's Jury Theorem

## Outline

This chapter introduces a new challenge to the Jury Theorem.  Condorcet's Jury Theorem (CJT) proves that the likelihood of a simple majority vote on some issue being correct increases to certainty as the number of voters increases to infinity, assuming that the average voter competence is better than 50%.

Demonstrating that the assumption of voter competence holds true in real life proves difficult however.  Ascertaining voter competence empirically requires some independent way of determining the what correct choice is in actual fact.  Yet if this can be known independently, using CJT to justify democracy becomes redundant.  Instead, voter competence is simply presumed by appealing to the the Principle of Charity.  After all, if randomly flipping a coin yields at 50% likelihood of being correct on a binary issue, the addition of even a modicum of reason should increase that likelihood at least a little.

Using computer simulation, I advance Goodin & Estlund's argument for the persuasiveness of democratic majorities and show that diversity of voter competence undermines the Principle of Charity.  To have any plausibility, the PoC should apply equally to indistinguishable polities.  This is not the case however.  Even if the assumptions of CJT hold true for one polity, it is unlikely they hold true for other indistinguishable polities.  Thus, we have even less reason to support the Principle of Charity than previously thought.


## My Argument

  1. If the CJT is used to justify democracy, then voters must be competent.

  - The competency assumption is difficult to demonstrate.
  - The Principle of Charity is offered in lieu of demonstration.

  2. If those assumptions are present, then majorities indicate competence (see Goodin's argument).

  3. If competence was consistent, then majorities would be consistent.

  4. But Majorities aren't consistent, therefore competence isn't consistent.

  5. The presumption of voter competence should be anonymous or polity blind.

  6. Yet given (4), even if assumptions hold for one space, they don't necessarily hold for some other similar partition.

  7. Therefore we have little to justify the presumption of voter competence.


---

## Introduction

Cordorcet's Jury Theorem offers proponents of democracy a powerful, if somewhat utopian justification of majority rule.  Given group of people with a better than even chance of being correct on some issue, then the likelihood of the majority being correct approaches certainty as the number of people increase - assuming of course, some important conditions hold true.

1. Explain CJT

  - What is the CJT
  - How has it been used
  - key assumptions


## Modelling the Jury Theorem

The epsitemic value of Condorcet's Jury Theorem is typically demonstrated analytically.  How?  Give examples.

In what follows, I depart from the tradtional analytic approach and use stochastic Agent Based Modelling.  When/why is this appropriate?

I want to show a new dimesional consideration and sensitivity to it.

Explain literate programming.

An anlytic solution as the base line.

> Pn = SUM (n choose h) p^h (1-p)^(n-h)

    condorcet_likelihood = (voters, competence) ->
      majority = Math.floor (voters+1) / 2
      [majority..voters].map (n) ->
          n_choose_k(voters, n) * Math.pow(competence, n) *
            Math.pow(1-competence, voters - n)
        .reduce (a,b) ->
          a + b

    n_choose_k = (n,k) ->
      return 1 if k >= n
      [1..k].map (i) ->
          (n-(k-i)) / i
        .reduce (a,b) ->
          a * b

<figure>
<div id="analytic_jury_theorem" class="graph"></div>
<figcaption>Preference fidelity by partition number</figcaption></figure>


## Problematic assumptions

CJT relies on key assumptions.  What are they. How have they been challenged.

  - What are the key assumptions
  - Summary of criticisms
  - How have these assumptions been relaxed in later work.

  (Grofman 1978)
  (Feld)
  (Owen 1985 - Distribution-Free Generalization of the Condorcet Jury Theorem).
  (List & Goodin)

Explain the ABM with relaxed assumptions.

The multiplicative formula for calculating binomial coefficients is more efficient to compute but even here, the analytic approach is limited by an integer size of 53 bits.  For example, 1000 choose 500 yields approximately 2.7e+299 permutations limiting the calculation of the Condorcet Jury Theorem analytically to just over 1000 voters.

Voters. Voters have competence to be right or wrong on some issue represented as `1` or `0`.

    class Voter
      constructor: (@competence) ->

Voters need to exist somewhere. We will call this the political space.

    class Space
      constructor: (@voters) ->

Now we create voters with a stochastic competence function.

    with_uniform_voters = (total_number, average_competence) ->
      [1..total_number].map () ->
        competence = () ->
          if Math.random() < average_competence then 1 else 0
        new Voter competence

We can also relax the unform competency assumption.  The `with_symmetric_voters` function is almost identical to the `with_uniform_voters` function except voter competence is symmetrically distributed around the average competence, with voters then ordered by competence.

    with_symmetric_voters = (total_number, average_competence) ->
      [1..total_number].map () ->
          (Math.random() - Math.random()) / 2 + average_competence
        .sort (a,b) ->
          a - b
        .map (comp) ->
          competence = () ->
            if Math.random() < comp then 1 else 0
          new Voter competence

Measure voting outcomes in a space.  In the event of a tie we assume the worst.

    vote = (polity) ->
      correct_votes = polity.map (voter) ->
          voter.competence()
        .reduce (total, competence) ->
          total + competence
      if correct_votes / polity.length > 0.5 then 1 else 0

Demonstrate relaxed CJT results and compare against analytic results with some pretty graphical comparison. --perhaps an interactive graph with analytic, uniform, and symmetic overelayed-- In the meantime, run `coffee filename test analytic` and `coffee filename test uniform` to compare the two.


## Anonymity and the Principle of Charity

  - What grounds do we have for assuming voter competence?
  - What makes the principle of charity warranted
  - These same reasons make the principle of charity anonymous

  7.1 billion people are currently organised into 207 soveriegn polities [cite].  These soverieng states are often divided into smaller polities - states, provinces, and local government areas.  Not all of these are democratic but many are.

  If not for the accidents of history, many of the divisions between these polities, could have been different.  India and Pakistan, and the former Yugoslavian states, might still been being single polities.  Quebec, Scotland, Hong Kong could have become new sovereign polities themselves.  Berlin, and Germany itself, once a single politically entity, was divided for 40 years before being united once again.

  No coherent theory of democratic inclusion exists.  Cover the boundary problem.

  The PoC must be anonymous. It must apply equally to similar polities.  If it applies to some group of polities, it ought apply to any regrouping of those polities.

  > Anonymity: For any admissible profiles <v1, v2, …, vn> and <w1, w2, …, wn> that are permutations of each other (i.e., one can be obtained from the other by reordering the entries), the social decision is the same, i.e., f(v1, v2, …, vn) = f(w1, w2, …, wn). May (1952)

  Anonymity: For any polity formed by a partition rule in which the Principle of Charity is presumed to hold true, the Principle can also be presumed to hold true in any other possible polity formed by the same partition rule.

  Inverse Anonymity: For any polity formed by a partition rule in which the Principle of Charity is cannot be presumed to hold true, it cannot be presumed to hold true in any other possible polity formed by the same partition rule.


## Democratic Inclusion and Voter Competence

Advance the claim that if voter competence as per relaxed CJT is unevenly distributed, then CJT no longer holds.

Start with a way to distribute voters

    Space::distribute = ->
      @voters

Now, some method to partition the space.  We want polities of random size.  Start with the number to divid. Cut it in two by picking a random number between 1 and it. Add the smallest to the list.

    Space::partition_into = (partitions) ->
      polities = [@voters]
      while partitions > 1
        partitions = Math.min partitions, @voters.length
        polity = polities.shift()
        cut = Math.floor( Math.random() * (polity.length - partitions) ) + 1
        polities.push polity[...cut]
        polities.push polity[cut..]
        polities.sort (a,b) -> b.length-a.length
        partitions--
      polities


Then run a monte carlo simulation. 10000 voters into 10 polities.  How often do majorities vote correctly?

    test_paritions = (c=0.51) ->
      c = parseFloat c
      space = new Space with_symmetric_voters(10000, c)
      winners = [1..1000].map (tick) ->
        polities = space.partition_into 10
        polities.map (polity) ->
            vote(polity)
          .reduce((a,b) -> a + b) / 10
      console.log "Uneven  - " + winners.reduce((a,b) -> a + b) / winners.length

      space = new Space with_uniform_voters(10000, c)
      winners = [1..1000].map (tick) ->
        polities = space.partition_into 10
        polities.map (polity) ->
            vote(polity)
          .reduce((a,b) -> a + b) / 10
      console.log "Uniform - " + winners.reduce((a,b) -> a + b) / winners.length

## Competence and its distribution

So how much of a problem is this?  Use empiric data.

Advance Goodin & Estlund's claim.

Show sensitivity to these parameters


## Conclusion

Voter competence isn't homogenous.

We should be skeptical about the Principle of Charity.


---


## Appendix

Test the code

    test = (argv) ->
      console.log "10 choose 5 is #{n_choose_k 10, 5}" if argv[3] is 'n_choose_k'
      test_uniform(argv[4]) if argv[3] is 'uniform'
      test_analytic(argv[4]) if argv[3] is 'analytic'
      test_symmetric(argv[4]) if argv[3] is 'symmetric'
      test_symmetric_dist(argv[4]) if argv[3] is 'symmetric_dist'
      test_paritions(argv[4]) if argv[3] is 'partitions'

    test_analytic = (c=0.51) ->
      console.log "------Analytic at #{c} competence------"
      [1..20].map (n) ->
        n = n * 50 + 1
        console.log "#{condorcet_likelihood(n, parseFloat c).toFixed(6)} with #{n} voters"

    test_uniform = (c=0.51) ->
      console.log "------Uniform at #{c} competence------"
      [1..20].map (n) ->
        n = n * 50 + 1
        results = [1..1000].map () ->
          simulation = new Space with_uniform_voters(n, parseFloat c)
          vote(simulation.voters)
        console.log "#{(results.reduce((a,b) -> a + b) / results.length).toFixed(6)} with #{n} voters"

    test_symmetric = (c=0.51) ->
      console.log "------Symmetric at #{c} competence------"
      [1..20].map (n) ->
        n = n * 50 + 1
        results = [1..1000].map () ->
          simulation = new Space with_symmetric_voters(n, parseFloat c)
          vote(simulation.voters)
        console.log "#{(results.reduce((a,b) -> a + b) / results.length).toFixed(6)} with #{n} voters"

    test_symmetric_dist = (c=0.51) ->
      [1..20].map ->
        results = with_symmetric_voters(1000, parseFloat c).map (voter) ->
            voter.competence()
        console.log (results.reduce((a,b) -> a + b) / results.length).toFixed(6)

Be able to save data to disk

    fs = require 'fs'
    save = (name, results) ->
      dir = "#{__dirname}/assets"
      fs.mkdirSync dir unless fs.existsSync dir
      fs.writeFile "#{dir}/#{name}.json", JSON.stringify(results) , (err) ->
        if err then console.log err

Run some simulations

    analytic_jury_theorem = (results = []) ->
      [1..1000].map (n) ->
        if n % 2 isnt 0
          [30..70].map (c) ->
            c = c/100
            tuple =
              "Voters": n
              "Voter Competence": c
              "Majority Likelihood": condorcet_likelihood(n, c)
            results.push tuple  unless n % 2 is 0
      results

    generate = (argv) ->
      console.log "Generating data for #{argv[3]}"
      save 'analytic', analytic_jury_theorem() if argv[3] is 'analytic'

You can now run any of these simulations to generate their results.

    process.argv.map (val, index, array) ->
      test array if val is 'test'
      generate array if val is 'generate'


<script src="../../assets/d3.v3.min.js" type="text/javascript"></script>
<script src="../../assets/dimple.v2.1.2.min.js" type="text/javascript"></script>
<script src="assets/graph.js" type="text/javascript"></script>
