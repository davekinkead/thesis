# Chapter

Working Title: Competence, Inclusion, and Legitimacy - A New challenge to Condorcet's Jury Theorem

"Competence is not enough!"

> A popular government, without popular information, is but a Prologue to a Farce or Tragedy, or perhaps both.  

> -- James Madison

## Abstract

> I show that even if the average voter competence is greater than 0.5, this is still not enough to justify CJT

Condorcet’s Jury Theorem promises democrats a powerful, mathematical proof of democracy's epistemic value.

This chapter introduces a new challenge to the Jury Theorem.  Condorcet's Jury Theorem (CJT) proves that the likelihood of a simple majority vote on some issue being correct increases to certainty as the number of voters increases to infinity, assuming that the average voter competence is better than 50%.

Demonstrating that the assumption of voter competence holds true in real life proves difficult however.  Ascertaining voter competence empirically requires some independent way of determining the what correct choice is in actual fact.  Yet if this can be known independently, using CJT to justify democracy becomes redundant.  Instead, voter competence is simply presumed by appealing to the the Principle of Charity.  After all, if randomly flipping a coin yields at 50% likelihood of being correct on a binary issue, the addition of even a modicum of reason should increase that likelihood at least a little.

Using computer simulation, I advance Goodin & Estlund's argument for the persuasiveness of democratic majorities and show that diversity of voter competence undermines the Principle of Charity.  To have any plausibility, the PoC should apply equally to indistinguishable polities.  This is not the case however.  Even if the assumptions of CJT hold true for one polity, it is unlikely they hold true for other indistinguishable polities.  Thus, we have even less reason to support the Principle of Charity than previously thought.


## Introduction

Democracy has been justified via a variety of means.  Some democratic theorists claim democratic rule is legitimate because it involves the consent of the people (@locke1689).  Others have claim that democracy's legitimacy arises from the way it treats it citizens (who).  Others still say that democracy is justified because ... (who) and there are even those who say democracy can't be, or at least is yet to be, justified (@wolff1970, @simmons1976).

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

The normative implications of this formula are difficult to overstate.  As long as individuals are better at selecting the best option from a dichotomous choice than the random toss of a coin, then a majority vote by a large group of people will be better at selecting the best choice than that of an individual expert.  What's more, as the number of voters increases, the likelihood that the majority select the better option approaches certainty - a village of 1000 barely competent voters would have a 72% certainty of selecting the best option; a town of 10000 has 99.97% certainty.

If certain important conditions are satisfied, that is.

Exactly what those conditions are, whether they are plausibly realised, or whether they are even possible, has been the subject of much debate in the CJT literature.  While Condorcet himself only listed a few necessary conditions for his theorem, @baker1976, who re-ignigted academic interest in the theorem and subsequent scholars, have made futher implicit assumptions explicit:

  1. **Voter Competence** - voters have a better than random chance of selecting the correct alternative.

  2. **Voter Homogeneity** - all voters have the same likelihood of selecting the correct alternative.

  3. **Voter Independence** - voters' choices are independent of one another.

  4. **Simple Majority** - the group decision rule is a simple majority vote.

  5. **Dichotomous Choice** - there are exactly two alternatives, only one of which is correct.

  6. **Voter Sincerity** - voters share a common objective and vote according to their belief as to which alternative is the best.

  7. **Objectively Correct** - there is an objectively correct answer.

Contemporary work on CJT has resulted in both the generalisation and challenging of these conditions, with these challenges being both analytic and empiric.

The requirement for **Voter Competence** is essential as the CJT has symetric implications.  While large enough majorities are almost certain to select the correct alternative when their competence is better than 50%, they are also nearly certain to select the incorrect alternative when their competence is worse than 50%.....

@Paroush1998 Paroush relaxes the competence requirement so that individual competence is bounded away from 0.5.  Individuals who are almost close to 0.5 do not (necessarily) contribute to the democratic decision making process. p19

The competence difference between type I and II errors must not be too extreme. @kirstein2006 p11 demonstrates that a probability of a correct decision which is greater than 0.5 is neither sufficient, nor necessary for the jury decision to have higher quality than an individual decision.

