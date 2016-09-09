angular.module('app').controller('chatController', ['$scope', 'socketService', function($scope, socketService){

    $scope.send = function() {
        socketService.emit('message', $scope.message);
        $scope.message = '';

    };

    $scope.$on('socket:broadcast', function(event, data) {
        if (!data.payload) {
            $log.error('invalid message', 'event', event,
                'data', JSON.stringify(data));
            return;
        }
        $scope.$apply(function() {
            $scope.messages = data.payload + $scope.messages;
        });
    });
}]);