'use strict';

angular.module('homieApp')
    .controller('HeaderCtrl', function($scope, $location) {

        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };

    });