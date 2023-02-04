const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>home page</h1>')
    res.end()
}
  
})

server.listen(5000)
