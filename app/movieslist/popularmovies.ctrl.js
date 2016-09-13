(function(){
	'use strict';
	angular
		.module('app.popularmovies')
		.controller('MovieslistCtrl', MovieslistCtrl);

	function MovieslistCtrl($scope, MovieService, $rootScope,$state) {
	    var vm = this;
	    vm.loading = true;
		vm.movies = [];
		$rootScope.state = $state.current.name;
		console.log($rootScope.state);
		activate();

		////////////   

		function activate() {
		    return MovieService.getMovies().then(function (data) {
		        vm.movies = data.results;
		        vm.imgpath = 'http://image.tmdb.org/t/p/w500';
			    vm.loading = false;
			    return vm.movies;
			});
		}
	}

})();