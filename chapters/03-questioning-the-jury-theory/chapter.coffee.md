# Chapter

Working Title: Competence, Inclusion, and Legitimacy - A New challenge to Condorcet's Jury Theorem

"Competence is not enough!"

## Outline

> I show that even if the average voter competence is greater than 0.5, this is still not enough to justify CJT

Condorcet’s Jury Theorem promises democrats a powerful, mathematical proof of democracy's epistemic value.

This chapter introduces a new challenge to the Jury Theorem.  Condorcet's Jury Theorem (CJT) proves that the likelihood of a simple majority vote on some issue being correct increases to certainty as the number of voters increases to infinity, assuming that the average voter competence is better than 50%.

Demonstrating that the assumption of voter competence holds true in real life proves difficult however.  Ascertaining voter competence empirically requires some independent way of determining the what correct choice is in actual fact.  Yet if this can be known independently, using CJT to justify democracy becomes redundant.  Instead, voter competence is simply presumed by appealing to the the Principle of Charity.  After all, if randomly flipping a coin yields at 50% likelihood of being correct on a binary issue, the addition of even a modicum of reason should increase that likelihood at least a little.

Using computer simulation, I advance Goodin & Estlund's argument for the persuasiveness of democratic majorities and show that diversity of voter competence undermines the Principle of Charity.  To have any plausibility, the PoC should apply equally to indistinguishable polities.  This is not the case however.  Even if the assumptions of CJT hold true for one polity, it is unlikely they hold true for other indistinguishable polities.  Thus, we have even less reason to support the Principle of Charity than previously thought.


## Introduction

Democracy has been justified via a variety of means.  Some democratic theorists claim democratic rule is legitimate because it involves the consent of the people (who).  Others have claim that democracy's legitimacy arises from the way it treats it citizens (who).  Others still say that democracy is justified because ... (who) and there are even those who say democracy can't be justified (wolff, simmons).

One very popular and powerful justificiation of democracy however, is epistemic.  Through the wisdom of the crowds, democracy has the capacity to track the truth, to divine the right answer, and .....

The literature on epistemic democracy is diverse.  Cover it....

Of all the epistemic justifications of democratic rule though, Condorcet's Jury Theorem is perhaps the most famous.  Condorcet’s Jury Theorem (herein CJT) promises to offer democrats a powerful and mathematical rigourous proof of democracy's epistemic value.  First outlined in the Marquis de Condorcet's 1785 work _Essai sur l’application de l’analyse à la probabilité des décisions rendues à la pluralité des voix_, the theorem shows that a majority vote from a large enough group of marginally competent voters is better than a single expert at selecting the best answer to a dichotomous choice.  What's more, as the number of voters increases towards infinity, the likelihood of a majority vote being correct becomes certain. 

The implication of CJT is hard to overstate.  Assuming individuals are better at selecting the correct answer than flipping a coin, then a majority vote of a small town of just a few thousand voters has a near certainty of identifying the correct answer to any binary choice.  Provided of course, certain conditions hold.

It is these necessary conditions, whether they are plausibly obtained in reality, and even their very possibility, that have been the subject of much debate within the literature.  In it's original formulation, CJT requires that _voters' choices are independent of one another_, that _voters are minimally competent_, that their _competence is homogeneous_, and that _voters act sincerely_.  It further requires that the question under consideration is a _dichotomous choice_, has an _objectively correct_ answer, and is determined by a _simple majority_.  These conditions have been both challenged by critics of CJT and relaxed by subsequent proofs.  Yet even if these assumptions were true, are there any plausible scenarios that would prevent CJT from being used to justify democracy?  I believe there are. 

--->???

Imagine a democracy in which all the necessary conditions of a CJT hold tue.  If this is the case, then a majority vote on any dichotomous choice is nearly certain to identify the best option.  Now imagine that same democracy paritioned into smaller political units - states, provinces, or electorates.  If the CJT conditions hold true for each partition, then each partition should also select the best option with near certainty.  

Yet this is rarely the case in reality.  Different partitions of the same democracy vote differently in almost every poltical decision.  Given this reality, at least one of the CJT conditions in some of the partitions must therefore not hold true.  But which?

In Part One, I examine the assumptions of CJT in detail and develop an agent based model that visually demonstrates the epistemic virtue of CJT and validate it against the tradition analytic model normally found in the literature.  In Part Two, focus on the competence assumption and principle of charity which is typically invoked to justify it.  

