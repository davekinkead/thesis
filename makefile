#
# Copyright Dave Kinkead (C) 2016
#

about:
	@echo "Computational Philosophy: A Thesis"
	@echo "  - by Dave Kinkead"
	@echo "  - d.kinkead@uq.edu.au"
	@echo "  - University of Queensland"

introduction:
	@echo "Building the Introduction"

hobbes:
	@echo "Building Hobbes Chapter"
	@make html
	@pandoc -f markdown -t html5 -o chapters/06-states-of-nature/index.html -s --include-in-header=css --filter pandoc-citeproc chapters/06-states-of-nature/chapter.coffee.md

	@browserify -t coffeeify chapters/06-states-of-nature/chapter.coffee.md > simulation.js

	@echo "</script></body></html>" > tail 
	@ghead -n -2 chapters/06-states-of-nature/index.html > body
	@echo "<script>" | cat - simulation.js > sim
	@cat body sim assets/analytics.js tail > chapters/06-states-of-nature/index.html
	@rm  body sim tail css simulation.js

html: 
	@echo "Building the HTML"
	@mkdir -p assets
	@echo "<style type=\"text/css\">" | cat - assets/styles.css > css
	@echo "</style>" >> css



# # Build the simulation
# browserify -t coffeeify paper.coffee.md > assets/simulation.js

# # Build the HTML
# echo "<style type=\"text/css\">" | cat - assets/styles.css > css
# echo "</style>" >> css
# pandoc -f markdown -t html5 -o index.html -s --include-in-header=css --filter pandoc-citeproc paper.coffee.md

# # Inline the scripts
# echo "</script></body></html>" > tail 
# ghead -n -2 index.html > body
# echo "<script>" | cat - assets/simulation.js > sim
# cat body sim assets/analytics.js tail > index.html
# rm  body sim tail css

# echo ""
# echo "Build complete - open index.html in your browser"