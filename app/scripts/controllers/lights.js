'use strict';

angular.module('homieApp')
    .controller('LightsCtrl', function($scope) {


        $scope.light = false;

        $scope.toggleLight = function() {
            $scope.light = !$scope.light;
        };

    });
