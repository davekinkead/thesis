
"procedure-independent standard of correctness." @peter2008 p33

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

