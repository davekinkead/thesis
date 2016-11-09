browserify = require 'browserify'
coffeeify = require 'coffeeify'
pandoc = require 'node-pandoc'
fs = require 'fs'

prepare_js = (chapter) ->
  return new Promise (resolve, reject) ->
    bundle = browserify
      extensions: ['.coffee.md']

    bundle.transform coffeeify
    bundle.add "chapters/#{chapter.number}/chapter.coffee.md"
    bundle.bundle (err, js) ->
      console.log err if err
      fs.writeFileSync "assets/chapter-#{chapter.number}.js", js, "utf8"
      resolve chapter


render_html = (chapter) ->
  return new Promise (resolve, reject) ->
    source = "chapters/#{chapter.number}/chapter.coffee.md"
    args = "--from markdown --to html5 --output chapter-#{chapter.number}.html --template assets/chapter.html --css assets/styles.css --filter pandoc-citeproc --metadata=chapter:#{chapter.number} --self-contained"
    resolve pandoc source, args, (err, data) ->
      console.log err if err


build = (number) ->
  chapter = {}
  chapter.number = "0" + number if number < 10
  prepare_js chapter
    .then render_html chapter


build chapter for chapter in [1..7]


# to build the readme, use:
# $ pandoc readme.md -f markdown -t html5 -o index.html --css assets/styles.css --filter pandoc-citeproc


# bundle = browserify
#   extensions: ['.coffee.md']

# bundle.transform coffeeify,
#   bare: false
#   header: true

# bundle.add 'foo.coffee'

# bundle.bundle (error, result) ->
#   throw error if error?
#   process.stdout.write result