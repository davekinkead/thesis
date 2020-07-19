---
title: "Argumentum in Silico: A Computational Methodology for Philosophy"
author: Dave Kinkead
email: d.kinkead@uq.edu.au
status: PhD thesis draft
license: CC-BY-NC-SA
---

## ~~ DRAFT VERSION ~~ ##


> A thesis (soon to be) submitted for the degree of Doctor of Philosophy at  
> The University of Queensland in 2020  
> School of Historical and Philosophical Inquiry  


## In a sentence

I outline a novel methodology for computational philosophy and show how it advances the discipline by enhancing the rational acceptance of claims within argument.


## In three steps

  1. Philosophy, via argumentation, is bounded to the extent that we have confidence that our conclusions necessarily or strongly follow from our premises.

  2. Simulation-as-argument extends the boundaries of our confidence into domains too complex or intractable for traditional analysis and argument.

  3. Simulation-as-argument therefore advances philosophy & argumentation.


## In a few hundred words

Philosophy is a discipline characterised by methodological pluralism. There are many ways of doing philosophy -- formal logic, thought experiment, conceptual analysis, modeling, dialectic. Argumentation however, is methodologically foundational to all philosophy. There is no philosophy without the exchange of reasons intended to persuade rationally. 

Philosophy then, viewed as a method of knowledge generation through argumentation, is bounded to the extent that we have confidence that our conclusions necessarily or strongly follow from our premises.  Our philosophical inquiries are limited only by the strength of evidence and inference they are based on.

And there are many domains in which our evidence, and especially our inferences are limited -- economics, politics, ethics, and social sciences.  In fact, any domain involving human interaction will be characterised by complexity (via adaptive behaviour and feedback loops), inaccessibility (due to the inability to control variables in experiment), or analytic intractability (unable to be solved deductively).

Within many other domains, computers and computation have become important tools -- computational linguistics, computational biology, computational finance.  What makes these fields _computational_ is not that they use computers _per se_ but how they use computational techniques as a method of inquiry.  

Within philosophy however, the use of computation has been more limited.  Philosophers have used computation to discover new arguments [@oppenheimer2011], challenging arm-chair claims [@ashton2018], simulating social testimony [@zollman2015], and communicating new ideas [@bourget2010].  Yet these approaches all suffer from the same limitations to inferential support as found in computational non-philosophy --- the problems of replication, reliability, and therefore trust.

When used in scholarship, computation methods like simulation are often epistemological black boxes, removed from the argument being made.  The code powering the simulation is often unpublished, unaccessible, or otherwise hidden.  Like experimental science, descriptions and models of the code are normally described in abstract which, unlike experimental science, is often insufficient to reproduce the simulation itself.

When code is made publicly available, it typically performs an evidential role.  The simulation generates data, the data is analysed to provide evidential support for claims, and these claims are used to infer some subsequent conclusion.  In both cases, the epistemological role of computation is analogous to testimony -- supporting the truth claims of premises within an argument.

Yet we can do much more, methodologically speaking, with computation.  Computer simulations are a lot like thought experiments _in silico_.  They allow us to model a theory, concept, or representation of reality, to hold variables fixed, and run many different scenarios.

Simulations however, allow us to do much more than thought experiments can --- they provide a capacity for formalisation, precision, complexity, and computation that is unavailable to our native cognitive abilities.  They allow us to test the coherence of a range of theories by axiomatisation assumptions in code and seeing what follows from them.  They can give us much greater confidence in our inferences in a greater range of problem domains.

To address the concerns about computer simulation in general and to better exploit the potential of computing in philosophical scholarship, I outline a novel methodology for computational philosophy that I call _argumentum in silico_ or simulation-as-argument.

Simulation-as-argument is a computational approach to philosophy that uses computer code embedded within written scholarship to enhance the inferential support of traditional argumentation.  Building on the work of Donald Knuth's literate programming, I describe and demonstrate a way of using embedded computer simulation _as a form of_ argumentation, rather than as simply evidence in support arguments.

