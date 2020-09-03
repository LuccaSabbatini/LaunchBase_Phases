// Packages:
const express = require('express');
const server = express();

// Server Sarter:
server.listen(5000, () => {
    console.log('Server Started!');
})

// Routes:
server.get('/', (req, res) => {
    return res.send('Hello mfs');
});