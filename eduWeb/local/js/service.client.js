(function()
{
	app.factory("dataAPI",dataAPI);
	function dataAPI($http)
	{
		
		var api = {"getUsRank":getUsRank,"getRankByMajorDegree":getRankByMajorDegree,
		"getSchoolById":getSchoolById};
		return api;

		function getUsRank(callback)
		{
			$http.get("/api/us").success(callback);
		}

		function getRankByMajorDegree(degree,major,callback)
		{
			$http.get("/api/mrank/:degree/:major").success(callback);
		}

		function getSchoolById(id,callback)
		{
			$http.get("/api/college/:id").success(callback);
		}
	}
})();