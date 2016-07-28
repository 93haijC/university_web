var app = angular.module('eduWeb',['ngRoute','ui.bootstrap']);

app.config(Config);

function Config($routeProvider)
{
	$routeProvider.
		when("/",{templateUrl:"homepage.html"})
		.when("/crank",{templateUrl:"ranking.html",controller:"CollegeController",controllerAs:"model"})
		.when("/mrank",{templateUrl:"majorranking.html"})
		.when("/college/:uid",{templateUrl:"school.html"});
}