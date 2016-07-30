(function()
{
	app.factory("dataAPI",dataAPI);
	function dataAPI($http)
	{
		
		var api = {"getUsRank":getUsRank,"getRankByMajorDegree":getRankByMajorDegree};
		return api;

		function getUsRank(callback)
		{
			$http.get("/api/us").success(callback);
		}

		function getRankByMajorDegree(degree,major,callback)
		{
			$http.get("/api/mrank?degree="+degree+"&major="+major).success(callback);
		}

	}
})();