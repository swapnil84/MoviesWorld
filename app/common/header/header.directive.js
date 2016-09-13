(function(){
	angular
		.module('app.popularmovies')
		.directive('movieHeader', movieHeader);



	function movieHeader() {
		var directive = {
		    restrict: 'EA',
		    templateUrl: 'app/common/header/header.html',
		    scope: {}
		};
		return directive;

		function searchmovie() {
		    alert('hi');
		}
	};
})();














