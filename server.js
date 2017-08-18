const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Backbone = require('backbone-lodash');

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect',function(){
        console.log('user disconnected');
    });

    socket.on('myEvent', function(data, ack){
        ack(data);
    });
});

http.listen();
