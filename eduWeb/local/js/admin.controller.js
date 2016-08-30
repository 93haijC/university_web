var app = angular.module('eduadmin',[]);

app.controller("adminController", ['$scope','$http',function($scope,$http)
{
	$scope.filesChanged =function(elm)
	{	

		$scope.files =elm.files;
		files = elm.files;
	}
	$scope.upload = function(){
		var fake = {
			"school":[{"id":"1","school":"Princeton University"},{"id":"2","school":"Harvard University"}]
		}
		
		$http.post("/local/school.json",fake).success(function(res){
			$scope.schools = res;
		});
	}
}]);
