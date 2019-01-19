const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

const port = 5000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})