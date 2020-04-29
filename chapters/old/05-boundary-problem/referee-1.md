REFEREE 1
 
This paper uses simulations to address some issues in relation to the boundary problem of democracy. More precisely, the paper uses embedded code (“literate programming”) to allow the reader to better understand and interact with the simulations. The core claim of the paper can be summarized as follows. If one is interested in the epistemic (truth-tracking) properties of a democracy, then it is best if similar voters are not too clustered in the same polities because clustering undermines effective information aggregation in the polities. By contrast, if one is interested in satisfying the preferences of voters, then clustering of similar voters is beneficial because each clustered (and therefore homogeneous) polity can optimally satisfy the preferences of its citizens. This, the author claims, shows that “certain instrumental justifications of democracy are themselves incompatible” (33).
 
I think the basic idea of the paper is quite interesting and deserves investigation, though I believe that the incompatibility claim is exaggerated, as I will explain below. However, I think the paper has major flaws:

1.     I am not convinced that the embedding of code is helpful at all. I code (smallish) simulations regularly and I am therefore sympathetic to the idea. But I found the code difficult to read and would much prefer better in-text explanations and/or a simplified pseudo code to explain what is going on. Unless one already knows Java or coffeescript, the approach taken will not be helpful for the average reader of JPP.

2.     The results of the paper are actually much more simple than the computational approach suggests. I doubt that simulations are even necessary to explain the results. Perhaps they are still useful to explore sensitivity to different parameters, but I would definitely scale down their importance.

3.     The assumption of the model are not always convincingly motivated.

4.     The claim that some justifications of democracy are “incompatible” is too strong.
 
I do see potential for a paper that pursues the core idea (as summarized in paragraph 1), but the paper would have to go through a major transformation. I therefore tend to think that the editors of JPP should reject the paper.
 
1. Code Embedding
 
While I can see the attraction of such a methodological approach in principle, I think the authors do not take into account that most readers of JPP are not coders, and the coffeescript snippets are not intuitive enough to help a non-coder. I actually doubt that they are helpful for anyone who does not know Java. For what it’s worth, I mainly work with Python and had some difficulties to read this code. For instance, I’m still uncertain how precisely the clustering procedure and the partitioning procedure use space, and how distance in space is conceptualized.
 
 
2. The Main Results are Quite Simple
 
The easiest way to think about clustering is on a one-dimensional space. Suppose voters are either right or wrong (the author calls this setting, somewhat implausibly, “content independent”). If the voters are fully clustered the “right” voters all sit on one side of the space and the “wrong” voters on the other side. Note that, by assumption, there are more right than wrong voters. Now the space gets partitioned into different intervals. It is clear that, in expected terms, most polities draw voters entirely from the side with “right” voters”, and a smaller group of other polities draw only “wrong” voters. In fact, not more than one polity will contain both “wrong” and “right” types. It is then not surprising that the epistemic performance in all polities with “right” voters is excellent (always correct) and the performance of all polities with “wrong” voters is poor (always incorrect). Moreover, it is clear that the probability that a policy is correct (the “epistemic virtue”, p. 18) is then, in expectation, equal to the proportion of “right” voters. That is exactly what we find in figure 1. Seen in this light, the result seem quite unsurprising. In fact, it would probably be possible (though perhaps not easy) to derive it analytically.
 
The result pertaining to preference satisfaction (“content relative”) is even more intuitive. It basically says that preferences are more likely to be satisfied if voters within a polity are more homogeneous. That is certainly true, but it does not come as much of a surprise. If everybody wants the same policy, and we can give them that same policy, all preferences are satisfied. But if people want different policies and we can only give them one policy, some preferences remain unsatisfied.
 
Finally, the results regarding “character improvement” look a little tagged on and under-developed. They are not really motivated by the theoretical story of the paper. And they look like a relatively simple diffusion story: the more clustered, the less likely is the diffusion of good character.
 
 
3. Motivation
 
The modelling assumptions are not always motivated in a clear way. This is most striking in the epistemic case: why would the voters that get it “right” be clustered locally? I can some see reasons for clustering (perhaps exposure to the same media, political influences, etc.) that make positive correlations likely. But none of this is mentioned in the paper. And higher clustering parameters seem quite implausible.
 
As mentioned above, I also find the model on character improvement under-motivated.
 
 
4. Incompatibility Claim
 
I think the paper identifies an interesting trade-off: If similar voters are highly clustered in polities it is easy to satisfy their preferences, but it is less likely that they do well in tracking the truth. So more clustering is desirable for one reason and undesirable for another. If the best solution is at least partly a function of the preference satisfaction and epistemic desiderata, then we need to think about how we deal with this trade-off. But the author claims something much stronger: that the preference satisfaction and the epistemic account of democracy REQUIRE different “accounts of inclusion”, that is, different solutions to the boundary problem. I think this is wrong on two accounts:
1.     It is at at least logically possible (and not that implausible) that voters that are clustered with regard to preferences are not clustered with regard to their epistemic performance;
2.     More importantly, if one holds that a democracy needs to perform both in terms of preference satisfaction and epistemic performance, one is not committed to “incompatible” accounts of inclusion, one is only committed to making a reasonable trade-off between the two desiderata, as explained above. That is a much weaker claim.
 
 
Some Other Points
·      The paper needs a more interesting and informative title;
·      The term “agent-relative” is used in (at least) a very unconventional way;
The author misses an important point about the Condorcet jury theorem and how the recent literature on the CJT relates to clustering: clustering undermines the independence assumption of the CJT