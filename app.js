const express = require('express')
const path = require('path')
const app = express()
const logger = require('morgan')

// app.use( (request, response) => {
//   response.status(404).send('Sorry cannot find that!')
// })

app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

app.get('/', (request, response) => {
  response.render('landing')
})

const server = app.listen(process.env.PORT || 2017, () => {
  console.log('listening on 2017')
})

module.exports = server

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
