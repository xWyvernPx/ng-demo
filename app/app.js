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
    "app.modal",
    "app.modal.create-emp",
    "app.modal.update-emp",
    "app.confirm-box",
    "app.loading",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      // $routeProvider.otherwise({redirectTo: '/view1'});
    },
  ])
  .controller("MainController", [
    "$scope",
    "$rootScope",
    function ($scope, $rootScope) {
      $rootScope.modal = {
        isShown: true,
        modalName: "update-emp",
        modalPayload: {
          id: 1,
          employee_name: "Employ",
          employee_age: 20,
          employee_salary: 20000,
          profile_image: "https://source.unsplash.com/random",
        },
      };
      $rootScope.confirmBox = {
        isShown: false,
        content: {
          heading: "Warning", // Prototype : Information, Notice, Warning
          notice: "Close if see this",
        },
        handleOkClick: () => {
          console.log("NEED IMPLEMENTATION");
        },
        handleCancelClick: () => {
          console.log("click cancel");
          $rootScope.confirmBox.isShown = false;
          setTimeout(() => {
            $rootScope.$apply();
          }, 0);
        }, // for customize
      };
      // $scope.modal = {
      //   isShown: true,
      //   modalName: "create-emp",
      // };
      $rootScope.showLoading = true;
    },
  ]);
