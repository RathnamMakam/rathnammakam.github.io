angular.module('mywebsite', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/about.html'}).
            when('/certifications', {templateUrl: 'partials/certifications.html'}).
            when('/contactme', {templateUrl: 'partials/contactme.html'}).
            otherwise({redirectTo: '/about'});
    });