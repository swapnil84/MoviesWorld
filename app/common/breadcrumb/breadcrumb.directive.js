(function () {
    angular
		.module('app.popularmovies')
		.directive('breadCrumbs', ['$state', '$stateParams', breadCrumbs]);

    function breadCrumbs($state, $stateParams) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/common/breadcrumb/breadcrumb.html',
            replace: true,
            compile: function (tElement, tAttrs) {
                return function ($scope, $elem, $attr) {
                    $scope.show = function (state) {
                        if (!angular.isDefined(state.data)) {
                            return false;
                        }
                        else if (!angular.isDefined(state.data.breadCrumbs)) {
                            return false;
                        }
                        return true;
                    };
                }
            }
        };
        return directive;
    };
})();