Both computer code and natural language argument are represented symbolically in text.  Natural languages like English or German are constructed by composing word tokens from an alphabet into permissible syntactic sequences of meaningful sentences according to a grammar, in order to represent some semantic concept.  

Similarly computer languages like Prolog, Haskell, or Javascript are constructed by composing word tokens from an alphabet into permissible syntactic sequences of instructions according to a grammar, in order to perform some set of instructions or computation.

Usually however, these two processes are performed in different mediums for different purposes: a word document, journal article, or book to persuade a human audience; and a binary executable or software file to be parsed by a compiler running on a computer.

Literate programming blends these two purposes and mediums into a single document.  It inverts the traditional relationship between code and comments to prioritise human explanation and understanding.  Much as one might formalise within a document the inferential moves of a natural language argument into a formal language like predicate logic or mathematics -- and then using a rendering engine like MathJax or Latex to translate ...

  `$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$` 

into ...

![x = {-b \pm \sqrt{b^2-4ac} \over 2a}](https://latex.codecogs.com/svg.latex?\Large&space;x%20=%20{-b%20\pm%20\sqrt{b^2-4ac}%20\over%202a})

An author using literate programming can also formalise the claims and assumptions of a natural argument as computer code, for example ...

    let a = true
    if (a == true) then b = false
    console.log(b)

... would return `false`.

This single source plain text document can then be rendered into a PDF or HTML document for human consumption, or transpiled into source code for computer consumption.  So rather than coding and executing a computer simulation in one location and then reporting the results in written form in another, the written argument and formalisation can be contained in the same source and medium.

By doing so, simulation-as-argument can overcomes many of the problems associated with reproducibility and replicability.  The results are instantly reproducible because all the code required for the execution of the program is contained within the document used to advance the written argument.  The reader is able to see exactly how claims within an argument have been formalised and can run the simulation for themselves to verify.

This approach simulation also allows us to shift the epistemic role of computer simulation from testimony to inference.  The scholarship of existing computational philosophy has mirrored that of science --- an experiment is run, and results are reported, and a conclusion is drawn.  The epistemic role of the simulation is to generate results that support earlier premises rather than the conclusion itself.  The epistemic heavy lifting of the argument done by code external to the medium of communication, and the audience of the argument is required to trust that the claims offered are true (which is especially important as computer simulation is much more sensitive to implementation details than experimental science).

Simulation-as-argument by contrast, allows us to begin with agreed or non-novel premises and formalise these claims to computationally demonstrate the conclusion with the simulation.  This demonstration might be deductive via a prover or it might probabilistic via monte-carlo methods.  Less trust is required in the results because the implementation is contained within the paper and fully accessible to the reader.  The epistemic role of the simulation with respect to the argument shifts from evidentiary testimony to inference.

Furthermore, simulation-as-argument can enhance the rational acceptance of argument more than plain text or remote code alone.  Because both the written argument and computer simulation can be rendered into HTML, the reader can see, interact with, and experience the results in a way not possible with traditional scholarship.  This phenomenological aspect to seeing results of an argument unfold visually can make complex inferences easier to understand and accept -- especially in the case of counter-intuitive results.  


## Table of Contents

 1. [Introduction](chapters/introduction)
 2. [On Method](chapters/on-method)
 3. [Philosophy & Computers](chapters/philosophy-and-computers)
 4. [Simulation as Argument](chapters/simulation-as-argument)
 5. [The epistemic shift](chapters/the-epistemic-shift)
 6. [Democracy and Borders](http://dave.kinkead.com.au/modelling-the-boundary-problem/)
 7. [Reason & Rhetoric](chapters/reason-and-rhetoric)
 8. [School Performance](http://dave.kinkead.com.au/school-performance/)
 9. [Is this philosophy?](chapters/is-this-philosophy)