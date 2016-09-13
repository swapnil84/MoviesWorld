(function(){
	angular
		.module('app.popularmovies')
		.directive('movieFooter', movieFooter);

	function movieFooter() {
		var directive = {
		    restrict: 'EA',
		    templateUrl: 'app/common/footer/footer.html',
		    scope: {}
		};
		return directive;
	};
})();














