(function(){
	angular
		.module('app.popularmovies')
		.directive('leftRail', leftRail);

	function leftRail() {
		var directive = {
		    restrict: 'EA',
		    templateUrl: 'app/common/leftrail/leftrail.html',
		    scope: {}
		};
		return directive;
	};
})();














