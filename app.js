const express = require('express')
const app = express()
const domainRouter = require('./routes/api/domains')



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/domain', domainRouter)

module.exports = app