@list2004 List derives a more generalised version of the CJT that reinforces the importance of the absolute margin p(H|E) vs p(~H|E) but that this also depends on the prior p(H). The significance of the absolute margin can be reduced if the assumption of symmetric jurior competence is relaxed.

@baker1976's original proof required **Voter Homogeneity** - that voters had the same competence as each other. This rather strict and empricially implausible requirement has since been relaxed in a number of ways.  @grofman1978 (p3) generalized the Condorcet Jury Theorem for normally distributed voter competence rather than voter homogeneity. @owen1989 later generalized the Theorem for distribution free results (except for knife edges when voter competence was very close to random).  As long as _average_ voter competence is better than random, CJT is still valid.

The importance of difference has also been proved in a variety of ways.  @kanazawa1998 demonstrated that heterogeneous groups are better than homogeneous ones at selecting the correct alternative for any given level of average competence greater than random.  @fey2003 examined the sensitivity of competence to majories and showed that, in large enough electorates, the CJT holds as long as the average competence of the voters is greater than the fraction of votes needed for passage.  @kaniovski2010 demonstrated that a negative correlation of voter competence increases the competence of the majority, while positive correlation decreases it. 

While heterogeneity can obviously exist between voters, it can also exist within them.  @kirstein2006 examined how individual differences between type I and II errors affects majority competence and demonstrated that groups with average competence below random can still outperform competent individuals, provided they have positive detection skills and are not too biased towards either type I or II errors.  More recently, @stone2014 has shown that opposite forms of bias within groups can be used to enhance majority competence.  Rather than relying on voter homogeneity, these recent ehancments to CJT show how voter diversity strengthens the epistemic claims of democracy.

More voters with higher competence increases the likelihood of a majority being correct but this relies on **Voter Independence**.  If average voter competence is high, but all voters just take their lead from a single expert, then a majority vote will have no more epistemic value than that of the single expert.  

No actual democracy can satisfy this requirement though.  Politics is a collective endeavour where people attempt to pursuade and cajole others.  Some dependency is inevitable whenever voters have access to the same information and watch the same media.  Luckily however, the requirement for voter independence is not strict.

@boland1989 generalized the CJT for when voter competence varies and there is some dependence between voters. The empistemic value of majority voting is reduced by dependence but not fatally so.  Increasing the dependence between voters has the same effect as decreasing the number of voters, so some dependency can be overcome with larger groups.  @ladha1992 further generalised the CJT for correlated votes amongst individuals who share a common goal. The likelihood that the majority is correct is inversely related to the averages of the coefficients of correlation, showing again the that opposing views are critical to democratic function.  He further proved teh CJT for symmetrically dependent votes (@lahda1993).

@berg1993 It is shown that negative intra-voter correlation improves on jury competence in the sense that the probability of a correct decision increases. Positive correlation, on the other hand, tends to decrease jury competence. Although dependence among jury members has the effect that jury competence no longer approaches infallibility as the size of the jury increases, jury competence is still better than individual competence.


**Simple Majority** The group decision rule is simple majority.

@Ben-Yashar1997 For equally skilled voters, the optimal pairwise decision procedure is qualified majority rule.  In an uncertain dichotomous choice setting, the optimal procedure is qualified weighted majority rule. p185

@Kanazawa1998 I also extend CJT to collective decision rules other than simple majority, and show that CJT holds for groups with supermajority decision rules if the mean individual competence is at least (π(n+1)/n) (where π=required majority).  The implication here is that simple majorities require a lower competence than super majorities. 


**Dichotomous Choice** There are exactly two alternatives, only one of which is correct.

@list2001 Generalizing the Condorcet Jury Theorem for a variety of decision procedures and choices. So long as the number of voters is reasonably large, virtually any of the social decision rules which have been commonly employed or recommended on democratic-proceduralist grounds seem to perform reasonably well (and nearly as well as any other) on epistemic-democratic grounds.


@Dietrich2008 I carefully analyse these premises and show that: (i) whether a premise is justified depends on the notion of probability considered and (ii) none of the notions renders both premises simultaneously justified. Under the perhaps most interesting notions, the independence assumption should be weakened. p56 in each case exactly one of the premises is not justified." p56

