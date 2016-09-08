var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
    console.log('a user connected');
    io.on('disconnect', function(){
        console.log('user disconnected');
    });
});

app.use(express.static(__dirname + '/public'));

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});