var app = angular.module('abbeyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/minneapolis', {
            templateUrl: 'views/minneapolis.html',
            controller: 'MinneapolisController'
        })
        .when('/scotland', {
            templateUrl: 'views/scotland.html',
            controller: 'ScotlandController'
        })
        .when('/elsewhere', {
            templateUrl: 'views/elsewhere.html',
            controller: 'ElsewhereController'
        });

    $locationProvider.html5Mode(true);
}]);


app.controller('MainController', ['$scope', '$location', function($scope, $location){
    $scope.welcome = {
        intro: "Welcome to Abbey Janicek's Photography page"
    };
    $scope.abbeyimage = {
        icon: "assets/styles/abbey.jpg"
    };
}]);

app.controller('MinneapolisController', ['$scope', '$location', function($scope, $location){

}]);

app.controller('ScotlandController', ['$scope', '$location', function($scope, $location){

}]);

app.controller('ElsewhereController', ['$scope', '$location', function($scope, $location){

}]);
