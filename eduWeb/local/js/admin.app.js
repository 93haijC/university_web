var app = angular.module('eduadmin',['ngRoute','ngFileUpload']);

app.config(Config);

function Config($routeProvider)
{
	$routeProvider.
		when("/",{templateUrl:"../admin/back.html"})
		.when("/upload",{templateUrl:"../admin/upload.html",controller:"uploadController"})
		.when("/update",{templateUrl:"../admin/update.html",controller:"updateController"})
		.when("/api/search/:keyword/:table",{templateUrl:"../admin/update.html",controller:"updateController"});
}