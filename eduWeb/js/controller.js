app.controller("CollegeController",CollegeController);

function CollegeController($location, $anchorScroll)
{	
    var vm = this;
    vm.tohash = function(anchor)
    {
    	$location.hash(anchor);
    	$anchorScroll(); 
    }
}	