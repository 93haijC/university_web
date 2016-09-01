(function()
{
	app.factory("adminAPI",adminAPI);
	function adminAPI($http)
	{
		
		var api = {"postData":postData};
		return api;

		function postData(table,data,callback)
		{
			$http.post("/api/:table",data).success(callback);
		}
	}
})();