I then introduce the concept of political partitions - states, provinces, and electoratal boundaries - and extend the model to incorporate this reality.....

In this paper, I demonstrate how the distribution of voter competence in a democracy determines how likely the voter competence condition holds true in any partition of that democracy.  I show that the more voter competence is clustered, the less the likelihood that any parition satisfies the voter competence condition.

But how do we justify that the voter competence condition is satisfied in the first place?  To do so, supporters of CJT face nearly insurmountable challenges and thus typically resort to the principle of charity - that surely the average voter is at least marginally more competent that the toss of a coin.

While the principle of charity sets a rather low epistemic bar to overcome, it also comes with another requirement - that it should be anonymous between polities.  To have any plausibility whatsoever, the principle of charity should apply equally to indistinguishable polities - if it is applied to one polity, it must be applied to all similar polities.

As both empiric data and my simulation show however, different results from indistinguishable polities undermine the claim that the voter competence condition is satisfied in amongst like polities.  Ergo, if we can't apply the principle to one polity, we can't apply it to similar ones.  Thus, it seems that the principle of charity offers little justification for the claim that voters are competent. And without this condition satisfied, CJT fails to deliver on its promise.


## Condorcet's Jury Theorem

--> better segway

The epsitemic value of Condorcet's Jury Theorem is typically demonstrated analytically (see XYZ).  @baker1976 for example, provides the seminal contemorary formuation:

>        N
>  PN =  Σ (N choose h) p^h (1-p)^(N-h)
>       h=m
  
Where: 

>  N  = number of voters in the group (for simplicity, N will generally be taken to be >odd);
>  m  = a majority = (N + 1)/2 for N odd;
>  p  = justdgement competence of a voter in a homogeneous group
>  PN = probability that at least a majority of voters will make the correct choice in a dichotomous choice situation;

The normative implications of this formula are difficult to overstate.  Assuming that individuals are more competent at selecting the better of a dichotomous choice than the random toss of a coin, the majority vote by a large group of people will be better at selecting the best choice than that of an individual expert.  What's more, as the number of voters increases, the likelihood that the majority select the better option approaches certainty - a village of 1000 barely competent voters would have a 72% certainty of selecting the best option; a town of 10000 has 99.97% certainty.

If certain important conditions are satisfied, that is.

these conditinos....


State the assumptions

  1. **Voter Independence** Voters’ choices are independent of one another.

  2. **Voter Homogeneity** Voters are homogeneous, i.e., p, =p= p for all i.

  5. **Voter Competence** The prior odds as to which of the two alternatives is the correct one are even.

  7. **Voter Sincerity** people vote sincerely
  
  3. **Simple Majority** The group decision rule is simple majority.
  
  4. **Dichotomous Choice** There are exactly two alternatives, only one of which is correct.

  5. **Objectively Correct** There is an objectively correct answer.

Who has relaxed them.

Who has challenged them.


## Modelling Condorcet’s Jury Theorem


The epsitemic value of Condorcet's Jury Theorem is typically demonstrated analytically (see XYZ).  Yet analytic approaches are not always the most useful implementation though. (Phil of Sim discussion)

Agent based modelling offers something else...(what exactly) - sensitivity (list has honey bee paper)

A first step in agent based modelling however is to test the validity of it against an analytic approach.  This will give us confidence when we start to look at sensitivity and introduce new variables. To verify that the agent based model of the jury theorem performs sufficiently well for our needs, we can compare it against an analytic implementation.  This is in the annex


We being by modelling voters and ensure that the necssary CJT voter conditions are met _ex ante_ by stipulating them in the model.  Our model consists of a `Democracy` that is populated by `Voters`


    class Democracy
      constructor: (@voters) ->


Voters themselves are constructed with a `competency` value between `0.0` and `1.0` representing the likelihood they vote correctly on some dichotomous choice.


    class Voter
      constructor: (@competence) ->


 Voters vote _sincerely_ and _independently_ of others.  Voting is a stochastic function based on their competence.  The higher their competence, they more likely they are to vote correctly.  The choice is _dichotomous_ and _objective_ _ex vi termini_.


    Voter::vote = () ->
      if @competence >= Math.random() then 'correct' else 'incorrect'


The decision procedure for the collective choice is a _simple majority_.  If a majority of Voters vote correctly, then so does the Democracy.


    Democracy::simple_majority = () ->
      correct_voters = @voters.filter (voter) ->
        voter.vote() == 'correct'
      if correct_voters.length > @voters.length / 2 then 'correct' else 'incorrect'


