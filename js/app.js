/* Angular application */
var app = angular.module('mywebsite', []);

app.config(['$locationProvider', function($location) {
	$location.hashPrefix('!');
}]);