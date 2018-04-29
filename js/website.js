angular.module('mywebsite', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/home.html'}).
            when('/home', {templateUrl: 'partials/home.html'}).
            when('/certifications', {templateUrl: 'partials/certifications.html'}).
            when('/contactme', {templateUrl: 'partials/contactme.html'}).
            when('/articles', {templateUrl: 'partials/articles.html'}).
            otherwise({redirectTo: '/home'});
    });