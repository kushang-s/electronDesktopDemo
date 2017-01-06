'use strict';

/**
 * @ngdoc overview
 * @name desktopdemoapp
 * @description
 * # desktopdemoapp
 *
 * Main module of the application.
 */
angular
  .module('desktopdemoapp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: 'views/test.html',
        title: 'Test',
        access: {
          requiresLogin: false
        }
      })
      .otherwise({
        redirectTo: '/test'
      });
  });
