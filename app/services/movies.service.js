(function () {
    'use strict';
    angular
		.module('app.services')
		.service('movieService', movieService);

    function movieService($http, $q, $rootScope, globalVar) {
        var popularMovies = null;
        var upcomingMovies = null;
        var dataLoaded = false;
        //var movieDetails = null;

        this.getPopularMovies = function(){
            var deferred = $q.defer();
            if (popularMovies !== null) {
                deferred.resolve(popularMovies);
                console.log("from cache");
            } else {
                $http.get(globalVar.baseUrl + "/popular?" + globalVar.apiKey)
                    .then(function(response) {
                        popularMovies = response;
                        deferred.resolve(popularMovies);
                    console.log("from server");
                    }, function (response) {
                    deferred.reject(response);
                });
            }
            return deferred.promise;
        }

        this.getUpcomingMovies = function () {
            var deferred = $q.defer();
            if (upcomingMovies !== null) {
                deferred.resolve(upcomingMovies);
                console.log("from cache");
            } else {
                $http.get(globalVar.baseUrl + "/upcoming?" + globalVar.apiKey)
                    .then(function (response) {
                        upcomingMovies = response;
                        deferred.resolve(upcomingMovies);
                        console.log("from server");
                    }, function (response) {
                        deferred.reject(response);
                    });
            }
            return deferred.promise;
        }

        this.getMovieDetails = function (id) {
            if (!dataLoaded) {
                return $http.get(globalVar.baseUrl + "/" + id + "?" + globalVar.apiKey)
                .then(function (data) {
                    return data;
                });
            }
            else {
                return $q.when(data);
            }
        }
        //return {
        //    getPopularMovies: function() {
        //        if (!promise) {
        //            promise = $http.get(baseUrl + "/popular?" + apiKey);
        //            promise.then(function(response) {
        //                items = response;
        //            }, function(response) {
        //                return $q.reject(response);
        //            });
        //            return promise;
        //        } else {
        //            return $q.when(items);
        //        }
        //    },
            
        //    getUpcomingMovies: function () {
        //        if (!upcmiongpromise) {
        //            upcmiongpromise = $http.get(baseUrl + "/upcoming?" + apiKey);
        //            upcmiongpromise.then(function (response) {
        //                upcoming = response;
        //            }, function(response) {
        //                return $q.reject(response);
        //            });
        //            return upcmiongpromise;
        //        } else {
        //            return $q.when(upcoming);
        //        }
        //    },

        //    //getUpcomingMovies: function () {
        //    //    if (!dataLoaded) {
        //    //        return $http.get(baseUrl + "/upcoming?" + apiKey)
        //    //        .then(function (data) {
        //    //            return data;
        //    //        });
        //    //    }
        //    //    else {
        //    //        return $q.when(data.data);
        //    //    }
        //    //},

        //    getMovieDetails: function (id) {
        //        if (!dataLoaded) {
        //            return $http.get(baseUrl + "/" + id + "?" + apiKey)
        //            .then(function (data) {
        //                return data.data;
        //            });
        //        }
        //        else {
        //            return $q.when(data.data);
        //        }
        //    },

        //    getCurrentScope: function() {
        //        return $rootScope.state;
        //    }
        //}
    };

})();