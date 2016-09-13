(function(){
	'use strict';
	angular
		.module('app.upcomingmovies')
		.controller('UpcomingMoviesCtrl', UpcomingMoviesCtrl);

	function UpcomingMoviesCtrl($scope, MovieService, $rootScope, $state) {
	    var vm = this;
	    vm.loading = true;
		vm.movies = [];
		$rootScope.state = $state.current.name;
		console.log($rootScope.state);
		activate();

		////////////   

		function activate() {
		    return MovieService.getUpcomingMovies().then(function (data) {
		        vm.movies = data.results;
		        vm.imgpath = 'http://image.tmdb.org/t/p/w500';
			    vm.loading = false;
			    return vm.movies;
			});
		}
	}

})();