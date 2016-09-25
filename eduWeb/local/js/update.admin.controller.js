app.controller("updateController",['$scope','$http','adminAPI',updateController]);

function updateController($scope,$http,adminAPI)
{
	$scope.searchData = function()
	{
		$scope.keys = [];
		$scope.jsondata = [];
		var keyword = document.getElementById("keyword").value;
		var table = document.getElementById("tableselect").value;
		adminAPI.searchResult(keyword,table,function(data){
			if(data.length == 0)
			{
				document.getElementById("restable").style.display = "none";
				document.getElementById("buttonset").style.display = "none";
				$scope.noresAlert = "No result found"
			}
			else{
				$scope.noresAlert = "";
				document.getElementById('restable').style.display = "inline-table";
				document.getElementById('buttonset').style.display = "block";
				for(var i=0;i<Object.keys(data[0]).length;i++)
				{
					if(Object.keys(data[0])[i].substring(0,1)!="_")
					{
						$scope.keys.push(Object.keys(data[0])[i])
						$scope.jsondata.push(data[0][Object.keys(data[0])[i]])
					}
				}
			}
			console.log(data[0]);
		});
		$scope.currentTable = table;
	}

	$scope.editData = function()
	{
		var info = document.getElementsByName("info");
		var checkbox = document.getElementsByName("ckboxes");
		console.log(info[0]);
		for(var i = 0; i<checkbox.length;i++)
		{
			if(checkbox[i].checked==true)
			{
				for(var j=0;j<info.length;j++)
				{
					info[j].readOnly = false;
				}
			}
		}
	}

	$scope.updateData = function()
	{
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
			for(var j = 0;j <$scope.keys.length;j++)
			{
				jsonstr = jsonstr +"\""+$scope.keys[j] +"\":\""+$scope.jsondata[j]+"\"";
				if(j != $scope.keys.length-1)
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

		adminAPI.postData($scope.currentTable,datapost,function(){

		})

	}

	$scope.deleteData = function(){
		var checkboxes = document.getElementsByName("ckboxes");
		var indexSet = [];
		var keysToDelete = [];
		for(var i = 0; i<checkboxes.length; i++)
		{
			if(checkboxes[i].checked == true)
			{	
				indexSet.push(i)
			}
		}
		for(var i=0;i<indexSet.length;i++)
		{
		 	keysToDelete.push($scope.jsondata[0]);
		}
		adminAPI.deleteData($scope.currentTable,keysToDelete,function(){

		});
	}
}

