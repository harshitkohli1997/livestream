const cv = require('opencv4nodejs');
const path = require('path');
const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const wCap = new cv.VideoCapture(0);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

setInterval(() => {
    const frame = wCap.read();
    const image = cv.imencode('.jpg',frame).toString('base64');
    io.emit('image',image);
}, 25); // play with time value for diff rendering

const port = 5000;

server.listen(port, () => {
    console.log(`app is running on port ${port}`)
})