var chatApp = angular.module('chatApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/first',
        {
            templateUrl:'../view/first.html',
            controller:'firstController'
        });
        $routeProvider.when('/second',
        {
            templateUrl:'../view/second.html',
            controller:'secondController'
        });
});
