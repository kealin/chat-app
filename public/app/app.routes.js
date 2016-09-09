angular.module('app').config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'app/components/chat/chatView.html',
            controller  : 'chatController'
        })

        .otherwise({ redirectTo: '/' });
});
