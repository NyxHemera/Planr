'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('dist'));

app.all('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);