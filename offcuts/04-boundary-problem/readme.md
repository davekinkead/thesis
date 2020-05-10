# Doing Philosophy with Git & Coffeescript

This is an experiment in computational philosophy.  For a while now, I've had an idea to model political theory.   Not the real world of politics mind you.  What I'm interested in is the claims of theorists that underpin claims about how the real world is or should be.  I want to model theory, not reality.

I also want to try and utilise git VCS in the process of writing an academic paper. My aim is to find a balance between the 'publish early, publish often' and open-history mantras of open source software development; the many wrong turns and dead ends that characterise research; and tendency of many in academia to [only publish polished work][1], lest we be judged poorly on our early ideas.

[1]: http://chronicle.com/blogs/profhacker/fork-the-academy/48935


## About the paper

The content of this paper will also be pretty unique. It's an argument about the relationship between democratic inclusion and instrumental justifications of democracy.  I demonstrate that any account of democracy that relies on the outcomes of democracy processes to show democracy's value must have a congruent account of inclusion.  Not only that, but because different accounts of democracy rely on different and incompatible accounts of inclusion, these accounts of democracy are themselves incompatible.


## Running the simulation

First you'll need to install [node](https://npmjs.org/doc/install.html) and [coffeescript](http://coffeescript.org/#installation).  If you aren't using a *nix system, this is going to suck, so buy a mac or install Linux - both will make your life better in general.

Next fork this repo and you'll have a copy of the paper & helper libraries.  To run the simulation, type `coffee paper.coffee.md epistemic|preference|character` to run the simulation for either the epistemic, preference, or character models.

To generate the HTML or PDF, use the markdown converter of your choice.  I use Marked.app with Pandoc as it has a good CSL plugin.


## Git

My initial idea is to explore how branching can be used to find this balance.  The `public` branch will represent relatively solid work to date - work that I'm happy to have others freely link to and fork if the wish. Think of this as the production branch in software development.  

The `draft` branch will be my primary work-in-progress branch.  I'll create separate branches from this for particular ideas and directions I want to head down, and update the public branch from it when I'm happy with the work.

Hopefully, this will mean that only the `public` branch will be visible, unless of course someone goes diving into the branches and history.  And if that's the case, it should be obvious that they are looking at raw ideas.



## Presentations

I presented a work-in-progress to the Munich Centre for Mathematical Philosophy on 23 Apr 2014 and at the Australian National University on 7 Jul 2014.  A copy of the presentation is now available on iTunes University.

**Dave Kinkead**  
University of Queensland

July 2015