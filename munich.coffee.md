# What's the Problem with the Boundary Problem?


---


# Background


---


1. The Problem
2. The Methodology
3. The Simulation
4. The Implications


---


# The Problem


----


> Should Crimea secede from the Ukraine and form a political union with Russia?


----


## _Who_  determines _what_.


----


### _Who the people are_ 
### is logically and temporally prior to the question of 
### _what they decide_.



----


1. Inclusion is of fundamental importance to democracy
2. Inclusion can't be solved democratically
3. That non-democratic solutions are incompatible with democratic legitimacy


----


> "curiously neglected and yet absolutely crucial problem" p59.  


----


1. The problem exists
2. The problem is self-evident or obvious
3. Why solutions are (in)compatible


---


# Three Problems


----


## _Justification Problem_


----



## _Value Problem_


----


## _Predetermination Problem_


---


# Methodology


---


# The Model


----


## Entities


----


```

    class Agent
      constructor: (@belief) ->
      
```

----


```

    class Space
      constructor: (agents, clustering=0) ->

        # create a quota of agents based on belief
        quota = []
        @agents = []
        for belief, believers of agents
          for n in [1..believers]
            quota.push new Agent(belief)
        
        # cluster agents tightly or randomly
        while quota.length > 0          
          limit = Math.round( Math.random() * quota.length * (1-clustering) )
          @agents = @agents.concat quota.splice limit, 1
  
```


----


## ∑ ( a choose p )


----


> ABCD  
> A-BCD, B-ACD, C-ABD, D-ABC, AB-CD, AC-BD, AD-BC  
> A-BC-D, A-CD-B, A-BD-C, B-AD-C, B-AC-D, C-AB-D  
> A-B-C-D  


----


```

    Space.prototype.partition = (p) ->
      @polities = [@agents]
      while p > 1
        p = Math.min p, @agents.length
        polity = @polities.shift()
        cut = Math.floor( Math.random() * (polity.length-p) ) + 1
        @polities.push polity[...cut]
        @polities.push polity[cut..]
        @polities.sort (a,b) -> b.length-a.length
        p--
      this
      
```

----

    
## Decision Mechanisms


----


```

    simpleMajorityVote = (space) ->
      results = []
      for polity in space.polities
        votes = {}
        for agent in polity
          if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1
        max = Math.max.apply null, (num for belief, num of votes)
        results.push belief for belief, num of votes when num is max
      results

```


---



# Simulation


---


# Epistemic 
# Justifications


----


```

    sum      = (arr) -> arr.reduce (a,b) -> a + b    
    ave      = (arr) -> sum(arr) / arr.length
    variance = (arr) ->
      mean = ave(arr)
      (arr.reduce ( (a,b) -> a + (mean-b)*(mean-b)), 0) / arr.length
    stdev    = (arr) -> Math.sqrt( variance arr)
    
    epistemicSimulation = (agents, partitions, clustering, trials) ->
      space = new Space( agents, clustering )
      results = { 'total': {'right':0, 'wrong':0}, trials: {} }
      for num in [1..trials]
        results.trials[num] = {'right':0, 'wrong':0}
        votes = simpleMajorityVote space.partition partitions
        for vote in votes
          results.trials[num][vote]++
          results.total[vote]++
      results

```

----

- [510/490 Agents, 0.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-51-no-cluster.html)
- [510/490 Agents, 0.5 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-51-part-cluster.html)
- [510/490 Agents, 1.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-51-full-cluster.html)
- [600/400 Agents, 0.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-60-no-cluster.html)
- [600/400 Agents, 1.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-60-full-cluster.html)
- [510/490 Agents, 0.0 clustering adjusted](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-51-no-cluster-cjt.html)
- [600/400 Agents, 0.0 clustering adjusted](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/epi-60-no-cluster-cjt.html)



----


## Implications


----


- increasing polity numbers decreases the likelihood of a correct outcome
- especially true with lower population polities
- changes in the numbers of partitions can be explained CJT effect
- changes in partition makeup can't (ie clustered partitons)


----


- an epistemic account of inclusion would be satisfied by a requirement of sufficiently many informed voted
- but this only applies when we have uniform or random distribution of agent beliefs
- strong clustering of beliefs undermines the episitemic value of voting
- the boundary problem is present with clustered spaces


---


#  Strategic 
# Justifications


----


```

    vote = (polity) ->
      votes = {}
      for agent in polity
        if votes.hasOwnProperty agent.belief then votes[agent.belief]++ else votes[agent.belief] = 1       
      max = Math.max.apply null, (num for belief, num of votes)
      votes.winner = belief for belief, num of votes when num is max
      votes
      
    fidelity = (space) ->
      results = { 'winners': 0, 'from': 0 }
      for polity in space.polities
        votes = vote polity
        numerator = 0 
        demonimator = 0
        for key, val of votes
          results.winners += val if key is votes.winner
          results.from += val unless key is 'winner'
      results
      
    strategicSimulation = (agents, partitions, clustering, trials) ->
      space = new Space( agents, clustering )
      results = { trials: {} }
      for num in [1..trials]
        results.trials[num] = fidelity space.partition partitions
      results

```


----


- [510/490 Agents, 0.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/stg-51-no-cluster.html)
- [510/490 Agents, 0.5 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/stg-51-part-cluster.html)
- [510/490 Agents, 1.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/stg-51-full-cluster.html)
- [600/400 Agents, 0.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/stg-60-no-cluster.html)
- [600/400 Agents, 0.5 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/stg-60-part-cluster.html)
- [600/400 Agents, 1.0 clustering](file:///Users/dave/Dropbox/Research/papers/modelling%20the%20boundary%20probelm/graphs/stg-60-full-cluster.html)


----

 
## Implications


----


- increasing polities increases the likelihood of individual agent preference being realised
- especially true in smaller populations
- effect increases as clustering increases
- polity number has opposing effects for epistemic vs strategic accounts

---


# Limitations


----


- only models a narrow range of democratic accounts & procedures
- only applies to the predetermination problem
- could be extended to deliberation & sortition
- could be extended to alternate accounts of democracy
- using polity number as primary variable makes interpretation non obvious


---


# Conclusion


----


- the impact of the Boundary Problem is not obvious
- how the effect of partitioning depends of the democratic account
- this can only be said about difference making accounts of democracy
- conflict between epistemic and strategic accounts of democracy


----


https://github.com/davekinkead/modelling-the-boundary-problem


----


```

    runEpistemicSimulation = () ->
      for c in [0..10]
        es = epistemicSimulation {'right': 510, 'wrong': 400}, 20, c / 10, 500
        arr = for trial, results of es.trials
          results.right / (results.right + results.wrong)
        console.log ave(arr).toFixed(15)
        #console.log "C: #{c / 10} \tM: #{ave(arr).toFixed(15)} \tSD: #{stdev(arr).toFixed(15)}"
    
    runStrategicSimulation = () ->  
      for c in [0..10]
        ss = strategicSimulation {'blue': 510, 'red': 490}, 5, c / 10, 500

        arr = for trial, results of ss.trials
          results.winners / results.from
    
        console.log ave(arr).toFixed(15)
        #console.log "C: #{c} \tM: #{ave(arr).toFixed(15)} \tSD: #{stdev(arr).toFixed(15)}"
        
      
    process.argv.forEach (val, index, array) ->
      runStrategicSimulation() if val is 'strategic'
      runEpistemicSimulation() if val is 'epistemic'
    
```