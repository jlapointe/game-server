/*const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);*/

var socket = require('socket.io');
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = socket.listen(server);
server.listen(8125);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.emit('serverMsg');
    
    /*socket.on('disconnect',function(){
        console.log('user disconnected');
    });

    socket.on('myEvent', function(data, ack){
        socket.emit('serverMsg');
        ack(data);
    });*/
});