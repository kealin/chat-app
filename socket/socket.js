module.exports = function (io) {
  'use strict';
  io.on('connection', function (socket) {
    socket.broadcast.emit('Anonymous user connected');

    socket.on('message', function (msg) {
      console.log('Message recieved :: ' + JSON.stringify(msg));
      io.sockets.emit('broadcast', {
        payload: msg,
      });
    });
  });
};
