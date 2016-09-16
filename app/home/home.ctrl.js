(function(){
	'use strict';
	angular
		.module('app.home')
		.controller('HomeCtrl', homeCtrl);

	function homeCtrl($scope, movieService) {
	    var vm = this;
	    var imgpath = 'http://image.tmdb.org/t/p/w500';
	    vm.loading = true;
		vm.movies = [];
		activate();
        
		function activate() {
		    return movieService.getPopularMovies().then(function (data) {
		       vm.movies = data.data.results;
		       vm.imgpath = imgpath;
		       vm.loading = false;
		       showChart();
		       return vm.movies;
		    });
		}

	    // Push data into array as per HighChart format
		function getChartFormatData (json) {
		    var chartSeries = [];
		    var elements = json || [];
		    for (var i = 0; i < elements.length; i++) {
		        var pointData = [
                    elements[i].title,
                    elements[i].popularity
		        ];
		        chartSeries.push(pointData);
		    }
		    return chartSeries;
		};

	    // Show HighChart
		function showChart () {
		    vm.loading = false;
		    vm.chartData = getChartFormatData(vm.movies);
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
		        series: [
		            {
		                type: 'column',
		                data: vm.chartData
		            }
		        ]
		    });
		}
	}

})();