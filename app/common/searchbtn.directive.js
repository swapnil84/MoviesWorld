(function(){
	angular
		.module( 'app.home' )
		.directive('searchButton', searchButton);

	function searchButton() {
		var directive = {
		    restrict: 'EA',
		    template: '<button type="submit" class="btn btn-default" data-ng-click="searchmovie()">Search</button>',
			controller: actionButtonCtrl,
			controllerAs : 'vm',
			link: linkFunc
		};
		return directive;
		
		function linkFunc ( scope, el, attr, ctrl ) {
		    
		}

	};

	function actionButtonCtrl( $scope, $rootScope ){
	    $scope.searchmovie = function () {
	        alert('Search Value = ' + $scope.searchvalue);
	    }
	}

})();














