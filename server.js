/*const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);*/

var socket = require('socket.io');
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = socket.listen(server);


io.on('connection', function(client){
    console.log('a user connected');
    client.emit('serverMsg');

    /*socket.on('disconnect',function(){
        console.log('user disconnected');
    });

    socket.on('myEvent', function(data, ack){
        socket.emit('serverMsg');
        ack(data);
    });*/
});

server.listen(8125);