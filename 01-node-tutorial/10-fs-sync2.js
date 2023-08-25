// reading file function
const { time, timeStamp } = require('console')
const { readFileSync, writeFileSync } = require('fs')
//writing timestamp in nodejs
const timestamp = Date.now();
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth()+1; //Jan is 0, therefore month will always +1
const year = dateObject.getFullYear();
const hrs = dateObject.getHours()
const min = dateObject.getMinutes()


console.log('start')
writeFileSync('./content/result-sync.txt',
  `< datacamp start on ${year}-${month}-${date} at ${hrs}:${min} >`,
  { flag: 'a' }
)
console.log('done')
