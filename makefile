#
# Copyright Dave Kinkead (C) 2016
#

paper: 
	@echo ""
	@echo "What can student results tell us about school performance?"
	@echo "  -- by Dave Kinkead, University of Queensland"
	@echo "  -- contact the author via d.kinkead@uq.edu.au"
	@echo ""
	@echo "Compiling the raw paper into a rich HTML and javascript simulation........"
	
	@# Create a location for the assets
	@mkdir -p assets
	
	@# Build the simulation
	@browserify -t coffeeify paper.coffee.md > assets/simulation.js
	
	@# Build the HTML
	@echo "<style type=\"text/css\">" | cat - assets/styles.css > css
	@echo "</style>" >> css
	@pandoc -f markdown -t html5 -o index.html -s --include-in-header=css --filter pandoc-citeproc 	paper.coffee.md
	
	@# Inline the scripts
	@echo "</script></body></html>" > tail 
	@ghead -n -2 index.html > body
	@echo "<script>" | cat - assets/simulation.js > sim
	@cat body sim assets/analytics.js tail > index.html
	@rm  body sim tail css
	
	@echo ""
	@echo "Build complete - open index.html in your browser"