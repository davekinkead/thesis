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

Within philosophy however, the use of computation has been more limited.  Philosophers have used computation to discover new arguments [@oppenheimer2011], challenging arm-chair claims [@ashton2018], simulating social testimony [@zollman2015], and communicating new ideas [@bourget2010].  Yet these approaches all suffer from the same limitations to inferential support as found in computational non-philosophy - the problems of replication, reliability, and therefore trust.

When used in scholarship, computation methods like simulation are often epistemological black boxes, removed from the argument being made.  The code powering the simulation is often unpublished, unaccessible, or otherwise hidden.  Like experimental science, descriptions and models of the code are normally described in abstract which, unlike experimental science, is often insufficient to reproduce the simulation itself.

When code is made available publicly, it typically performs an evidential role.  The simulation generates data, the data is analysed to provide evidential support for claims, and these claims are used to infer some subsequent conclusion.  In both cases, the epistemological role of computation is analogous to testimony -- supporting the truth claims of premises within an argument.

Yet we can do much more, methodologically speaking, with computation.  Computer simulations are a lot like thought experiments _in silico_.  They allow us to model a theory, concept, or representation of reality, to hold variables fixed, and run many different scenarios.  

Simulations however, allow us to do much more than thought experiments can --- they provide a capacity for formalisation, precision, complexity, and computation that is unavailable to our native cognitive capacities.  They allow us to test the coherence of a range of theories by axiomatisation assumptions in code and seeing what follows from them.  They can give us much greater confidence in our inferences in a greater range of problem domains.

To address these current concerns and exploit the potential of computing in philosophical scholarship, I outline a novel methodology for computational philosophy that I call _argumentum in silico_ or simulation-as-argument.

Building on the work of Donald Knuth's literate programming, I outline a method of embedding code within written scholarship in order to use computer simulation _as a form of_ argumentation, rather than as simply evidence in support arguments.

Both computer code and natural language argument are represented symbolically in text.  Natural languages like English or German are constructed by composing word tokens from an alphabet into permissible syntactic sequences of meaningful sentences according to a grammar, in order to represent some semantic concept.  

Similarly computer languages like Prolog, Haskell, or Javascript are constructed by composing word tokens from an alphabet into permissible syntactic sequences of instructions according to a grammar, in order to perform some computation.

Usually however, these two processes are performed in different mediums for different purposes: a word document, journal article, or book to persuade a human audience; and a binary executable or software file to be parsed by a compiler running on a computer.

Literate programming blends these two purposes and mediums into a single document.  It inverts the traditional relationship between code and comments to prioritise human explanation and understanding.  Much as one might formalise within a document the inferential moves of a natural language argument into a formal language like predicate logic -- and then using a rendering engine like MathJax to translate `$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$` into ...

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>x</mi>
  <mo>=</mo>
  <mrow>
    <mfrac>
      <mrow>
        <mo>&#x2212;</mo>
        <mi>b</mi>
        <mo>&#xB1;</mo>
        <msqrt>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo>
          <mn>4</mn>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
  <mo>.</mo>
</math>

An author using literate programming can also formalise the claims and assumptions of a natural argument as computer code, for example ...

    console.log("Open your browser's console inspector to view this sentence.")

This single source plain text document can then be rendered into a PDF of HTML document for human consumption, or transpiled into source code for computer consumption.

I then show how this shifts the epistemic role of computation and simulation from testimony to inference

In doing so, I overcome many of the problems associated with reproducibility and replicability.  Simulation-as-argument is instantly reproducible because all the code required for the execution of the program is contained within the document used to advance the written argument.

In this way, simulation-as-argument extends the boundaries of our confidence when reasoning in domains too complex or intractable for traditional analysis and argument. It can enhance the rational acceptance of argument more than plain text or remote code alone.


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