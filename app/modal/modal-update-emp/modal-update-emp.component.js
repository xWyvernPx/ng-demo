angular
  .module("app.modal.update-emp", ["employee"])
  .component("modalUpdateEmp", {
    bindings: {
      employee: "@",
    },
    templateUrl: "modal/modal-update-emp/modal-update-emp.template.html",
    controller: function ($scope, EmployeeService, $rootScope) {
      const ctrl = this;
      this.$onInit = function () {
        console.log(ctrl);
      };
      $scope.empInfo = {
        employee_name: $rootScope.modal.modalPayload.employee_name,
        employee_age: $rootScope.modal.modalPayload.employee_age,
        employee_salary: $rootScope.modal.modalPayload.employee_salary,
        profile_image: $rootScope.modal.modalPayload.profile_image,
        id: $rootScope.modal.modalPayload.id,
      };

      $scope.handleSubmit = async function () {
        console.log($scope.empInfo);
        const data = await EmployeeService.updateEmployee($scope.empInfo);
        console.log(data);
        $rootScope.$broadcast("UPDATE_NEW_EMPLOYEE", {
          ...data,
          id: $scope.empInfo.id,
        });
      };
      $scope.handleClose = function () {
        $rootScope.modal.isShown = false;
      };
    },
  });
