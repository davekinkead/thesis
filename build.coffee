browserify = require 'browserify'
coffeeify = require 'coffeeify'
pandoc = require 'node-pandoc'

cb = (err, data) ->
  console.log err if err

build = (chapter) ->
  chapter = "0" + chapter if chapter < 10
  source = "chapters/#{chapter}/chapter.coffee.md"
  args = "--from markdown --to html5 --output chapter-#{chapter}.html --template assets/template.html --css assets/styles.css --filter pandoc-citeproc"
  pandoc source, args, cb

build chapter for chapter in [1..7]

# bundle = browserify
#   extensions: ['.coffee.md']

# bundle.transform coffeeify,
#   bare: false
#   header: true

# bundle.add 'foo.coffee'

# bundle.bundle (error, result) ->
#   throw error if error?
#   process.stdout.write result