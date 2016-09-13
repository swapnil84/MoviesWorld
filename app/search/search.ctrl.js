(function(){
	'use strict';
	angular
		.module('app.search')
		.controller('SearchCtrl', SearchCtrl);

	function SearchCtrl($scope, MovieService, $state) {
	    var vm = this;
	    var imgpath = 'http://image.tmdb.org/t/p/w500';
	    vm.loading = true;
		vm.movies = [];

		activate();

		////////////   

		function activate() {
		    return MovieService.getMovies().then(function (data) {
		        vm.movies = data.results;
		        vm.imgpath = imgpath;
			    vm.loading = false;
			    return vm.movies;
			});
		}
	}

})();