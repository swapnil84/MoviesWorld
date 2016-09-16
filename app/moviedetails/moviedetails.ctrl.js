(function () {
    'use strict';
    angular
		.module('app.details')
		.controller('movieDetailsCtrl', movieDetailsCtrl);

    function movieDetailsCtrl($scope, movieService, $rootScope, $stateParams) {
        var vm = this;
        vm.imgpath = 'http://image.tmdb.org/t/p/w500';
        var movieid = $stateParams.Id;
        vm.loading = true;
        vm.moviedetails = [];
        activate();

        ////////////   

        function activate() {
            return movieService.getMovieDetails(movieid).then(function (data) {
                vm.moviedetails = data.data;
                vm.loading = false;
                return vm.moviedetails;
            });
        }
    }

})();