@ben2014 This paper studies the effect of adding two members who have two probabilities of voting correctly, p1 > 1/2 in one state and p2 < 1/2 in the other. We show that such an addition, for large groups, usually results in decreasing the likelihood of reaching a correct collective decision. Our conclusion is valid even-though we assume that the average of the two probabilities of each member exceeds 1/2. Our result is surprising because the particular homogeneity assumption of Condorcet implies that the addition of members increases the probability that the group will choose the correct collective decision through majority voting. Under the generalized homogeneity assumption this is no longer the case. p240


**Voter Sincerity**.  Voters must vote sincerely based on their belief as to which alternative is the best.  Voters do not engage in strategic voting.

@Austen-Smith1996 Condorcet’s Jury Theorem relies on the assumption that voting is sincere.  Austen-Smith and Banks show that sincere behaviour by all individuals is not even rational even when a common preference is held.

**Objectively Correct** There is an objectively correct answer.

- epistemic assumption but non-epistemic democrats disagree



## Modelling Condorcet’s Jury Theorem

The epsitemic value of Condorcet's Jury Theorem is typically demonstrated analytically.  For example, @baker1976's formulation outlined earlier is:


    #        N  
    #  PN =  Σ (N choose h) p^h (1-p)^(N-h)  
    #       h=m  
---> use mathjax

Yet analytic approaches are not always the most useful implementation though.  One reason for this is that analytic approaches are often computationally intractable.  The binomial coefficient _n choose h_ above is one such example.  For example, the multiplicative formula:

