const express = require('express')
const searchService = require('./search.service')
const searchRouter = express.Router()

searchRouter.get('/', async (req, res) => {
    const searchQuery = req.query.value
    try {
        const allResults = await searchService.findAllByQuery(searchQuery)
        res.status(200).send(allResults)
    } catch (err) {
        res.status(500).json(err)
    }
})

searchRouter.get('/random', async (req, res) => {
    const searchQuery = req.query.value
    try {
        const randomResult = await searchService.findRandomByQuery(searchQuery)
        res.status(200).send(randomResult)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = searchRouter
