# Spatialised Prisoner's Dilemma

This an agent based simulation of an evolutionary spatialised prisoner's dilemma.

The idea is that:

- agents exist in a space
- they have a strategy (see below)
- they interact with all other agents in their neighbourhood
- they adapt their strategy based on neighbourhood dominance

### Strategies

Agents can perform one of 8 possible strategies (cooperate or defect) based on the action of other agents.  Read < i, c, d > as < initial action, response to cooperation, response to defection >.

- < 0, 0, 0>	All Defect
- < 0, 0, 1>	Suspicious Perverse
- < 0, 1, 0>	Suspicious Tit-for-Tat
- < 0, 1, 1>	D-then-All-Cooperate
- < 1, 0, 0>	C-then-All-Defec
- < 1, 0, 1>	Perverse
- < 1, 1, 0>	Tit-for-Tat
- < 1, 1, 1>	All Cooperate

Follow a more details explaination of the process in the [simulation code](simulation.coffee.md).

Provides that friendly-tit-for-tat can get an adequate beachhead, it will always dominate the simulation (although occasional pockets of all-cooperation survive tit-for-tat).  Interestingly, a little random walk (of only 5 pixels) is needed for this to happen.  Without it, tit-for-tat can't establish a deep enough beachhead in the highly random assignment of initial positions.

## Usage

Fork this repo and then just open `index.html` in any browser and the simulation will automatically run.


## Customisation

Customising the simulation is easy.  Code of note is organised thusly:

		/
		- assets
			- styles.css
			- browser.js
			- d3.min.js
		- simulation.coffee.md
		- browser.coffee.md
		- index.html

Simulation logic is found in `simulation.coffee.md` while presentation code and D3.js hacks are in `browser.coffee.md`.  To alter the simulation, edit thse files and don't go touch'n `browser.js`.

The coffeescript files need to be built and compiled into `browser.js`.  To build, type the following:

		browserify -t coffeeify browser.coffee.md > assets/browser.js

You'll need to install browserify and coffeeify if you haven't already.

Licensed under a CC-BY-SA license.