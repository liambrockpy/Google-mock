const express = require('express')
const searchService = require('./search.service')
const searchRouter = express.Router()

searchRouter.get('/', async (req, res) => {
    try {
        res.status(200).json({ testMessage: 'Hello, World!' })
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = searchRouter
