angular
  .module("app.manager", ["employee", "employeeCard"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/manager", {
        templateUrl: "manager/manager.template.html",
        controller: "ManagerController",
      });
    },
  ])
  .controller("ManagerController", [
    "$scope",
    "EmployeeService",
    "$location",
    function ($scope, EmployeeService, $location) {
      $scope.employees = [];
      // this.$onInit = function () {
      //   $scope.employees = [];
      //   $scope.$apply();
      // };

      $scope.getEmployees = async () => {
        const data = await EmployeeService.getAllEmployees();
        $scope.employees = data;
        $scope.$apply();
      };

      $scope.getEmployees();
    },
  ]);