With these four elements in place, all that is left to do is create a democracy, populate it with voters, and hold a vote.


    with_homgeneous_voters = (desired_number, competence) ->
      [1..desired_number].map () ->
        new Voter(competence)


Running the simulation 1000 times shows us the likelihood that a simple majority gets it right.

Graph here and analysis....

    results = {correct: 0, incorrect: 0}
    [1..1000].map (n) ->
      democracy = new Democracy with_homgeneous_voters(11, 0.9)
      results[democracy.simple_majority()]++
    console.log results


---> Demonstrate that CDJ works

## Voter Competence & Anonymity


> A popular government, without popular information, is but a Prologue to a Farce or Tragedy, or perhaps both.  

> -- James Madison

Of all the assumed conditions of CJT, the most plausible is that of voter competence.

An all too common complaint in the politial literature is that voters are woefully ill-informed and thus incapable of making competent political decisions.  Numerous political surveys from the 20th century show "that popular levels of information about public affairs are, from the point of view of an informed observer, astonishingly low" (@converse1975 p79).  Voters are "poorly informed and ill-equipped to select the best candidate" in elections (@patterson1993 p52).

Popular retreat from public issues has coincied with an increasingly interconnected and complex world.  National policies have global impact .... thereby placing increasingly difficult, if not impossible intellectual demands on the average voter.

@downs1952  rational ignorance

> there is surely some line of willful ignorance that, once crossed, crosses out democracy itself @schudson1999 p311

Of course, many of these criticisms can be put down to elitism - the political classes simply blaming their losses on voters @lupia2006 p1 

Low information rationality can help voters make informed choices but this relies on the advice of others, thereby undermining the independence condition.

> Reasoned choice does not require full information @lupia1998 p2  

The challenge for supporters of CJT is obvious.  CJT is a double edged sword for democracy - just as large numbers of marginally competent voters makes a majority choice almost certainly correct, large numbers of marginally incompentent voters makes the same choice almost certainly incorrect.  Satisfying the voter competence conditition is essential not only for justifying democracy on epistemic grounds, but also for preventing CJT from undermining justifications of democracy.  Proponents of CJT must be justified in claiming that voters are, on average, competent.

Yet demonstrating that the competence condition is satisfied does little to help.  To do so requires some independent methods of determining either the competence of voters or the correct answer to the question under consideration. ....

If we have prior knowledge of voter competence, then universal franchise is not only unnecessary but a gross waste of resources (Brennan makes a similar point) if epistemic accuracy is our goal.  Elections and referenda incur significant social costs.  The proposes marriage equality peblecite is estimates to cost over $500 million while the 2012 presidential elections cost more that $2.1 billion.  A vote by a handful of experts whose competency is known performs (epistemically) just as well as a vote of tens of thousands marginally competent citizens but at a fraction of the cost.

Alternatively, if we have prior knowledge of the correct choice, then CJT offers no additional epistemic value.  Why vote on a question whose answer is already known?  The questions that need to be put to a vote, the questions about which CJT promises so much about, are the ones to which the answer is contested in the first place.  Being able to conclusively demonstrate that the voter competence condition is satisfied voids any epistemic value that CJT offers. 

Instead, the voter competence condition must simply be presumed.  But on what grounds?

Firstly, the condition sets a very low standard to be acheived.  Can you reason better than a coin toss?

Instead, we might use a version of the principle of charity - "we ought (unless we have some special story to tell about how this case is unusual) ordinarily suppose that our fellow citizens are more likely to be right than wrong, and therefore that the winning outcome is quite probably the correct one." @goodin2004 p136

---

Let's assume for the time being that we are justified in using the principle of charity to presume that the voter competence condition is satisfied - that the average voter is at least marginally better than tossing a coin at selecting the best answer to a dichtomous question.  If so, then what follows from this?

Much of democratic theory's scope of analysis is the polity - a single body politic whose political boundaries also form the boundaries of analysis.  In this sense, democratic theory is internally focused or inward looking.  Now this is not to say that democratic theory doesn't consider trans-national or trans-border issues - only that for any given theory, if it applies in one democracy, it should apply in anothers.  CJT is no different. It focuses on a single, abstract democracy.

--> I'm trying to say the theory is singular

Yet our actual political landscape by contrast is plural.  Our planet is divided into nation-states. Nations states are divided into provinces or states.  These are then divided into electorates.  In short, our political reality is partitioned.

