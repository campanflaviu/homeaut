'use strict';

/**
 * @ngdoc overview
 * @name homieApp
 * @description
 * # homieApp
 *
 * Main module of the application.
 */
angular
  .module('homieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularPaho'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/lights', {
        templateUrl: 'views/lights.html',
        controller: 'LightsCtrl',
        controllerAs: 'lights'
      })
      .when('/temperature', {
        templateUrl: 'views/temperature.html',
        controller: 'TemperatureCtrl',
        controllerAs: 'temperature'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
