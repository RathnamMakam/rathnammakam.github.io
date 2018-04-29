angular.module('mywebsite', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/home.html'}).
            when('/home', {templateUrl: 'partials/home.html'}).
            when('/certifications', {templateUrl: 'partials/certifications.html'}).
            when('/skills', {templateUrl: 'partials/skills.html'}).
            when('/articles', {templateUrl: 'partials/articles.html'}).
            when('/contactme', {templateUrl: 'partials/contactme.html'}).
            otherwise({redirectTo: '/home'});
    });