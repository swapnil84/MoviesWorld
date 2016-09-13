(function () {
    'use strict';
    angular
        .module('app.services', ['ngRoute'])
        .constant('Base_Url', 'http://api.themoviedb.org/3/movie').constant('Api_Key', 'api_key=ff34ad1f90199c62bb02b0f0766a47cb');
})();
