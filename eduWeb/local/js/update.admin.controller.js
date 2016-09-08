app.controller("updateController",['$scope','$http','adminAPI',updateController]);

function updateController($scope,$http,adminAPI)
{
	$scope.searchData = function()
	{
		var keyword = document.getElementById("keyword").value;
		var table = document.getElementById("tableselect").value;
		adminAPI.searchResult(keyword,table,function(data){
			console.log(JSON.stringify(data));
		});
	}
}

