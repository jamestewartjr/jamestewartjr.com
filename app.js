var express = require('express')

const router = express()

router.get('/', (request, response) => {
  response.send('Hi James')
})

router.listen(2017, () => {
  console.log('The server is on in 2017')
})
