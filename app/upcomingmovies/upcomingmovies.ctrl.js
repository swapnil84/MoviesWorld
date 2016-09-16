(function(){
	'use strict';
	angular
		.module('app.upcomingmovies')
		.controller('upcomingMoviesCtrl', upcomingMoviesCtrl);

	function upcomingMoviesCtrl($scope, movieService, $rootScope, $state) {
	    var vm = this;
	    vm.loading = true;
	    vm.imgpath = 'http://image.tmdb.org/t/p/w500';
		vm.movies = [];
		$rootScope.state = $state.current.name;
		console.log($rootScope.state);
		activate();

		////////////   

		function activate() {
		    movieService.getUpcomingMovies().then(function (data) {
		        vm.movies = data.data.results;
		        vm.loading = false;
		    });
		}
	}

})();