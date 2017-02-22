const express = require('express')

const router = express()

router.get('/', (request, response) => {
  response.send('This still is working, but I should probably change this soon. Nodemon added correctly.')
})

router.listen(2017, () => {
  console.log('The server is listening on 2017')
})

router.use( (request, response) => {
  res.status(404).send("Sorry can't find that!")
})
