const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const searchRouter = require('./controllers/search/search.router.js')

const app = express()

// parse JSON into JS
app.use(bodyParser.json())

// enable CORS for all requests
app.use(cors())

// log HTTP requests
app.use(morgan('combined'))

app.use('/search', searchRouter)

module.exports = app
