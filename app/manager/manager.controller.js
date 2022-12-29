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
    "filterFilter",
    "$rootScope",
    function ($scope, EmployeeService, $location, filterFilter, $rootScope) {
      $scope.employees = [];
      // this.$onInit = function () {
      //   $scope.employees = [];
      //   $scope.$apply();
      // };
      // $scope.searchByNameTerm;
      $scope.getEmployees = async () => {
        const data = await EmployeeService.getAllEmployees();
        $scope.employees = data;
        $scope.$apply();
      };
      $scope.filterEmployees = (term) => {
        const filtedEmps = filterFilter($scope.employees, term);
        $scope.employees = filtedEmps;
        $scope.$apply();
        delete filtedEmps;
      };

      $scope.getEmployees();
      $scope.handleAddEmployee = function () {
        $rootScope.modal.modalName = "create-emp";
        $rootScope.modal.isShown = true;
      };
      $scope.$on("ADD_NEW_EMPLOYEE", (event, emp) => {
        if (emp) {
          $rootScope.modal.isShown = false;
          $scope.employees.push(emp);
          $rootScope.$apply();
        }
      });
      $scope.$on("UPDATE_NEW_EMPLOYEE", (event, emp) => {
        if (emp) {
          $rootScope.modal.isShown = false;
          const newData = $scope.employees.map((employee) => {
            if (emp.id === employee.id) {
              employee = emp;
            }
            return employee;
          });
          $scope.employees = newData;
          delete newData;
          $scope.$apply();
          $rootScope.$apply();
        }
      });
      $scope.$on("DELETE_EMPLOYEE", function (event, id) {
        const index = $scope.employees.findIndex((emp) => emp.id === id);
        console.log(index);
        $scope.employees.splice(index, 1);
      });
    },
  ]);
