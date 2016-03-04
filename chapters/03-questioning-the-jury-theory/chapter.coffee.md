# Chapter

Working Title: Competence, Inclusion, and Legitimacy - A New challenge to Condorcet's Jury Theorem

"Competence is not enough!"

## Outline

> I show that even if the average voter competence is greater than 0.5, this is still not enough to justify CJT

This chapter introduces a new challenge to the Jury Theorem.  Condorcet's Jury Theorem (CJT) proves that the likelihood of a simple majority vote on some issue being correct increases to certainty as the number of voters increases to infinity, assuming that the average voter competence is better than 50%.

Demonstrating that the assumption of voter competence holds true in real life proves difficult however.  Ascertaining voter competence empirically requires some independent way of determining the what correct choice is in actual fact.  Yet if this can be known independently, using CJT to justify democracy becomes redundant.  Instead, voter competence is simply presumed by appealing to the the Principle of Charity.  After all, if randomly flipping a coin yields at 50% likelihood of being correct on a binary issue, the addition of even a modicum of reason should increase that likelihood at least a little.

Using computer simulation, I advance Goodin & Estlund's argument for the persuasiveness of democratic majorities and show that diversity of voter competence undermines the Principle of Charity.  To have any plausibility, the PoC should apply equally to indistinguishable polities.  This is not the case however.  Even if the assumptions of CJT hold true for one polity, it is unlikely they hold true for other indistinguishable polities.  Thus, we have even less reason to support the Principle of Charity than previously thought.


## My Argument

  1. If the CJT is used to justify democracy, then a number of conditions need to be satisfied (including average voter competence must be better than random).

  2. The assumptions of CJT must be anonymous to similar polities.

  3. My simulation shows that (whenever CJT is applied to multiple polities), average voter competence is not enough - we also need even distribution of competence.  

  4. Acutal results show that these assumptions do not hold - competence isn't evenly spread.

    - the maths of CJT are symmetrical.  we can infer results -> competence (G&E)
    - there is considerable variation of results in real life showing that competence is inconsistent accross issue and geography. Much more than CJT would imply.
    - the anonymity condition makes the application of assumption of competence impossible (~B -> ~A) 
    

  - imagine Trump wins nationally but not in every state. TX votes red while CA votes blue. in order to use CJT, we need to grant the assumptions of competence and these assumptions must be anonymous - if its granted to TX, then it is granted to CA. But results show that the assumptions weren't satisfied in some states (and possibly nation as a whole).  
  - Different results between similar electorates show that we cant the assumption to some.  And if we can't grant it to some, then we can't grant it to similar others.  Because we don't know which electorates can be granted the assumption a priori, we can't grant it to any!


## Key Texts

The persuasiveness of democratic majorities (Goodin & Estlund)
The Epistemic Conception of Deliberative Democracy (Marti)

Gordon, Stacy B. and Gary M. Segura. 1997. “Cross-National Variation in the Political Sophistication of Individuals: Capability or Choice?” Journal of Politics 59:126-­47.

Group decision-making in animals Nature 421, 155-158 (9 January 2003) | doi:10.1038/nature01294; 

  (Grofman 1975)
  (Grofman 1978)
  (Feld)
  (Owen 1989 - Distribution-Free Generalization of the Condorcet Jury Theorem).
  (List & Goodin)
---

## Introduction

Of all the epistemic justifications of democratic rule, Condorcet's Jury Theorem is perhaps the most famous.  First outlined in the Marquis de Condorcet's 1785 work _Essai sur l’application de l’analyse à la probabilité des décisions rendues à la pluralité des voix_, it offers proponents of democracy a powerful, if somewhat utopian justification of majority rule.  Given a population of independent voters with a better than even chance of being correct on some binary issue, the likelihood of the majority vote being correct approaches certainty as the number of people increase.

> Put roughly: larger groups make better decisions, and very large groups are infallible. p88

Stated formally...

          N
    PN =  Σ (N!/[N–i]!i!)(pc)i (1–pc)N–i
         i=m



The theorem has found a number of contemporary propoents 
  - list them
  - start with Condorcet himself
  - Quotes of it's power...

  ‘Under what conditions will there be a degree of probability that the majority decision of an assembly or tribunal is true ...?’ (Baker, 1967, p. 139)

Of course, Condorcet’s Jury Theorem relies heavily on a number of key assumptions that have not been left unchallenges by critics of epistemic instrumental justifications of democracy.  These can be characterised as assumptions regarding voters and assumptions regarding the choice.

  1. **Voter Independence** Voters’ choices are independent of one another.

> Although Condorcet's conclusion is robust to the presence of some interdependencies between individual votes, the structure of these interdependencies matters (e.g., Boland 1989; Ladha 1992; Estlund 1994; Dietrich and List 2004; Berend and Sapir 2007; Dietrich and Spiekermann 2013). If all individuals' votes are perfectly correlated with one another or mimic a small number of opinion leaders, the collective judgment is no more reliable than the judgment among a small number of independent individuals.

> Ladha’s (1993)

  2. **Voter Homogeneity** Voters are homogeneous, i.e., p, =p= p for all i.
  - relaxed to average voter competence by @Grofman1978
  - use quote by @owen1985
  - (e.g., Grofman, Owen, and Feld 1983; Boland 1989; Kanazawa 1998)

  5. **Voter Competence** The prior odds as to which of the two alternatives is the correct one are even.  

  7. **Voter Sincerity** people vote sincerely

