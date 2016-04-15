var app = angular.module('abbeyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/craft', {
            templateUrl: 'views/craft.html',
            controller: 'CraftController'
        })
        .when('/scotland', {
            templateUrl: 'views/scotland.html',
            controller: 'ScotlandController'
        })
        .when('/wedding', {
            templateUrl: 'views/wedding.html',
            controller: 'WeddingController'
        });

    $locationProvider.html5Mode(true);
}]);


app.controller('MainController', ['$scope', function($scope){

}]);

app.controller('CraftController', ['$scope', function($scope){

}]);

app.controller('ScotlandController', ['$scope', function($scope){

}]);

app.controller('WeddingController', ['$scope', function($scope){

}]);
