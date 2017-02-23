const express = require('express')
const path = require('path')
const app = express()



app.get('/', (request, response) => {
  response.render('landing')
})






app.use( (request, response) => {
  response.status(404).send('Sorry cannot find that!')
})

app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'pug')

app.set('port', 2017)

app.listen(app.get('port'), () => {
  console.log('The server is listening on 2017')
})
app.set(express.static(path.join(__dirname, 'public')))
