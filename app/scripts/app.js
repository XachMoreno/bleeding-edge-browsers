'use strict';

angular.module('bleedingEdgeBrowsersApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/firefox', {
        templateUrl: 'views/firefox.html',
        controller: 'FirefoxCtrl'
      })
      .when('/chrome', {
        templateUrl: 'views/chrome.html',
        controller: 'ChromeCtrl'
      })
      .when('/safari', {
        templateUrl: 'views/safari.html',
        controller: 'SafariCtrl'
      })
      .when('/opera', {
        templateUrl: 'views/opera.html',
        controller: 'OperaCtrl'
      })
      .when('/ie', {
        templateUrl: 'views/ie.html',
        controller: 'IeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
