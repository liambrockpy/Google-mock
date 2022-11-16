const express = require('express')
const searchService = require('./search.service')
const searchRouter = express.Router()

// test route
// searchRouter.get('/', async (req, res) => {
//     try {
//         res.status(200).json({ testMessage: 'Hello, World!' })
//     } catch (err) {
//         res.status(500).send(err.message)
//     }
// })

// search query route
searchRouter.get('/', async (req, res) => {
    const searchQuery = req.query.value
    try {
        const allResults = await searchService.findAllByQuery(searchQuery)
        res.status(200).send(allResults)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

searchRouter.get('/random', async (req, res) => {
    const searchQuery = req.query.value
    try {
        const randomResult = await searchService.findRandomByQuery(searchQuery)
        res.status(200).send(randomResult)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = searchRouter
