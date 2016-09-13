(function () {
    'use strict';
    angular
		.module('app.details')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

    function MovieDetailsCtrl($scope, MovieService, $rootScope, $stateParams) {
        var vm = this;
        var movieid = $stateParams.Id;
        vm.loading = true;
        vm.moviedetails = [];
        activate();

        ////////////   

        function activate() {
            return MovieService.getMovieDetails(movieid).then(function (data) {
                vm.moviedetails = data;
                vm.loading = false;
                vm.imgpath = 'http://image.tmdb.org/t/p/w500';
                return vm.moviedetails;
            });
        }

        //function getDetails(id) {
        //    var result = [];
        //    for (var i in vm.movies)
        //        if (vm.movies[i].id == id) {
        //            result.push(vm.movies[i])
        //            break
        //        }
        //    return result
        //}
    }

})();