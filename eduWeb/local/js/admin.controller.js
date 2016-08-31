var app = angular.module('eduadmin',['ngFileUpload']);

app.controller("adminController", ['$scope','Upload','$timeout','$http',function($scope,Upload,$timeout,$http)
{
	$scope.uploadData = function(file)
	{
		file.upload = Upload.upload({
		     url: 'http://localhost:3000/upload',
		     method:'POST',
		     data:{file: file}
	    	});

		file.upload.then(function(response) {
        	$timeout(function() {
        		$scope.jsondata = response.data;
        		$scope.keys = Object.keys($scope.jsondata["0"]);
       		});
      }, function(response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, 
      function(evt) {
      });
	}

	$scope.test = function(){
		var a = {"0":{"id":1,"School":"aaa"}}
		alert(Object.keys(a[0]));
	}
	
}]);
