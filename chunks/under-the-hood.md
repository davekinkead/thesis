# Under the hood

Simulation-as-argument based on the idea that the epistemic role of computer simulation in philosophical scholarship should shift from a testimonial to an inferential one.

Computer simulation in scholarship usually plays a supporting role.  Much like a typical experimental paper in science, a simulation is run to generate results, and these results are used to justify premises which are are then used to justify conclusion/thesis in wider arguments/papers.  This requires that we trust that the author is honest about the results generated (highly likely) as well as accurate (not so likely).

The problem of trust is worse in simulation than experimental science however because simulations have no real constraints and are highly sensitive to parameter choices.  The results in natural science experiments are constrained by reality.  Gravity is gravity for example.  It works the same anywhere in the universe (we think ...).  But simulations have no real constraints -- how we code gravity in one simulation might be different to how we code it in another, depending on the code's author, language, and run time.  Similarly, the results of a simulation can be highly sensitive to changes in parameterisation -- small changes in parameters and initial conditions can lead to large changes in results.  This was the birth of the chaos theory.

My proposal is to use computer simulations as a central feature of argument.  To shift their epistemic role from justifying the truth of a premise _of_ an argument, to demonstrating an inference _in_ an argument.  And we can do this with literate programming.

Literate programming is a method of programming developed by Donald Knuth (https://academic.oup.com/comjnl/article/27/2/97/343244) that weaves code into a text document.  The simplistic explanation is that inverts the prominence of comments and code within a code-base but within scholarship it can do much more.

There are my ways we can 'weave' the code into text but the way I'll be demonstrating here is with whitespace indentation.  Here, any text with less than 4 leading spaces (like this paragraph) is treated as text.


    console.log("but any text with 4 or more leading spaces ...")
    console.log(" ... like this one ... is treated as code")


We have just 'weaved' code into our text.  Our text can represent our written argument, just like any scholarly paper, and our code can formalise our claims that can then be run to demonstrate them.

Once written, we can run our plain text paper through a transpiler like [Literate Coffeescript](https://coffeescript.org/) that will extract the indented codeblocks and transpile them into javascript.

Then we can run the same plain text paper through something like [Pandoc](https://pandoc.org/) to turn it into an interactive webpage as well as convert it into a PDF and automatically format it for your journal of choice (if they are still using a publishing model from last century).

These steps could also be combined into a single command (which is something I really should do).

An example might help right about now.  Here's an argument using this technique to show why we shouldn't infer much about school performance when school selection is present.

The raw source is here ... https://github.com/davekinkead/school-performance/blob/master/paper.coffee.md

A PDF version is here ... https://github.com/davekinkead/school-performance/blob/master/paper.pdf

And the compiled Javascript and interactive webpage is here ... http://dave.kinkead.com.au/school-performance/

The PDF, simulation code, and webpage hosting it, all come from the one source.  And that's it ... Simluation-as-Argument.