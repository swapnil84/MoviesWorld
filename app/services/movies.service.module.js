(function () {
    'use strict';
    angular
        .module('app.services', ['ngRoute'])
        .constant('globalVar', {
            apiKey: 'api_key=ff34ad1f90199c62bb02b0f0766a47cb',
            baseUrl: 'http://api.themoviedb.org/3/movie',
            imgPath: 'http://image.tmdb.org/t/p/w500'
        });
})();
