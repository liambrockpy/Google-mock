const app = require('./app')
const express = require('express')
// const server = express();

const port = 3000;

app.listen(port, () => {
    console.log(`[SERVER]: Server running at http://localhost:${port}`)
})

// server.get('/', (req, res) => {
//     res.send('AHHHHH')
// })

// const searchRoutes = require('./controllers/searches');
// server.use('/google', searchRoutes);

// module.exports = server;
