# Lit Review

## SEP: Computer Simulations in Science

@InCollection{sep-simulations-science,
	author       =	{Winsberg, Eric},
	title        =	{Computer Simulations in Science},
	booktitle    =	{The Stanford Encyclopedia of Philosophy},
	editor       =	{Edward N. Zalta},
	howpublished =	{\url{http://plato.stanford.edu/archives/sum2015/entries/simulations-science/}},
	year         =	{2015},
	edition      =	{Summer 2015},
}

> In its narrowest sense, a computer simulation is a program that is run on a computer and that uses step-by-step methods to explore the approximate behavior of a mathematical model. Usually this is a model of a real-world system (although the system in question might be an imaginary or hypothetical one).

>  When run on a computer, the algorithm thus produces a numerical picture of the evolution of the system's state, as it is conceptualized in the model.

> Paul Humphreys: “any computer-implemented method for exploring the properties of mathematical models where analytic methods are not available” (1991, 500).

> Computer simulations are often used either because the original model itself contains discrete equations—which can be directly implemented in an algorithm suitable for simulation—or because the original model consists of something better described as rules of evolution than as equations.

> Finally, when speaking of “a computer simulation” in the narrowest sense, we should be speaking of a particular implementation of the algorithm on a particular digital computer, written in a particular language, using a particular compiler, etc. There are cases in which different results can be obtained as a result of variations in any of these particulars.

> More broadly, we can think of computer simulation as a comprehensive method for studying systems.

> Winsberg 2003 (111). “Successful simulation studies do more than compute numbers. They make use of a variety of techniques to draw inferences from these numbers. Simulations make creative use of calculational techniques that can only be motivated extra-mathematically and extra-theoretically. As such, unlike simple computations that can be carried out on a computer, the results of simulations are not automatically reliable. Much effort and expertise goes into deciding which simulation results are reliable and which are not.”

This account is more what I am after:

> Another approach is to try to define “simulation” independently of the notion of computer simulation, and then to define “computer simulation” compositionally: as a simulation that is carried out by a programmed digital computer. On this approach, a simulation is any system that is believed, or hoped, to have dynamical behavior that is similar enough to some other system such that the former can be studied to learn about the latter.

Simulation as an accurate approximation of some phenomena under investigation

> Two types of computer simulation are often distinguished: equation-based simulations and agent-based (or individual-based) simulations.

> Equation-based simulations are most commonly used in the physical sciences and other sciences where there is governing theory that can guide the construction of mathematical models based on differential equations

>  Agent-based simulations are similar to particle-based simulations in that they represent the behavior of n-many discrete individuals. But unlike equation-particle-based simulations, there are no global differential equations that govern the motions of the individuals. Rather, in agent-based simulations, the behavior of the individuals is dictated by their own local rules

 > Multiscale simulation models, in particular, couple together modeling elements from different scales of description.

 I wont be focussing on multiscale models.

Monte Carlo sim

 > MC simulations are computer algorithms that use randomness to calculate the properties of a mathematical model and where the randomness of the algorithm is not a feature of the target model.

> Grüne-Yanoff and Weirich (2010) offer the following reasoning: “The Monte Carlo approach does not have a mimetic purpose: It imitates the deterministic system not in order to serve as a surrogate that is investigated in its stead but only in order to offer an alternative computation of the deterministic system's properties” (p.30).

>  However, as Beisbart and Norton (2012, Other Internet Resources) point out, some MC simulations (viz. those that use MC techniques to solve stochastic dynamical equations referring to a physical system) are in fact simulations of the systems they study.

> There are three general categories of purposes to which computer simulations can be put. Simulations can be used for heuristic purposes, for the purpose of predicting data that we do not have, and for generating understanding of data that we do already have.

Purpose

> Under the category of heuristic models, simulations can be further subdivided into those used to communicate knowledge to others, and those used to represent information to ourselves.

> Computer simulations can be used for both of these kinds of purposes—to explore features of possible representational structures; or to communicate knowledge to others.

> We can use models to predict the future, or to retrodict the past; we can use them to make precise predictions or loose and general ones.

Predictions can be point, qualitative, or range based

> Finally, simulations can be used to understand systems and their behavior. If we already have data telling us how some system behaves, we can use computer simulation to answer questions about how these events could possibly have occurred; or about how those events actually did occur.

Epistemology

Can simulations "be counted as epistemic peers with experiments and traditional analytic theoretical methods"

> The relevant question is always whether or not the results of a particular computer simulation are accurate enough for their intended purpose.

What type of inference does simulation warrant?  And how can a claim of warrant be justified?

> Epistemology of computer simulation (EOCS), in other words, is rarely about testing the basic theories that may go into the simulation, and most often about establishing the credibility of the hypotheses that are, in part, the result of applications of those theories.

> Winsberg (2001) argued that, unlike the epistemological issues that take center stage in traditional confirmation theory, an adequate EOCS must meet three conditions. In particular it must take account of the fact that the knowledge produced by computer simulations is the result of inferences that are downward, motley, and autonomous.

> Downward. EOCS must reflect the fact that in a large number of cases, accepted scientific theories are the starting point for the construction of computer simulation models and play an important role in the justification of inferences from simulation results to conclusions about real-world target systems.

> Motley. EOCS must take into account that simulation results nevertheless typically depend not just on theory but on many other model ingredients and resources as well, including parameterizations (discussed above), numerical solution methods, mathematical tricks, approximations and idealizations, outright fictions, ad hoc assumptions, function libraries, compilers and computer hardware, and perhaps most importantly, the blood, sweat, and tears of much trial and error.

> Autonomous. EOCS must take into account the autonomy of the knowledge produced by simulation in the sense that the knowledge produced by simulation cannot be sanctioned entirely by comparison with observation. Simulations are usually employed to study phenomena where data are sparse. In these circumstances, simulations are meant to replace experiments and observations as sources of data about the world because the relevant experiments or observations are out of reach, for principled, practical, or ethical reasons.

> In the social and behavioral sciences, and other disciplines where agent-based simulation (see 2.2) are more the norm, and where models are built in the absence of established and quantitative theories, EOCS probably ought to be characterized in other terms.

> some social scientists who use agent-based simulation pursue a methodology in which social phenomena (for example an observed pattern like segregation) are explained, or accounted for, by generating similar looking phenomena in their simulations (Epstein and Axtell 1996; Epstein 1999).

> Frigg and Reiss (2009) argued that none of these three conditions are new to computer simulation. They argued that ordinary ‘paper and pencil’ modeling incorporate these features.

> Parker believes that too much of what passes for simulation model evaluation lacks rigor and structure because it:

> > consists in little more than side-by-side comparisons of simulation output and observational data, with little or no explicit argumentation concerning what, if anything, these comparisons indicate about the capacity of the model to provide evidence for specific scientific hypotheses of interest. (2008b, 381)

> Verification is said to be the process of determining whether the output of the simulation approximates the true solutions to the differential equations of the original model.

>  Verification can be divided into solution verification and code verification. The former verifies that the output of the intended algorithm approximates the true solutions to the differential equations of the original model. The latter verifies that the code, as written, carries out the intended algorithm.

> Validation, on the other hand, is said to be the process of determining whether the chosen model is a good enough representation of the real-world system for the purpose of the simulation.

> Winsberg (2010) argued that it is misleading to think that the epistemology of simulation is cleanly divided into an empirical part (verification) and a mathematical (and computer science) part (validation.)

> Verification can be thought of as solving the chosen equations correctly, while validation is choosing the correct equations in the first place” (Roy 2005).

>  The equations we choose often reflect a compromise between what we think best describes the phenomena and computational tractability.

> If we want to understand why simulation results are taken to be credible, we have to look at the epistemology of simulation as an integrated whole, not as cleanly divided into verification and validation—each of which, on its own, would look inadequate to the task.

Experiment

> The idea of “in silico” experiments becomes even more plausible when a simulation study is designed to learn what happens to a system as a result of various possible interventions

How are simulations and experiements alike?

> The identity thesis. Computer simulation studies are literally instances of experiments.

> The epistemological dependence thesis. The identity thesis would (if it were true) be a good reason (weak version), or the best reason (stronger version), or the only reason (strongest version; it is a necessary condition) to believe that simulations can provide warrants for belief in the hypotheses that they support. A consequence of the strongest version is that only if the identity thesis is true is there reason to believe that simulations can confer warrant for believing in hypotheses.

> The central idea behind the epistemological dependence thesis is that experiments are the canonical entities that play a central role in warranting our belief in scientific hypotheses, and that therefore the degree to which we ought to think that simulations can also play a role in warranting such beliefs depends on the extent to which they can be identified as a kind of experiment.

> According to Norton and Suppe (2001), simulations can warrant belief precisely because they literally are experiments.

> It confuses, Peshard (2010) argues, the epistemic target of an experiment with its epistemic motivation.

Emergence

> (2011). Bedau argued that any conception of emergence must meet the twin hallmarks of explaining how the whole depends on its parts and how the whole is independent of its parts.

> Systems that produce emergent properties are mere mechanisms, but the mechanisms are very complex (they have very many independently interacting parts). As a result, there is no way to figure out exactly what will happen given a specific set of initial and boundary conditions, except to “crawl the causal web”.





---

  -  Conradt, L. and C. List, 2009, “Group decisions in humans and animals: a survey.” Philosophical Transactions of the Royal Society, B 364: 719–742.

  - Brandt, F., V. Conitzer, and U. Endriss, 2013, “Computational Social Choice.” Multiagent Systems. G. Weiss (ed.). Cambridge, MA: MIT Press, pp. 213–283.


  - Barberousse, A., and P. Ludwig, 2009. “Models as Fictions,” in Fictions  - Science. Philosophical Essays in Modeling and Idealizations, Lond  - Routledge, 56–73.
  - Bedau, M.A., 2011. “Weak emergence and computer simulation,” in P. Humphreys   - C. Imbert (eds.), Models, Simulations, and Representations, New Yo  - Routledge, 91–114.
  - –––, 1997. “Weak Emergence,” Noûs (Supplement 11), 31: 375–399.
  - Beisbart, C. and J. Norton, 2012. “Why Monte Carlo Simulations are Inferen  - and not Experiments,” in International Studies in Philosophy of Science,   - 403–422.
  - Dardashti, R., Thebault, K., and Winsberg, E., forthcoming. “Confirmation   - analogue simulation: what dumb holes could tell us about gravity,”  - British Journal for the Philosophy of Science,
  - Epstein, J., and R. Axtell, 1996. Growing artificial societies: Social scie  - from the bottom-up, Cambridge, MA: MIT Press.
  - Epstein, J., 1999. “Agent-based computational models and generative soc  - science,” Complexity, 4(5): 41–57.
  - Franklin, A., 1996. The Neglect of Experiment, Cambridge: Cambridge Univers  - Press.
  - –––, 1989. “The Epistemology of Experiment,” The Uses of Experiment, D. Goodi  - T. Pinch and S. Schaffer (eds.), Cambridge: Cambridge University Pre  - 437–60.
  - Frigg, R., and J. Reiss, 2009. “The philosophy of simulation: Hot new issues  - same old stew,” Synthese, 169: 593–613.
  - Giere, R. N., 2009. “Is Computer Simulation Changing the Face of Experimentat  - ,” Philosophical Studies, 143: 59–62
  - Gilbert, N., and K. Troitzsch, 1999. Simulation for the Social Scienti  - Philadelphia, PA: Open University Press.
  - Grüne-Yanoff, T., 2007. “Bounded Rationality,” Philosophy Compass, 2(3): 534–563.
  - Grüne-Yanoff, T. and Weirich, P., 2010. “Philosophy of Simulation,” Simulat  - and Gaming: An Interdisciplinary Journal, 41(1): 1–31.
  - Guala, F., 2002. “Models, Simulations, and Experiments,” Model-Based Reasoni  - Science, Technology, Values, L. Magnani and N. Nersessian (eds.), New Yo  - Kluwer, 59–74.
  - –––, 2008. “Paradigmatic Experiments: The Ultimatum Game from Testing  - Measurement Device,” Philosophy of Science, 75: 658–669.
  - Hacking, I., 1983. Representing and Intervening: Introductory Topics in   - Philosophy of Natural Science, Cambridge: Cambridge University Press.
  - –––, 1988. “On the Stability of the Laboratory Sciences,” The Journal  - Philosophy, 85: 507–15.
  - –––, 1992. “Do Thought Experiments have a Life of Their Own?” PSA (Volume 2),  - Fine, M. Forbes and K. Okruhlik (eds.), East Lansing: The Philosophy  - Science Association, 302–10.
  - Hartmann, S., 1996. “The World as a Process: Simulations in the Natural   - Social Sciences,” in R. Hegselmann, et al. (eds.), Modelling and Simulat  - in the Social Sciences from the Philosophy of Science Point of Vi  - Dordrecht: Kluwer, 77–100.
  - Hughes, R., 1999. “The Ising Model, Computer Simulation, and Universal Physic  - in M. Morgan and M. Morrison (eds.), Models as Mediators, Cambrid  - Cambridge University Press.
  - Huggins, E. M.,and E. A. Schultz, 1967. “San francisco bay in a warehous  - Journal of the Institute of Environmental Sciences and Technology, 10(  - 9–16.
  - Humphreys, P., 1990. “Computer Simulation,” in A. Fine, M. Forbes, and  - Wessels (eds.), PSA 1990 (Volume 2), East Lansing, MI: The Philosophy  - Science Association, 497–506.
  - –––, 1995. “Computational science and scientific method,” in Minds and Machin  - 5(1): 499–512.
  - –––, 2004. Extending ourselves: Computational science, empiricism,   - scientific method, New York: Oxford University Press.
  - –––, 2009. “The philosophical novelty of computer simulation methods,” Synthe  - 169: 615–626.
  - Kaufmann, W. J., and L. L. Smarr, 1993. Supercomputing and the Transformation  - Science, New York: Scientific American Library.
  - Laymon, R., 1985. “Idealizations and the testing of theories by experimentat  - ” in Observation, Experiment and Hypothesis in Modern Physical Science,  - Achinstein and O. Hannaway (eds.), Cambridge, MA: MIT Press, 147–73.
  - Lenhard, J., 2007. “Computer simulation: The cooperation between experiment  - and modeling,” Philosophy of Science, 74: 176–94.
  - Morgan, M., 2003. “Experiments without material intervention: Model experimen  - virtual experiments and virtually experiments,” in The Philosophy  - Scientific Experimentation, H. Radder (ed.), Pittsburgh, PA: Univers  - ofPittsburgh Press, 216–35.
  - Morrison, M., 2012. “Models, measurement and computer simulation: The chang  - face of experimentation,” Philosophical Studies, 143: 33–57.
  - Norton, S., and F. Suppe, 2001. “Why atmospheric modeling is good science,”  - Changing the Atmosphere: Expert Knowledge and Environmental Governance,  - Miller and P. Edwards (eds.), Cambridge, MA: MIT Press, 88–133.
  - Oberkampf, W. and C. Roy, 2010. Verification and Validation in Scienti  - Computing, Cambridge University Press.
  - Oreskes, N., with K. Shrader-Frechette and K. Belitz, 1994. “Verificati  - Validation and Confirmation of Numerical Models in the Earth Science  - Science, 263(5147): 641–646.
  - Parke, E., 2004. “Experiments, Simulations, and Epistemic Privilege,” Philoso  - of Science, 81(4): 516–36.
  - Parker, W., 2008a. “Franklin, Holmes and the Epistemology of Computer Simulat  - ” International Studies in the Philosophy of Science, 22(2): 165–83.
  - –––, 2008b. “Computer Simulation through an Error-Statistical Lens,” Synthe  - 163(3): 371–84.
  - –––, 2009a. “Does Matter Really Matter? Computer Simulations, Experiments   - Materiality,” Synthese, 169(3): 483–96.
  - –––, forthcoming. “Computer Simulation,” in S. Psillos and M. Curd (eds.),   - Routledge Companion to Philosophy of Science, 2nd Edition, London: Routledge.
  - Peschard, I., 2010. “Modeling and Experimenting,” in P. Humphreys and C. Imbe  - eds), Models, Simulations, and Representations, London: Routledge, 42–61.
  - Purves, G.M., forthcoming. “Finding truth in fictions: identifying non-ficti  - in imaginary cracks,” Synthese.
  - Roy, S., 2005. “Recent advances in numerical methods for fluid dynamics and h  - transfer,” Journal of Fluid Engineering, 127(4): 629–30.
  - Schelling, T. C., 1971. “Dynamic Models of Segregation,” Journal of Mathemati  - Sociology, 1: 143–186.
  - Simon, H., 1969. The Sciences of the Artificiald,. Boston, MA: MIT Press.
  - Toon, A., 2010. “Novel Approaches to Models,” Metascience, 19(2): 285–288.
  - Trenholme R., 1994. “Analog Simulation,” Philosophy of Science, 61: 115–131.
  - Unruh, W. G., 1981. “Experimental black-hole evaporation?” Physical Rev  - Letters, 46(21): 1351–53.
  - Winsberg, E., 2010. Science in the Age of Computer Simulation, Chicago:   - University of Chicago Press.
  - –––, 2009a. “A Tale of Two Methods,” Synthese, 169(3): 575–92
  - –––, 2009b. “Computer Simulation and the Philosophy of Science,” Philoso  - Compass, 4/5: 835–845.
  - –––, 2009c. “A Function for Fictions: Expanding the scope of science,”  - Fictions in Science: Philosophical Essays on Modeling and Idealization,  - Suarez (ed.), London: Routledge.
  - –––, 2006. “Handshaking Your Way to the Top: Inconsistency and falsification  - intertheoretic reduction,” Philosophy of Science, 73: 582–594.
  - –––, 2003. “Simulated Experiments: Methodology for a Virtual World,” Philoso  - of Science, 70, 105–125.
  - –––, 2001. “Simulations, Models, and Theories: Complex Physical Systems   - their Representations,” Philosophy of Science, 68: S442-S454.
  - –––, 1999. “Sanctioning Models: The Epistemology of Simulation,” Science in Context, 12(3): 275–92.
