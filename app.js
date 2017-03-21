const express = require('express')
const path = require('path')
const app = express()
const logger = require('morgan')

// app.use( (request, response) => {
//   response.status(404).send('Sorry cannot find that!')
// })

app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'pug')
app.set('port', 2017 || process.env.PORT)
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

app.listen(app.get('port'), () => {
  console.log('The server is listening on 2017')
})

app.get('/', (request, response) => {
  response.render('landing')
})

// app.get('/about', (request, response) => {
//   response.render('about')
// })
//
// app.get('/contact', (request, response) => {
//   response.render('contact')
// })
//
// app.get('/work', (request, response) => {
//   response.render('work')
// })
