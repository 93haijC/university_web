app.controller("adminController", ['$scope','Upload','$timeout','$http','adminAPI',function($scope,Upload,$timeout,$http,adminAPI)
{
	document.getElementById('selAll').style.display = "none";
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
        		document.getElementById('selAll').style.display = "block";
       		});
      }, function(response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, 
      function(evt) {
      });
	}

	$scope.selAll = function(){
		var status = document.getElementById("all");
		var checkboxes = document.getElementsByName("ckboxes");
		if(status.checked == true)
		{
			for(var i = 0; i<checkboxes.length;i++)
			{
				checkboxes[i].checked = true;
			}
		}
		else
		{
			for(var i = 0; i<checkboxes.length;i++)
			{
				checkboxes[i].checked = false;
			}
		}
	}

	$scope.postData = function(){
		
		var keys = document.getElementsByName("keys");
		var checkboxes = document.getElementsByName("ckboxes");
		var indexSet = [];
		var datapost = [];
		for(var i = 0; i<checkboxes.length; i++)
		{
			if(checkboxes[i].checked == true)
			{	
				indexSet.push(i)
			}
		}
		for(var i = 0; i<indexSet.length;i++)
		{
			var jsonstr = "{"
			for(var j = 0;j <keys.length;j++)
			{
				jsonstr = jsonstr +"\""+$scope.keys[j] +"\":\""+$scope.jsondata[indexSet[i]][$scope.keys[j]]+"\"";
				if(j != keys.length-1)
				{
					jsonstr = jsonstr + ","
				}
				else
				{
					break;
				}
			}
			jsonstr = jsonstr + "}"
			datapost.push(JSON.parse(jsonstr));
		}
		var table = document.getElementById("tableselect").value;
		adminAPI.postData(table,datapost,function(){

		});

	}


}]);
