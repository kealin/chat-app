angular.module('app').controller('homeController', ['$scope', 'socketService', function($scope, socketService){

    socketService.on('init', function (data) {
        $scope.name = data.name;
        $scope.users = data.users;
    });

    socketService.on('send:message', function (message) {
        $scope.messages.push(message);
    });

}]);