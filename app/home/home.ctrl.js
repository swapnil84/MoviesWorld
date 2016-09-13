(function(){
	'use strict';
	angular
		.module('app.home')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl($scope, MovieService, $rootScope, $state) {
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

	    // Push data into array as per HighChart format
		var getChartFormatData = function (json) {
		    var dates = json || [];
		    var elements = json || [];
		    var chartSeries = [];
		    vm.movies = json;
		    for (var i = 0; i < json.length; i++) {
		        var pointData = [
                    vm.movies[i].title,
                    vm.movies[i].popularity
		        ];
		        chartSeries.push(pointData);
		    }
		    return chartSeries;
		};

	    // Show HighChart
		var showChart = function () {
		    MovieService.getMovies().then(function (json) {
		        $scope.loading = false;
		        $scope.chartData = getChartFormatData(vm.movies);
		        $('#container').highcharts({
		            chart: {
		                type: 'column'
		            },
		            title: {
		                text: 'Movie Popularity'
		            },
		            xAxis: {
		                type: 'category'
		            },
		            yAxis: {
		                title: {
		                    text: 'Popularity (%)'
		                }
		            },
		            legend: {
		                enabled: false
		            },
		            plotOptions: {
		                series: {
		                    borderWidth: 0,
		                    dataLabels: {
		                        enabled: true,
		                        format: '{point.y:.1f}%'
		                    }
		                }
		            },
		            tooltip: {
		                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
		            },
		            series: [{
		                type: 'column',
		                data: $scope.chartData
		            }]
		        });
		    })
		}
		showChart();
	}

})();