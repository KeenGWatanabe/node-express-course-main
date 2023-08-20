// looking for file path
const path = require('path')

console.log('this is platform separator:',path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log('this is a file path:',filePath)

const base = path.basename(filePath)
console.log('this is a basename:',base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log('this is an absolute path:',absolute)
