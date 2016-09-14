(function()
{
	app.factory("adminAPI",adminAPI);
	function adminAPI($http)
	{
		
		var api = {"postData":postData,"searchResult":searchResult,"updateData":updateData,"deleteData":deleteData};
		return api;

		function postData(table,data,callback)
		{
			$http.post("/api/"+table,data).success(callback)
		}
		function searchResult(keyword,table,callback)
		{
			$http.get("/api/search/"+keyword+"/"+table).success(callback).error(function(){alert("404 error")});
		}
		function updateData(table,data,callback)
		{
			$http.post("/api/update/"+table,data).success(callback);
		}
		function deleteData(table,id,callback)
		{
			$http.delete("/api/delete/"+table+"/"+id).success(callback).error(function(){alert("404 error")});
		}
	}
})();