![Binomial coefficient multiplicative formula](https://upload.wikimedia.org/math/d/c/5/dc50ea2ca1b3c2e0de642b13d071faf6.png)

We can implement this in coffeescript using a map reduce as:


    n_choose_h = (n, h) ->
      return 1 if h >= n
      [1..h].map (i) ->
          (n-h+i) / i
        .reduce (sum, increment) ->
          sum * increment


While the code above is simple enough, this analtyic approach becomes problematic once the number of voters, _n_, increases beyond 1000.  Javascript's integers, which the Coffeescript above transpiles to, are limited to 2^53 bits in size but 1000 choose 500 for example, yields approximately 2.7e+299 permutations.  This limits the calculation of the Condorcet Jury Theorem analytically to just over 1000 voters with this algorithm [^other].

[^other]: Even specialised languages such as Mathematica are only able to calculate up to 5000 voters.

Another limitation of analytical approaches is that they lack the flexibility to explore the effects of changed assumptions .... sensitivity analysis ... For this reason, we will employ an agent based approach to modelling the Jury Theorem.

Of course, it would be terribly embarrissing for the conclusions of this paper to have been derived from some careless coding error.  A simple typo could lead to ...., a calculation could be ..., or ....

Concerns over the model's validity can be placated a number of ways.  Literate progamming is one way to validate the model _ex post facto_.  By explicitly embedded in the paper itself, the code can be inspected by and all and the simulation run by anyone reading the paper.  

This approach in isolation however, only serves to indentify if something is wrong.  It cannot demonstrate if the simulation is right.  To demonstrate such fitness, the agent based model must be compared against a known model.  If both models deliver the same result (or at least statistically similar results given that the ABM approach uses the Monte Carlo method), we can confidently claim that the model is _validated_.  For this reason, we will begin with an analytic model.

The CJT states that the number of voters needs to be odd so we must first enforce this and determine the corresponding majority.  We will use the function below to perform this check and return a range from the majority point to the total number of voters.


    an_odd_majority = (number_of_voters) ->
      number_of_voters = if number_of_voters % 2 is 1 
        then number_of_voters 
        else number_of_voters + 1
      a_majority = (number_of_voters + 1) / 2
      [a_majority..number_of_voters]


We can then formalise the majority likelihood as a function of the number of voters and their competence.  For each voter in the majority, we calculate the binomial coefficient, likelihood for the individual voter, and then sum the results.


    majority_likelihood = (number_of_voters, voter_competence) ->
      an_odd_majority(number_of_voters)
        .map (voter) ->
          n_choose_h(number_of_voters, voter) * 
          Math.pow(voter_competence, voter) * 
          Math.pow(1-voter_competence, number_of_voters - voter)
        .reduce (sum, increment) ->
          sum + increment


Now, all we need to do is generate the results for a variety of voters and competencies, and display the results.


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


---> Graph results.

Agent based modelling offers something else...(what exactly) - sensitivity (list has honey bee paper)

A necessary first step however is to test the validity of it against an analytic approach.  This will give us confidence when we start to look at sensitivity and introduce new variables. To verify that the agent based model of the jury theorem performs sufficiently well for our needs, we can compare it against our analytic model using the same assumptions. 

Our agent based model is very simple conceptually.  We'll begin by modelling our entities and ensure that the necssary CJT voter conditions are met _ex ante_ by stipulating them in code.  Our model initially consists of just two entities - a `Democracy` that is populated by a number of `Voters`


    class Democracy
      constructor: (@voters) ->


Voters themselves are constructed with a `competency` value between `0.0` and `1.0` representing the likelihood they will choose the correct alternative on some dichotomous choice.


    class Voter
      constructor: (@competence) ->


 Voters vote _sincerely_ and _independently_ of others.  Voting is a stochastic function based on their competence.  The higher their competence, they more likely they are to vote correctly.  The choice is _dichotomous_ and _objective_ _ex vi termini_.


    Voter::vote = () ->
      if @competence >= Math.random() 
      then 'correct' 
      else 'incorrect'


The decision procedure for the collective choice is a _simple majority_.  If a majority of `Voters` vote correctly, then so does the `Democracy`.


    simple_majority = (democracy) ->
      correct_voters = democracy.voters.filter (voter) ->
        voter.vote() == 'correct'
      if correct_voters.length > democracy.voters.length / 2 
      then 'correct' 
      else 'incorrect'


While a `Democracy` may contain `Voters` with a variety of competencies, our first simulation will consist of homogeneous voters.


    with_homogeneous_voters = (desired_number, competence) ->
      [1..desired_number].map () ->
        new Voter(competence)

Later, we will use the relaxed voter competence condition for heterogeneous voters.


    with_heterogeneous_voters = (desired_number, average_competence) ->


With these elements in place, all that is left to do is create a democracy, populate it with voters, and hold a vote.  

We will use the Monte Carlo method to generate data for a range of competence-voter number pair.  For each pair, we will run the simulation 1000 times to obtain a frequency based probability for the majority being correct.


    demonstrate_jury_theorem = (results=[]) ->
      for competence in [40..60]
        competence /= 100
        for voters in [1..10]
          voters *= 100
          result = {competence: competence, voters: voters, correct:0, incorrect:0}
          for n in [1..1000]
            democracy = new Democracy with_homogeneous_voters(voters, competence)
            result[simple_majority(democracy)] += 1
          results.push {competence: competence, voters: voters, likelihood: result.correct / (result.correct + result.incorrect)}
      results
 

<figure>
<div id="condorcets_jury_theorem" class="graph"></div>
<figcaption>Condorcet’s Jury Theorem</figcaption></figure>

As we can see, .... analysis here ... the agent based model works


## Voter Competence & the Principle of Anonymity

While many of the conditions necessary for CJT to be entailed are contested, it is the condition of voter competence that is the primary concern in this chapter.  Voter competence is simultaneously, and somewhat paradoxically, the most plausible and implausible of the necessary conditions outlined earlier.  One need only to read the comments section of any tabloid, or watch a _vox populi_ on some comtemporary issue to see voter ignorance and apathy in action.  Yet, could anyone seriously contend that the average voter, one's fellow citizen, will perform _worse_ than a flipping coin when they head to the ballot box?  Such a claim, if substantiated, would be damming not just for CJT but democracy itself.

An all too common complaint in the politial literature is that voters are woefully ill-informed and thus incapable of making competent political decisions. Numerous political surveys from the last 50 years show "that popular levels of information about public affairs are, from the point of view of an informed observer, astonishingly low" (@converse1975 p79).  Voters are "poorly informed and ill-equipped to select the best candidate" in elections (@patterson1993 p52).  ---> one more quote on voter apathy

This popular retreat from public affairs has coincied with an increasingly interconnected and complex world.  National policies have global impact. (Examples)  thereby placing increasingly difficult, if not impossible intellectual demands on the average voter.

@downs1952  rational ignorance

> there is surely some line of willful ignorance that, once crossed, crosses out democracy itself @schudson1999 p311

Of course, many of these criticisms can be put down to elitism - the political classes simply blaming their losses on voters @lupia2006 p1 

Low information rationality can help voters make informed choices but this relies on the advice of others, thereby undermining the independence condition.

> Reasoned choice does not require full information @lupia1998 p2  

The challenge for supporters of CJT is obvious.  The symmetry of the Jury Theorem is a double edged sword for democracy - just as large numbers of marginally competent voters makes a majority choice almost certainly correct, large numbers of marginally incompentent voters makes the same choice almost certainly incorrect.  Satisfying the voter competence conditition is essential not only for justifying democracy on epistemic grounds, but also for preventing CJT from undermining other classes of justifications of democracy.  Proponents of CJT must therefore be justified in claiming that voters are, on average, competent but demonstrating this turns out to be excedingly problematic.

Demonstrating voter competence, or that any condition of reality for that matter, has been obtained analytically seems impossible.  Instead, voter competence must be demonstrated emprically by either knowing that voters are competent _a priori_ and therefore the majority choice is correct; or by knowing the correct choice _a priori_ and infering voter competence from the majority choice.

If we have prior knowledge of voter competence however, then universal franchise is not only unnecessary but a gross waste of resources if epistemic accuracy is our goal.  Elections and referenda increadably expensive.  The proposes marriage equality peblecite is estimates to cost over $500 million (cite) while the 2012 presidential elections cost more that $2.1 billion (cite).  A vote by a groups of experts whose competency is known is, epistemically at least, just as good as a vote of thousands marginally competent citizens but realisable at a just a fraction of the cost.[^brennan]

[^brennan]: Jason Brennan makes a similar argument in ....

Alternatively, if we have prior knowledge of the correct choice, then CJT offers no additional epistemic value.  Why vote on a question whose answer is already known if the purpose of democracy is to determine the truth?  The questions that need to be put to a vote in a democracy, the questions about which CJT promises so much about, are the ones to which the answer is contested in the first place.  

@dietrich2008 (p60) raises a related concern about the role of misleading evidence.  Knowing whether or not the voter competence condition holds for a specific problem might in fact be even harder than knowing the correct answer in the first place.  To do so requires knowing if the question involves misleading evidence and this cannont be known without knowing the correct answer to the question.  Thus, it seems that being able to conclusively demonstrate that the voter competence condition is satisfied is either exceedingly diffuclt or undermines the epistemic value that CJT offers democracy in the first place.

All we are left with then, is the presumption of voter competence - a democratic version of the Principle of Charity.  As @goodin2004 (p136) notes "we ought (unless we have some special story to tell about how this case is unusual) ordinarily suppose that our fellow citizens are more likely to be right than wrong, and therefore that the winning outcome is quite probably the correct one."  But on what grounds might this princple be justified?

One significant reason is that the standard for the voter competence condition is exceedingly low.  CJT simply requires that voters are, on average, marginally better at selecting the correct choice from a range of alternatives than the prior odds of those alternatives.  If the choice is dichotomous, then voter need only be on average, better than flipping a coin.  Say what you will about voter ignorance and apathy, but ....

This might be considered wistful thinking by some but for democrats there is no alternative - the symmetric nature of the Jury Theorem means that an electorate of incompentent voters undermines the normative claims of all democratic theories.

---

Let's assume for the time being that we are justified in using the principle of charity to presume that the voter competence condition is satisfied - that the average voter is at least marginally better than tossing a coin at selecting the best answer to a dichtomous question.  If so, what follows from this?

Much of democratic theory's scope of analysis is the polity - a single body politic whose political boundaries also form the boundaries of analysis.  In this sense, democratic theory can be said to be internally focused.  This is not to say that democratic theory doesn't consider transnational or transborder issues - only that for any given theory, if it applies in one democracy, it should apply in anothers.  CJT is no different. It focuses on a singular, abstract concept of democracy that can be applied to many actual democracies.

Our actual political landscape by contrast is plural.  Our planet is divided into nation-states. Nations-states are divided into provinces, states, or regions.  These regions are then divided into electorates, local government areas, and council wards.  In short, our political reality is a partitioned one.

The application of a singular abstract political theory like CJT to our plural political reality there requires the invocation of another principle - the Principle of Anonymity [^anon].  By anonymous, I mean that the assumptions we apply should be neutral or blind between polities which have the same or similar evidence of (or lack thereof) to support them.  If we grant an assumption to one polity, then baring some special story about why they are different, we should grant that assumption to other polities.  The inverse also applies - if we can't grant the assumption to one polity, then baring special information, we can't grant it to another.

[^anon]: I choose the term _anonymity_ as it is widely used in social choice theory for the apropos condition regrading individual voters, i.e. The group decision function treats each voter identically.  See @may1952 (p681) for a similar explaination.

The Principle of Anonymity is especially important when we presume voter competence.  Because we lack prior information about both voter competence and the correct answer to some political choice, we must invoke the Principle of Charity to presume voter competence.  So if the Principle of Charity presumes voter competence in one polity, then it must also presume voter competence in other similar polities. And if the Principle of Charity cannot presume voter competence in one polity, then it cannont be presumed in other similar polities.

This is not, I would argue, a long bow to draw.  If we can presume that voters are on average competent in Australia, then we must presume they are on average competent in Austria.  If we can't presume they are competent in Nevada, then they can't presumt they are competent in New Hampshire.  Provided of course, there is no other evidence that the voters of one polity are more competent than another.

---

How might we then model and test this Principle of Anonymity?  We can begin by by randomly partioning the `Democracy` into a number of different polities. Rather than using homogeneous voters, we will create our democracy with heterogeneous voters with an average competence > 0.5.  We know from our earlier simulations that the analytic, homogeneous, and heterogeneous models produce statistically identical results.  Thus, while we can know _ex ante_ that the `Democracy` satifies the voter competence condition, we can't know with certainty that each of the polities does.  

Instead, we must presume they do using the Principle of Charity.  In this case, we have especially good grounds for the presumption becase we know that voters are on average, competent.  The Principle of Anonymity means that, baring counter evidence, if we can presume voter competence in one polity we can presume it in another.  And importantly, if we can't presume it in one, we can't presume it in other.

We will partition the `Democracy` using an algorithm that recursively divides the largest parition at a random point until the desired number of polities have been produced - each characterised by a differing number and composition of `Voters`.  


    Democracy::partition = (k) ->
      @polities = [@voters]
      while k > 1
        k = Math.min k, @voters.length
        polity = @polities.shift()
        cut = Math.floor( Math.random() * (polity.length - k) ) + 1
        @polities.push polity[...cut]
        @polities.push polity[cut..]
        @polities.sort (a,b) -> b.length-a.length
        k--
      this


Simulate it!

Results!  How do I compare ?  It should show that randomly partitioning makes no difference, hence random partitions are anonymous.

As we can see the principle of autonomy applies as expected when we randomly paritioning our democracy into many polities.  Given the stipulated conditions in the simulation, CJT demonstrates the epistemic power of both the original democracy and the anonymous paritions of it.

## Voter Competence and its Distribution

Recall from earlier in the chapter how the voter competence condition has been relaxed.  Voters need not be homogeneous with regard to competence - the CJT still holds for distribution free heterogenous voters so long as the average competence is better than random.  Even this requirement has been relaxed when intra-voter bias between type I and II erros is diverse and voters have positive error detection skills.  In short, diverse, opposing views _strengthen_ the epistemic claims of democracy.

Which is just as well because voter competence is _not_ homogeneous.  It is obvious that the claim that voter competence can cluster is not impossible.  If for example, voter competence is correlated with income or party affiliation, then voter competence is clustered because these attributes are clustered.  That party affiliation clusters geographically is a truism of politics to which the language of _Red States_, _Blue States_, and _Swing States_ attests to.  Income too is clustered geographically and significantly within electorates. (Empricial data needed) 

One needn't believe that income levels reflect a meritocracy or that one political party is objectively better than another to accept the claim voter competence is clustered however.  That's because both these attributes are strongly correlated with another, more important attribute that very likely affects voter competence - education level.  Voters with higher levels of education are more likely to vote for liberal policies (cite).  Voters with higher levels of education are more liekly to have higher income levels (cite).  And political affiation, income, and education level all cluster geographically. 

Now one might dispute a direct causal connection between income and voter competence for example, but to dispute the connection between education level and voter competence is much harder. The consquence of which is to assert that voter competence - the likelihood that one can correctly identify an objectively better alternative - is innate and not affected by education.  That in effect expertise is not affected by education level.

Perhaps the strongest argument for voter clustering however, is provided by the results of actual democratic elections.  I described earlier how CJT was symmetric, how it alternatively strengthed or weakened claims for the epistemic value of democracy depending on whether the level of voter competence was better or worse than average.  @goodin2004 however, offers another take on the symmetry of the Jury Theorem.  Just as knowning voter competence and voter numbers allows us to infer the likelihood that a majority decision is correct, knowning the size of the majority and voter numbers allows us to infer voter competence.

If, for example, 60 percent of a large polity votes for a particular policy or candidate, then we can infer ..... (check his paper) .  The problem, as Goodin notes, is that we can't be sure which it is.
--->

---

So far in this chapter we've introduced CJT and examined the conditions necessary for its realisation.  We implemented the Jury Theorem analytically and as an agent based model, with both homogeneous and heterogeneous voters, and seen that all three yield statistically identical results.  We've also explored justifications for claiming that the condition of voter competence is satisfied and I've argued that this can only be by presumption using a verstion of the Principle of Charity.  I've also argued that when using the Principle of Charity to presume voter competence, we are constrained by the Principle of Anonymity - that is we can presume voter competence for one polity, we can presume it for another.

???

So what impact, if any, does the distribution of voter competence have on the epistemic claims of CJT?  No research, as far as I am aware, addresses this issue.  This is, of course is entirly understandable.  When applied to an abstract political entity, it doesn't matter how voter competence is distributed within that entity, so long as voter competence is, on average, better than random.

When applied to actual political entities whose voter competence can only be presumed however, the distribution of voter competence turns out to matter a great deal.  That's because when voter competence is clustered, then it become possible, likely even, that the Principle of Anonymity is violated.  When voter competence is clusterd, the justification for presuming voter competence - the Principle of Charity - can no longer be applied.

We can see how this works be simulating a democracy with clustered voters.  Like before, we will generate a desired number of voters with average competence but this time we will specify how clustered the distrituion is with a value ranging from `0.0` indicating no clustering to `1.0` indicating all the competent voters neighbour each other. 


    with_clustered_voters = (desired_number, average_competence, clustering) ->


In this simulation, we will ....


The results here are striking.  As voter competence becomes increasingly clustered, the likelihood that .....

Put another way.....

The POC is not anonymous to indistinguishable polities
  - we are not justified in applying the POC to indistinguishable polities!!! 


## Conclusion

to be concluded

---

## Supplimentry Code for Data Generation


    
Be able to save data to disk...

    fs = require 'fs'
    save = (name, results) ->
      dir = "#{__dirname}/assets"
      fs.mkdirSync dir unless fs.existsSync dir
      fs.writeFile "#{dir}/#{name}.json", JSON.stringify(results) , (err) ->
        if err then console.log err



    run = (argv) ->
      console.log "Generating data for #{argv[3]} - this may take some time"
      # save 'analytic', analytic_jury_theorem() if argv[3] is 'analytic'
      save 'demonstration', demonstrate_jury_theorem() if argv[3] is 'demonstration'

You can now run any of these simulations to generate their results.

    process.argv.map (val, index, array) ->
      # test array if val is 'test'
      run array if val is 'run'

<script src="../../assets/d3.v3.min.js" type="text/javascript"></script>
<script src="../../assets/dimple.v2.1.2.min.js" type="text/javascript"></script>
<script src="assets/graph.js" type="text/javascript"></script>
