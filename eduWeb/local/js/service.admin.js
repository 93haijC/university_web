(function()
{
	app.factory("adminAPI",adminAPI);
	function adminAPI($http)
	{
		
		var api = {"postData":postData,"searchResult":searchResult};
		return api;

		function postData(table,data,callback)
		{
			$http.post("/api/:table",data).success(callback);
		}
		function searchResult(keyword,table,callback)
		{
			$http.get("/api/search/:keyword/:table").success(callback);
		}
	}
})();