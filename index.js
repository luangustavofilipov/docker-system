const express =require('express');
const { dirname } = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, HOST);
console.log('Server hosted at http://localhost', + PORT);