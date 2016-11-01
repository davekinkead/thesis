const exec = require('child_process').exec
const hello = 'world'



exec("browserify -t coffeeify chapters/06/chapter.md > assets/chapter-06.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return;
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})