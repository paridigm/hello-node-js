// content of server/index.js

const http = require('http')
const port = 3000

// post the url to the console (not sure what favicon.ico is)
// and respond to the website with a string
const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

// create server
const server = http.createServer(requestHandler)

// makes the server start listening
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
