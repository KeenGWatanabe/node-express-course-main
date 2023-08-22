const { time, timeStamp } = require('console')
const { readFile, writeFile } = require('fs')
//writing timestamp in nodejs
const timestamp = Date.now();
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth()+1; //Jan is 0, therefore month will always +1
const year = dateObject.getFullYear();

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Lets change the script and see: ${first}, overwritten by 11-fs-async2.js dated ${year}-${month}-${date}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
