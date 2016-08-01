var app = angular.module('eduWeb',['ngRoute','ui.bootstrap']);

app.config(Config);

function Config($routeProvider)
{
	$routeProvider.
		when("/",{templateUrl:"homepage.html"})
		.when("/crank",{templateUrl:"ranking.html",controller:"cRankController",controllerAs:"model"})
		.when("/mrank",{templateUrl:"majorranking.html",controller:"mRankController",controllerAs:"model"})
		.when("/college/:uid",{templateUrl:"school.html",controller:"schoolController",controllerAs:"model"});
}