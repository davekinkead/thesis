#
# Copyright Dave Kinkead (C) 2016
#

about:
	@echo "Argumentum in Silico: A Computational Methodology of Philosophy"
	@echo "  -- A thesis submitted for the degree of Doctor of Philosophy"
	@echo "  -- by Dave Kinkead, University of Queensland"
	@echo "  -- School of Historical and Philosophical Inqury"
	@echo "  -- contact the author via d.kinkead@uq.edu.au"

index: 
	@echo "Building front matter"
	@make html
	@pandoc -f markdown -t html5 -o index.html -s --include-in-header=css --filter pandoc-citeproc README.md
	
	@echo "</script></body></html>" > tail 
	@ghead -n -2 index.html > body
	@echo "<script>" | cat - assets/analytics.js > js
	@cat body js tail > index.html
	@rm  body css js tail


introduction:
	@echo "Building the Introduction"
	@make html
	@pandoc -f markdown -t html5 -o chapters/01/index.html -s --include-in-header=css --filter pandoc-citeproc chapters/01-introduction/chapter.md
	
	@echo "</script></body></html>" > tail 
	@ghead -n -2 chapters/01/index.html > body
	@echo "<script>" | cat - assets/analytics.js > js
	@cat body js tail > chapters/01/index.html
	@rm  body css js tail


school-performance: 
	@echo "Building School Performance Chapter"
	
	@# Create a location for the assets
	@mkdir -p assets

	@# Build the simulation
	@browserify -t coffeeify chapter.coffee.md > assets/simulation.js
	
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
	

# condorcet:
# 	@echo "Building Condorcet Chapter"
# 	@make html
# 	@pandoc -f markdown -t html5 -o chapters/03-questioning-the-jury-theory/index.html -s --include-in-header=css --filter pandoc-citeproc chapters/03-questioning-the-jury-theory/chapter.coffee.md

# 	@echo "</script></body></html>" > tail 
# 	@ghead -n -2 chapters/03-questioning-the-jury-theory/index.html > body
# 	@echo "<script>" | cat - assets/analytics.js > js
# 	@cat body js tail > chapters/03-questioning-the-jury-theory/index.html
# 	@rm  body css js tail

# hobbes:
# 	@echo "Building Hobbes Chapter"
# 	@make html
# 	@pandoc -f markdown -t html5 -o chapters/06-states-of-nature/index.html -s --include-in-header=css --filter pandoc-citeproc chapters/06-states-of-nature/chapter.coffee.md

# 	@browserify -t coffeeify chapters/06-states-of-nature/chapter.coffee.md > simulation.js

# 	@echo "</script></body></html>" > tail 
# 	@ghead -n -2 chapters/06-states-of-nature/index.html > body
# 	@echo "<script>" | cat - simulation.js > js
# 	@cat body js assets/analytics.js tail > chapters/06-states-of-nature/index.html
# 	@rm  body js tail css simulation.js

# html: 
# 	@echo "Building the HTML"
# 	@mkdir -p assets
# 	@echo "<style type=\"text/css\">" | cat - assets/styles.css > css
# 	@echo "</style>" >> css



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