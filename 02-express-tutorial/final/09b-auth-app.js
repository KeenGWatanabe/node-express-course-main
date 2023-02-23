const express = require('express')
const app = express()
const logger = require('./09b-logger')
const authorize = require('./09b-authorize')
//  req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
