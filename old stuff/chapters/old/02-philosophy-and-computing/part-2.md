Argumentum in Silica

  - how do we scaffold inference
  - how do we justify inference


Ther central question I need to address here is "what is the difference between simulation within a paper vs from without?"

I see a number of differences.

1. simulation as argument address the 3Rs of computer simulation - reproducability, reliability, and ???

What are the problems of simulation????

Embedded simulations are more reliable because the code is _necessarily_ accessable.  We can trust the code because we can see it - it isn't hidden away in some proprietry system or private repository.

Sure, external simulation code can be open source and the repo made publicly available but the purpose of argument is to pursuade rationally - to give reasons that an audience can accept that entails (or at least makes more likely) some conclusion.  

When code is removed from argument, it loses its pursuation.  It is not longer a premise we can accept prima facae.  Instead, we must accept the claims of the code no faith.  Trust me, I'm a programmer. Trust me, I wrote unit tests.

Granted, we must do the same thing in science.  Trust me, I got these results. Trust me, these details are sufficient to replicate.  But we don't use the empiric results of natural phenomena to justify some conclusion in a scientific argument for the simple reason that the empiric results are the consequent of a scientific argument that seeks to refute an antecedent theory.

The archtype of scientific argument, looks something like this .... 

  1. If this theory is wrong, then I should see these particular results.
  2. I didn't see those results
  3. Therefore this theory isn't wrong

In the Popperian tradition of falsificationism and the hypothetico-deductive method, the theoretic conjecture and propositional content of interest is the antecedent of the conditional.  The results of observation and experiment, along with modus tollens, are used to establish the antecedent claim's plausibility. ????

In simulation by contrast, we used code to establish the truth of consequent.  All it does is fill in propositional truth content. ?????

Simulation as argument however, allows us to use code to justify inference.

- can simulation establish the truth content of the conditional???  Yes!!

Take the model of segregation as an example....

1. If segregation implies racism, then there should be no instance of S + ~R (tautology)
2. S & ~R (simulation)
3. Therefore ~(S -> R) (MT)

The simulation claims that 2 is true but what reasons do I have for accepting this without reasoning throught the code?  I am uncritically accepting the claims of an argument without prior evidence in an argument that requires me to have prior evidence of that claim.

Simulation as argument can unpack 2 into propositions (axiomatic) claims that I do already accept and entail 2 for me.  I can also have confidence in the inference because (the boolean logic is sound?? Is there something about turing completeness here???)

- proof by pictures, the pursuasiveness of experience and accessibility ????



# Simulating Theory with Literate Programming

- what is it?
  - interweive source code and documentation
  - typical approaches focus on optimising....
  - LP focuses on explaination

- why use it?
  - write in an order that aids explaination rather than compilation
  - programming has 2 audences - compiler and human
  - different tools are optimised for each (code and documentation)
  - LP combines both into a single file 

> Programming is best regarded as the process of creating _works of literature_. (@knuth1992 p ix)

## Replication

## Coffeescript (1000)


- modelling Theory
- coherence constraints