app.controller("schoolController",schoolController);

function schoolController(dataAPI,$routeParams)
{
	var vm = this;
	var schoolid = $routeParams.uid;
	dataAPI.getSchoolById(schoolid,function(res)
	{
		vm.name = res["name"];
		vm.image = res["image"];
		vm.loc = res["loc"];
		vm.web = res["web"];
		vm.rank = res["rank"];
		vm.overview = res["overview"];
		vm.applyddl = res["applyddl"];
		vm.edddl = res["edddl"];
		vm.applyfee = res["applyfee"];
		vm.caa = res["caa"];
		vm.satddl = res["satddl"];
		vm.acptrate = res["acptrate"];
		vm.toefl = res["toefl"];
		vm.ielts = res["ielts"];
		vm.sat = res["sat"];
		vm.reading = res["reading"];
		vm.math = res["math"];
		vm.writing = res["writing"];
		vm.grarate = res["grarate"];
		vm.twentyless = res["twentyless"];
		vm.fiftymore = res["fiftymore"];
		vm.white = res["white"];
		vm.hispanic = res["hispanic"];
		vm.asian = res["asian"];
		vm.black = res["black"];
		vm.twomore = res["twomore"];
		vm.unknown = res["unknown"];
		vm.interate = res["interate"];
		vm.gradenroll = res["gradenroll"];
		vm.underenroll = res["underenroll"];
		vm.male = res["male"];
		vm.female =res["female"];
		vm.tuifee = res["tuifee"];
		vm.roomboard = res["roomboard"];
		vm.total = res["total"];
		vm.interaid = res["interaid"];
		vm.salary = res["salary"];
		vm.under = res["undermajor"];
		vm.grad = res["gradumajor"];

	});
}	