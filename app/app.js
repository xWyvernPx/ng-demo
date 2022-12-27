"use strict";

// Declare app level module which depends on views, and core components
angular
  .module("myApp", [
    "ngRoute",
    "myApp.view1",
    "myApp.view2",
    "app.manager",
    "myApp.version",
    "employee",
    "employeeCard",
    "myApp.todo",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      // $routeProvider.otherwise({redirectTo: '/view1'});
    },
  ]);
