var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

require('./socket/socket')(io);

app.use(express.static(__dirname + '/public'));

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

module.exports = app;