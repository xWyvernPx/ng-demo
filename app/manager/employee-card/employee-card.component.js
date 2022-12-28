angular.module("employeeCard", ["employee"]).component("empCard", {
  templateUrl: "manager/employee-card/employee-card.template.html",
  bindings: {
    employee: "=",
  },
  controller: function ($scope, $rootScope, EmployeeService) {
    const ctrl = this;
    ctrl.$onInit = function () {};
    $scope.handleDeleteEmployee = async function ($event, id) {
      $event.stopPropagation();
      $rootScope.confirmBox = {
        isShown: true,
        content: {
          heading: "Warning",
          notice: "Are you sure you want to delete this employee?",
        },
        handleOkClick: async () => {
          const resultDelete = await EmployeeService.deleteEmp(id);
          if (resultDelete) {
            $rootScope.$broadcast("DELETE_EMPLOYEE", id);
            $rootScope.confirmBox.isShown = false;
          }
          $rootScope.$apply();
          delete resultDelete;
        },
        handleCancelClick: () => {
          $rootScope.confirmBox.isShown = false;
          setTimeout(() => {
            $rootScope.$apply();
          });
        },
      };
      // $rootScope.$apply();
    };
    $scope.handleUpdateEmployee = function ($event) {
      $event.stopPropagation();
      $rootScope.modal = {
        isShown: true,
        modalName: "update-emp",
        modalPayload: ctrl.employee,
      };
      // $rootScope.$apply();
    };
  },
});
