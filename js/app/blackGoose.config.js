'use strict';

angular.
  module('blackGoose').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/appetizer', {
          template: '<food-list cat="APPETIZERS" flex layout="row" layout-margin layout-wrap></food-list>'
        }).
        when('/mainCourse', {
          template: '<food-list cat="MAIN COURSES" flex layout="row" layout-margin layout-wrap></food-list>'
        }).
        when('/traditional', {
          template: '<food-list cat="TRADITIONAL TOASTS" flex layout="row" layout-margin layout-align="center" layout-wrap></food-list>'
        }).
        when('/desert', {
          template: '<food-list cat="DESSERT SELECTION" flex layout="row" layout-margin layout-wrap></food-list>'
        }).
        when('/cart', {
          template: '<cart-page flex layout="column" layout-margin layout-wrap></cart-page>'
        }).
        otherwise('/appetizer');
    }
  ]);