The application of a singular abstract theory to a plural reality requires the invocation of another principle - that of anonymity [^anon].  By anonymous, I mean that the assumption of voter competence should be neutral or blind between polities which have the same or similar evidence of (or lack thereof) voter competence.


[^anon]: I choose the term _anonymity_ as it is widely used in social choice theory for the apropos condition regrading individual voters, i.e. The group decision function treats each voter identically.  See @may1952 p681 and ..


Principle of Anonymity:

> If the principle of charity presumes voter competence in one polity, then it must also presume voter competence in other similar polities.

The inverse must also be true:

> If the principle of charity cannot presume voter competence in other similar polities, then it cannont be presumed in one polity.

An example may help.  If we can presume that voters are competent in Nevada, then we must presume they are competent in New Hampshire.  If they are competent in Australia, then they must be competent in Antugia.  Provided of course, there is no other evidence that the voters of one polity are more competent than another.


Simulate partitioning.

Results!


  Anonymity: For any polity formed by a partition rule in which the Principle of Charity is presumed to hold true, the Principle can also be presumed to hold true in any other possible polity formed by the same partition rule.

  Inverse Anonymity: For any polity formed by a partition rule in which the Principle of Charity is cannot be presumed to hold true, it cannot be presumed to hold true in any other possible polity formed by the same partition rule.

---






## The Equivalence of Analytic and Agent Based Models of Condorcet’s Jury Theorem

It would be terribly embarrissing for the conclusions of this paper to have been derived from some careless coding error.  A simple typo could lead to ...., a calculation could be ..., or ....

Concerns over the model's validity can be placated a number of ways.  Literate progamming is one way to validate the model _ex post facto_.  Explicitly embedded in the paper itself, the code can be inspected by and all and the simulation run by anyone reading the paper.  

This approach in isolation however, only serves to indentify if something is wrong.  It cannot demonstrate if the simulation is right.  To demonstrate such fitness, the agent based model must be compared against a known model.  If both models deliver the same result (or at least statistically similar results given that the ABM approach uses the Monte Carlo method), we can confidently claim that the model is _validated_.

The epsitemic value of Condorcet's Jury Theorem is typically demonstrated analytically (see XYZ).  Let's being with Bakers's 1976 formulation of CJT:


    #        N  
    #  PN =  Σ (N choose h) p^h (1-p)^(N-h)  
    #       h=m  
  
Where: 

  - N  = the number of voters in the group (for simplicity, N will generally be taken to be >odd)  
  - m  = a majority or (N + 1)/2 for N odd  
  - p  = the jusdgement competence of a voter in a homogeneous group  
  - PN = the probability that at least a majority of voters will make the correct choice in a dichotomous choice situation  

The CJT states that the number of voters needs to be odd so we first enforce this and determine the corresponding majority.  We will use the function below to perform this check and return a range from the majority point to the total number of voters.


    an_odd_majority = (number_of_voters) ->
      number_of_voters = if number_of_voters % 2 is 1 then number_of_voters else number_of_voters + 1
      majority_point = (number_of_voters + 1) / 2
      [majority_point..number_of_voters]


We can then formalise the majority likelihood as a function of the number of voters and their competence.  For each voter in the majority, we calculate the binomial coefficient and likelihood for the individual voter, and then sum the results.


    majority_likelihood = (number_of_voters, voter_competence) ->
      an_odd_majority(number_of_voters)
        .map (voter) ->
          n_choose_h(number_of_voters, voter) * 
          Math.pow(voter_competence, voter) * 
          Math.pow(1-voter_competence, number_of_voters - voter)
        .reduce (sum, increment) ->
          sum + increment


Implementing this analytically is straight forward, although this approach becomes computationally intractable in javascript once the number of voters increases beyond 1000.  Javascript's integers are constrainted to 2^53 while for example, 1000 choose 500 yields approximately 2.7e+299 permutations.  This limits the calculation of the Condorcet Jury Theorem analytically to just over 1000 voters with this algorithm [^other].

[^other]: Even specialised languages such as Mathematica are only able to calculate update 5000 voters.



    n_choose_h = (n, h) ->
      return 1 if h >= n
      [1..h].map (i) ->
          (n-(h-i)) / i
        .reduce (sum, increment) ->
          sum * increment

    console.log majority_likelihood 1000, 0.51




# Now we create voters with a stochastic competence function.

