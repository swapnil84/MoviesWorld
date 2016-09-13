(function () {
    'use strict';
    angular
		.module('app.services')
		.service('MovieService', MovieService);

    function MovieService($http, $q, Base_Url, Api_Key, $rootScope) {
        var dataLoaded = false;

        this.getMovies = function () {
            if (!dataLoaded) {
                return $http.get(Base_Url + "/popular?" + Api_Key)
                .then(function (data, status, headers, config) {
                    return data.data;
                });
            }
            else {
                return $q.when(data.data);
            }
        };        

        this.getUpcomingMovies = function () {
            if (!dataLoaded) {
                return $http.get(Base_Url + "/upcoming?" + Api_Key)
                .then(function (data, status, headers, config) {
                    return data.data;
                });
            }
            else {
                return $q.when(data.data);
            }
        };

        this.getMovieDetails = function (id) {
            if (!dataLoaded) {
                return $http.get(Base_Url + "/" + id + "?" + Api_Key)
                .then(function (data, status, headers, config) {
                    return data.data;
                });
            }
            else {
                return $q.when(data.data);
            }
        };

        this.getCurrentScope = function () {
            
           return $rootScope.state
               
        }

        //this.getPopularMovies = function () {
        //    return data.data;
        //};
    };


})();