// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const bcrypt = require('bcrypt');
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    console.log(`API listening on PORT ${3001} `)
})

app.get('/', (req, res) => {
    res.send('Hey this is my API running on My Port 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app