#     with_uniform_voters = (desired_number, average_competence) ->
#       [1..desired_number].map () ->
#         competence = () ->
#           if Math.random() < average_competence then 1 else 0
#         new Voter competence


# We can also relax the unform competency assumption.  The `with_symmetric_voters` function is almost identical to the `with_uniform_voters` function except voter competence is symmetrically distributed around the average competence, with voters then ordered by competence.


#     with_symmetric_voters = (desired_number, average_competence) ->
#       [1..desired_number].map () ->
#           (Math.random() - Math.random()) / 2 + average_competence
#         .sort (a,b) ->
#           a - b
#         .map (comp) ->
#           competence = () ->
#             if Math.random() < comp then 1 else 0
#           new Voter competence


# Measure voting outcomes in a space.  In the event of a tie we assume the worst.


#     vote = (polity) ->
#       correct_votes = polity.map (voter) ->
#           voter.competence()
#         .reduce (total, competence) ->
#           total + competence
#       if correct_votes / polity.length > 0.5 then 1 else 0


# Demonstrate relaxed CJT results and compare against analytic results with some pretty graphical comparison. --perhaps an interactive graph with analytic, uniform, and symmetic overelayed-- In the meantime, run `coffee filename test analytic` and `coffee filename test uniform` to compare the two.


# ---



# ### Competence is not evenly distributed

#   4. The POC is not anonymous to indistinguishable polities.

#     - introduce competence distribution
#     - we are not justified in applying the POC to indistinguishable polities!!! 
#     - goodin & real life results

#     - the maths of CJT are symmetrical.  we can infer results -> competence (G&E)
#     - there is considerable variation of results in real life showing that competence is inconsistent accross issue and geography. Much more than CJT would imply.
#     - the anonymity condition makes the application of assumption of competence impossible (~B -> ~A) 


# Advance the claim that if voter competence as per relaxed CJT is unevenly distributed, then CJT no longer holds.

# Start with a way to distribute voters.  Use a modified fisher-yates shuffle.  Take an ordered collection of voters and use a Fisher-Yates substitution to shuffle them.  Use a `skew` value to the determine exactly which elements get shuffled.

#     Space::distribute = (skew=1.0) ->
#       @voters = shuffle(@voters, skew)
#       this

#     shuffle = (list, skew=1.0) ->
#       i = list.length
#       return false if i is 0
#       while --i
#         if Math.random() < skew
#           j = Math.floor(Math.random() * (i+1))
#           [list[i], list[j]] = [list[j], list[i]]
#       list

# Now, some method to partition the space.  We want polities of random size.  Start with the number to divid. Cut it in two by picking a random number between 1 and it. Add the smallest to the list.

#     Space::partition_into = (partitions) ->
#       polities = [@voters]
#       while partitions > 1
#         partitions = Math.min partitions, @voters.length
#         polity = polities.shift()
#         cut = Math.floor( Math.random() * (polity.length - partitions) ) + 1
#         polities.push polity[...cut]
#         polities.push polity[cut..]
#         polities.sort (a,b) -> b.length-a.length
#         partitions--
#       polities


# Then run a monte carlo simulation. 10000 voters into 10 polities.  How often do majorities vote correctly?



# ## Conclusion

#   5. Therefore we are not justified in applying the POC


# - We can't use CJT to justify democracy without knowing competency (or making selecting electorate boundaries for it.)







# ## Key Texts

# The persuasiveness of democratic majorities (Goodin & Estlund)
# The Epistemic Conception of Deliberative Democracy (Marti)

# Gordon, Stacy B. and Gary M. Segura. 1997. “Cross-National Variation in the Political Sophistication of Individuals: Capability or Choice?” Journal of Politics 59:126-­47.

# Group decision-making in animals Nature 421, 155-158 (9 January 2003) | doi:10.1038/nature01294; 

#   (Grofman 1975)
#   (Grofman 1978)
#   (Feld)
#   (Owen 1989 - Distribution-Free Generalization of the Condorcet Jury Theorem).
#   (List & Goodin)

# ---


# ## Appendix


# ---> Move this to the annex




# <figure>
# <div id="analytic_jury_theorem" class="graph"></div>
# <figcaption>Preference fidelity by partition number</figcaption></figure>




# Test the code

