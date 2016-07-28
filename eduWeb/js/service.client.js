(function()
{
	app.factory("dataAPI",dataAPI);
	function dataAPI($http)
	{
		
		var api = {"getUsRank":getUsRank};
		return api;

		function getUsRank(callback)
		{
			$http.get("/api/us").success(callback);
		}
	}
})();