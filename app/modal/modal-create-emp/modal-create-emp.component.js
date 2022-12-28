angular
  .module("app.modal.create-emp", ["employee"])
  .component("modalCreateEmp", {
    templateUrl: "modal/modal-create-emp/modal-create-emp.template.html",
    controller: function ($scope, EmployeeService, $rootScope) {
      $scope.empInfo = {
        employee_name: "",
        employee_age: 0,
        employee_salary: 0,
        profile_image: "https://source.unsplash.com/random",
      };
      $scope.handleSubmit = async function () {
        console.log($scope.empInfo);
        const data = await EmployeeService.createEmployee($scope.empInfo);
        console.log(data);
        $rootScope.$broadcast("ADD_NEW_EMPLOYEE", data);
      };
    },
  });
