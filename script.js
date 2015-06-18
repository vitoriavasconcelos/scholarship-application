// script.js

    // create the module and name it scotchApp
    // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = '';
    });

    myApp.controller('aboutController', function($scope) {
        $scope.message = '';
    });