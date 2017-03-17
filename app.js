"use strict";

// setup express and socket.io

const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static('public'));
app.use(express.static('bower_components'));

// configuration
const Config = require('./lib/config');
const config = new Config();

// handle Socket events
io.on('connection', function (socket) {

    socket.on('playerConnect', console.log)

});

server.listen(config.port, function () {
    console.log(`Highcard running on port ${config.port}`)
})