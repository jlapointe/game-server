const app = require('express')();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});
const http = require('http').Server(app);
const io = require('socket.io')(http, {origins:'*:*'});
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
