(function(){
	'use strict';
    angular.module('app', [
            'app.services',
            'app.home',
            'app.search',
            'app.popularmovies',
            'app.upcomingmovies',
            'app.details',
            'ngRoute',
            'ui.router',
            'ui.breadcrumb'
        ])
        .config(function($stateProvider, $urlRouterProvider, $breadcrumbProvider) {
            $breadcrumbProvider.setOptions({
                includeAbstract: false,
                templateUrl: 'ui-breadcrumb/template/bootstrap3.html'
            });
            $urlRouterProvider.otherwise("/home");
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "./app/home/home.html",
                    controller: 'HomeCtrl',
                    controllerAs: 'vm',
                    breadcrumb: {
                        label: 'Home',
                        force: true,
                    }
                })
                .state('search', {
                    url: "/search",
                    templateUrl: "./app/search/search.html",
                    controller: 'SearchCtrl',
                    controllerAs: 'vm',
                    breadcrumb: {
                        label: 'Search',
                        force: true,
                    }
                })
                .state('popularmovies', {
                    url: "/popularmovies",
                    templateUrl: "./app/popularmovies/popularmovies.html",
                    controller: 'popularMoviesCtrl',
                    controllerAs: 'vm',
                    breadcrumb: {
                        label: 'Popular Movies',
                        force: true,
                        parent: 'home'
                    }
                })
                .state('upcomingmovies', {
                    url: "/upcomingmovies",
                    templateUrl: "./app/upcomingmovies/upcomingmovies.html",
                    controller: 'upcomingMoviesCtrl',
                    controllerAs: 'vm',
                    breadcrumb: {
                        label: 'Upcoming Movies',
                        force: true,
                        parent: 'home'
                    }
                })
                .state('details', {
                    url: "/details/{Id}",
                    templateUrl: "./app/moviedetails/moviedetails.html",
                    controller: 'movieDetailsCtrl',
                    controllerAs: 'vm',
                    breadcrumb: {
                        label: function($stateParams, movieService) {
                            return movieService.getMovieDetails($stateParams.Id).then(function(data) {
                                return data.data.title;
                            });
                        },
                        parent: 'popularmovies'
                    }
                });
        });

})();
