const path = require('path');
const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io').server;



app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

const port = 5000;

server.listen(port, () => {
    console.log(`app is running on port ${port}`)
})