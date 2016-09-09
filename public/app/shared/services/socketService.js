app.service('socketService', function (socketFactory) {
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
});