(function(){
	'use strict';
	angular
		.module('app.popularmovies')
		.controller('popularMoviesCtrl', popularMoviesCtrl);

	function popularMoviesCtrl($scope, movieService, $rootScope, $state, globalVar) {
	    var vm = this;
	    vm.loading = true;
	    vm.imgpath = globalVar.imgPath;
		vm.movies = [];
		$rootScope.state = $state.current.name;
		console.log($rootScope.state);
		activate();

	    ////////////

		function activate() {
		    return movieService.getPopularMovies().then(function (data) {
		        vm.movies = data.data.results;
		        vm.loading = false;
		    });
		}
	}

})();