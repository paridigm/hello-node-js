// views/index.js

const path = require('path')
const express = require('express')  // express is a method of easily making http calls (without using http lib)
const exphbs = require('express-handlebars')

/*
This is pretty cool.

With the http library, there was only a single request handler instatiated before the server http server was created.

The express library kindof breaks apart request handlers as individual function calls

*/
// NOTE: use, npm install libname --save
// the --save option puts it in the this projects dependencies

const app = express() // this constructor creates a non-listening server
const port = 3000

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, './layouts')
}))
app.set('view engine', '.hbs')                    // sets the engine file ext?
app.set('views', path.join(__dirname, '.'))       // set the views directory

// when a GET HTTP request is called (going to a website)... render!
app.get('/', (request, response) => {
  response.render('home', {
    name: 'Tom'
  })
})

// boot up the server
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
