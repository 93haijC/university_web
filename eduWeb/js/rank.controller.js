app.controller("cRankController",cRankController)
   .controller("mRankController",mRankController);

function cRankController(dataAPI)
{
	var vm = this;
	dataAPI.getUsRank(function(res)
	{
		vm.usrank = res.usrank;
		vm.therank = res.therank;
		vm.qsrank = res.qsrank;
	});
}

function mRankController(dataAPI)
{
	var vm = this;
	var degree = document.getElementById("degree").value;
	var major = document.getElementById("major").value;
	vm.getRank = getRank;
	function getRank()
	{
		document.getElementById("firstpage").style["display"] = "none";
		dataAPI.getRankByMajorDegree(degree,major,function(res)
		{
			vm.mrank = res["rank"];
		})
	};
	dataAPI.getRankByMajorDegree("ass","bss",function(res)
		{
			vm.frontpage = res["rank"];
		});
}