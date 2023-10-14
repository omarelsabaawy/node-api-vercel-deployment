// // app.js
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// // const bcrypt = require('bcrypt');
// const app = express();
// dotenv.config();

// app.use(express.json());
// app.use(cors());

// app.listen(3001, () => {
//     console.log(`API listening on PORT ${3001} `)
// })

// app.get('/', (req, res) => {
//     res.send('Hey this is my API running on My Port 🥳')
// })

// app.get('/about', (req, res) => {
//     res.send('This is my about route..... ')
// })

// // Export the Express API
// module.exports = app

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hey this is my API running on My Port 🥳';
        }
    });

    server.route({
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'This is my about route.....';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
