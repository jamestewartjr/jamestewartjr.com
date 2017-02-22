const express = require('express')

const router = express()

router.get('/', (request, response) => {
  response.send('I should probably change this.')
})

router.listen(2017, () => {
  console.log('The server is listening on 2017')
})

router.use( (request, response) => {
  res.status(404).send("Sorry can't find that!")
})
