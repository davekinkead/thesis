test.coffee.md


    sim = require './paper.coffee.md'

    [e, p, c] = [600, 10, 1.0]
    results = sim.simulate( 'virtue', {'right': e, 'wrong': 1000-e}, p, c, 1000 )

    sum      = (arr) -> arr.reduce (a,b) -> a + b
    ave      = (arr) -> sum(arr) / arr.length

    console.log "Average p(correct): #{ave( results.trials )}"