angular
  .module("app.confirm-box", [])
  .component("confirmBox", {
    templateUrl: "confirm-box/confirm-box.template.html",
    controller: "ConfirmBoxController",
  })
  .controller("ConfirmBoxController", function ($scope, $rootScope) {
    $scope.confirmBox = $rootScope.confirmBox;
    // $scope.handleOkClick = $rootScope.comfirmBox.handleOkClick;
    // $scope.handleCancelClick = $rootScope.confirmBox.handleCancelClick;
    $scope.handleCancelClick = function () {};
  });