> game-theoretic work challenges an implicit assumption of the jury theorem, namely that voters will always reveal their judgments truthfully...a voter expects a higher chance of bringing about a correct collective judgment by voting against his or her own private judgment than in line with it (Austin-Smith and Banks 1996; Feddersen and Pesendorfer 1998).
  
  3. **Simple Majority** The group decision rule is simple majority.
  
  4. **Dichotomous Choice** There are exactly two alternatives, only one of which is correct.

  - List and Goodin 2001 show "different voting procedures are almost equally good truth-trackers."

  5. **Objectively Correct**

> Many different notions of objectivity are compatible with that assumption, as long as the right, correct or better answer is a fact that is determined entirely independently from the votes of the individuals. This excludes procedural notions of rightness, where the ‘right’ solution is right just because it was arrived at by applying the appropriate procedure. p91
  



> Dietrich (2008) has argued that Condorcet's two assumptions are never simultaneously justified, in the sense that, even when they are both true, one cannot obtain evidence to support both at once.


I am happy to grant the assumptions of choice but I will show that the voter assumptions are insufficient.



## Modelling the Jury Theorem

The epsitemic value of Condorcet's Jury Theorem is typically demonstrated analytically.  (Give examples)

Analytic approaches are not always the most useful implementation though. (Phil of Sim discussion)

Agent based modelling offers something else...(what exactly) - sensitivity

Explain literate programming.

To verify that the agent based model of the jury theorem performs sufficiently well for our needs, we can compare it against an analytic implementation.

Condorcet’s jury theorem calculates the probability that a majority of voters are correct on some issue as a function of the number of voters, the numbers needed for a majority, and the probability that each voter is correct.

> Pn = SUM (n choose h) p^h (1-p)^(n-h)

Implementing this analytically is straight forward, although this approach becomes computationally intractable in javascript once the number of voters increases beyond 1000.

    majority_likelihood = (voters, competence) ->
      majority = Math.floor (voters + 1) / 2
      [majority..voters].map (n) ->
          n_choose_k(voters, n) * Math.pow(competence, n) *
            Math.pow(1-competence, voters - n)
        .reduce (sum, increment) ->
          sum + increment

    n_choose_k = (n, k) ->
      return 1 if k >= n
      [1..k].map (i) ->
          (n-(k-i)) / i
        .reduce (sum, increment) ->
          sum * increment

<figure>
<div id="analytic_jury_theorem" class="graph"></div>
<figcaption>Preference fidelity by partition number</figcaption></figure>


## Problematic assumptions



Explain the ABM with relaxed assumptions.

The multiplicative formula for calculating binomial coefficients is more efficient to compute but even here, the analytic approach is limited by an integer size of 53 bits.  For example, 1000 choose 500 yields approximately 2.7e+299 permutations limiting the calculation of the Condorcet Jury Theorem analytically to just over 1000 voters.

Voters. Voters have competence to be right or wrong on some issue represented as `1` or `0`.


    class Voter
      constructor: (@competence) ->


Voters need to exist somewhere. We will call this the political space.


    class Space
      constructor: (@voters) ->


Now we create voters with a stochastic competence function.


    with_uniform_voters = (desired_number, average_competence) ->
      [1..desired_number].map () ->
        competence = () ->
          if Math.random() < average_competence then 1 else 0
        new Voter competence


We can also relax the unform competency assumption.  The `with_symmetric_voters` function is almost identical to the `with_uniform_voters` function except voter competence is symmetrically distributed around the average competence, with voters then ordered by competence.


    with_symmetric_voters = (desired_number, average_competence) ->
      [1..desired_number].map () ->
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

Start with a way to distribute voters.  Use a modified fisher-yates shuffle.  Take an ordered collection of voters and use a Fisher-Yates substitution to shuffle them.  Use a `skew` value to the determine exactly which elements get shuffled.

    Space::distribute = (skew=1.0) ->
      @voters = shuffle(@voters, skew)
      this

    shuffle = (list, skew=1.0) ->
      i = list.length
      return false if i is 0
      while --i
        if Math.random() < skew
          j = Math.floor(Math.random() * (i+1))
          [list[i], list[j]] = [list[j], list[i]]
      list

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
      test_shuffle(argv[4]) if argv[3] is 'shuffle'

    test_shuffle = () ->
      console.log "------Everybody's Shuffl'n------"
      alphabet = [97..122].map (n) ->
        String.fromCharCode n
      console.log shuffle alphabet

    test_analytic = (c=0.51) ->
      console.log "------Analytic at #{c} competence------"
      [1..20].map (n) ->
        n = n * 50 + 1
        console.log "#{majority_likelihood(n, parseFloat c).toFixed(6)} with #{n} voters"

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

    test_paritions = (c=0.51) ->
      c = parseFloat c

      sim = (space) ->
        [1..1000].map (tick) ->
          polities = space.partition_into 10
          polities.map (polity) ->
              vote(polity)
            .reduce((a,b) -> a + b) / 10

      [0..20].map (d) ->
        d = d * 0.05
        space = new Space(with_symmetric_voters 10000, c).distribute(d)
        console.log "----#{d}----#{space.voters.map((v) -> v.competence()).reduce((a,b) -> a + b) / space.voters.length}"
        space.partition_into(10).map (p) ->
          console.log p.map((v) -> v.competence()).reduce((a,b) -> a + b) / p.length

        winners = sim(space)
        console.log "Uneven  - " + winners.reduce((a,b) -> a + b) / winners.length

        winners = sim(new Space(with_uniform_voters 10000, c).distribute(d))
        console.log "Uniform - " + winners.reduce((a,b) -> a + b) / winners.length

      space = new Space(with_symmetric_voters 10000, c)
      winners = sim(space)
      console.log "No Dist Uneven  - " + winners.reduce((a,b) -> a + b) / winners.length


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
              "Majority Likelihood": majority_likelihood(n, c)
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