#     test = (argv) ->
#       console.log "10 choose 5 is #{n_choose_k 10, 5}" if argv[3] is 'n_choose_k'
#       test_uniform(argv[4]) if argv[3] is 'uniform'
#       test_analytic(argv[4]) if argv[3] is 'analytic'
#       test_symmetric(argv[4]) if argv[3] is 'symmetric'
#       test_symmetric_dist(argv[4]) if argv[3] is 'symmetric_dist'
#       test_paritions(argv[4]) if argv[3] is 'partitions'
#       test_shuffle(argv[4]) if argv[3] is 'shuffle'

#     test_shuffle = () ->
#       console.log "------Everybody's Shuffl'n------"
#       alphabet = [97..122].map (n) ->
#         String.fromCharCode n
#       console.log shuffle alphabet

#     test_analytic = (c=0.51) ->
#       console.log "------Analytic at #{c} competence------"
#       [1..20].map (n) ->
#         n = n * 50 + 1
#         console.log "#{majority_likelihood(n, parseFloat c).toFixed(6)} with #{n} voters"

#     test_uniform = (c=0.51) ->
#       console.log "------Uniform at #{c} competence------"
#       [1..20].map (n) ->
#         n = n * 50 + 1
#         results = [1..1000].map () ->
#           simulation = new Space with_uniform_voters(n, parseFloat c)
#           vote(simulation.voters)
#         console.log "#{(results.reduce((a,b) -> a + b) / results.length).toFixed(6)} with #{n} voters"

#     test_symmetric = (c=0.51) ->
#       console.log "------Symmetric at #{c} competence------"
#       [1..20].map (n) ->
#         n = n * 50 + 1
#         results = [1..1000].map () ->
#           simulation = new Space with_symmetric_voters(n, parseFloat c)
#           vote(simulation.voters)
#         console.log "#{(results.reduce((a,b) -> a + b) / results.length).toFixed(6)} with #{n} voters"

#     test_symmetric_dist = (c=0.51) ->
#       [1..20].map ->
#         results = with_symmetric_voters(1000, parseFloat c).map (voter) ->
#             voter.competence()
#         console.log (results.reduce((a,b) -> a + b) / results.length).toFixed(6)

#     test_paritions = (c=0.51) ->
#       c = parseFloat c

#       sim = (space) ->
#         [1..1000].map (tick) ->
#           polities = space.partition_into 10
#           polities.map (polity) ->
#               vote(polity)
#             .reduce((a,b) -> a + b) / 10

#       [0..20].map (d) ->
#         d = d * 0.05
#         space = new Space(with_symmetric_voters 10000, c).distribute(d)
#         console.log "----#{d}----#{space.voters.map((v) -> v.competence()).reduce((a,b) -> a + b) / space.voters.length}"
#         space.partition_into(10).map (p) ->
#           console.log p.map((v) -> v.competence()).reduce((a,b) -> a + b) / p.length

#         winners = sim(space)
#         console.log "Uneven  - " + winners.reduce((a,b) -> a + b) / winners.length

#         winners = sim(new Space(with_uniform_voters 10000, c).distribute(d))
#         console.log "Uniform - " + winners.reduce((a,b) -> a + b) / winners.length

#       space = new Space(with_symmetric_voters 10000, c)
#       winners = sim(space)
#       console.log "No Dist Uneven  - " + winners.reduce((a,b) -> a + b) / winners.length


# Be able to save data to disk

#     fs = require 'fs'
#     save = (name, results) ->
#       dir = "#{__dirname}/assets"
#       fs.mkdirSync dir unless fs.existsSync dir
#       fs.writeFile "#{dir}/#{name}.json", JSON.stringify(results) , (err) ->
#         if err then console.log err

# Run some simulations

#     analytic_jury_theorem = (results = []) ->
#       [1..1000].map (n) ->
#         if n % 2 isnt 0
#           [30..70].map (c) ->
#             c = c/100
#             tuple =
#               "Voters": n
#               "Voter Competence": c
#               "Majority Likelihood": majority_likelihood(n, c)
#             results.push tuple  unless n % 2 is 0
#       results

#     generate = (argv) ->
#       console.log "Generating data for #{argv[3]}"
#       save 'analytic', analytic_jury_theorem() if argv[3] is 'analytic'

# You can now run any of these simulations to generate their results.

#     process.argv.map (val, index, array) ->
#       test array if val is 'test'
#       generate array if val is 'generate'


# <script src="../../assets/d3.v3.min.js" type="text/javascript"></script>
# <script src="../../assets/dimple.v2.1.2.min.js" type="text/javascript"></script>
# <script src="assets/graph.js" type="text/javascript"></script>
