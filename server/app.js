const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const CountrySearch = require('./search')

const app = express();
// const router = express.Router();

const port = 3000;

app.get('/', (req, res) => {
    const search = CountrySearch.all
    res.send(search)
})

app.get('/random', (req, res) => {
    try {
        const num = Math.floor(Math.random() * 30);
        const selectedSearch = CountrySearch.findById(num);
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: err.message });
    }
})

app.get('/random/canada', (req, res) => {
    try {
        const num = Math.floor(Math.random() * 10) + 1;
        const selectedSearch = CountrySearch.findById(num);
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: err.message });
    }
})

app.get('/random/newzealand', (req, res) => {
    try {
        const num = Math.floor(Math.random() * (20 - 11 + 1)) + 11;
        const selectedSearch = CountrySearch.findById(num);
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: err.message });
    }
})

app.get('/random/unitedkingdom', (req, res) => {
    try {
        const num = Math.floor(Math.random() * (30 - 21 + 1)) + 21;
        const selectedSearch = CountrySearch.findById(num);
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: err.message });
    }
})

app.get('/:id', (req, res) => {
    try {
        const searchItem = parseInt(req.params.id);
        const selectedSearch = CountrySearch.findById(searchItem);
        if (searchItem < 1 || searchItem > 30) {
            throw new Error('Choose a number between 1 and 30.')
        }
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: err.message })
    }
})

//create a global event listener
app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`)
});
// parse JSON into JS
app.use(bodyParser.json());
// enable CORS for all requests
app.use(cors());
// log HTTP requests
app.use(morgan('combined'));

module.exports = app;

