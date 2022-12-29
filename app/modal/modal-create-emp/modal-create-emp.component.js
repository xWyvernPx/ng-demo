angular
  .module("app.modal.create-emp", ["employee", "app.image-upload"])
  .component("modalCreateEmp", {
    templateUrl: "modal/modal-create-emp/modal-create-emp.template.html",
    controller: function ($scope, EmployeeService, $rootScope, ImageUpload) {
      $scope.empInfo = {
        employee_name: null,
        employee_age: null,
        employee_salary: null,
        profile_image: "https://source.unsplash.com/random",
      };
      $scope.handleSubmit = async function () {
        console.log($scope.empInfo);
        const data = await EmployeeService.createEmployee($scope.empInfo);
        console.log(data);
        $rootScope.$broadcast("ADD_NEW_EMPLOYEE", data);
      };
      $scope.handleClose = function () {
        $rootScope.modal.isShown = false;
      };
      $scope.handleImageChange = async ($event) => {
        const reader = new FileReader();
        console.log($event.target.files[0]);
        const file = $event.target.files[0];
        reader.onload = async () => {
          const image = reader.result;
          const rs = await ImageUpload.uploadFile(image);

          console.log(rs);
        };

        reader.readAsDataURL(file);
        // console.log(await ImageUpload.signToken());
      };
    },
  });
