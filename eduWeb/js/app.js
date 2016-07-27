var app = angular.module('eduWeb',['ngRoute']);

app.config(Config);

function Config($routeProvider)
{
	$routeProvider.
		when("/",{templateUrl:"homepage.html"})
		.when("/crank",{templateUrl:"ranking.html"})
		.when("/mrank",{templateUrl:"majorranking.html"})
		.when("/college/:uid",{templateUrl:"school.html"});
}