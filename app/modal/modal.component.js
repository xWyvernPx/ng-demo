angular
  .module("app.modal", ["app.modal.create-emp"])

  .component("appModal", {
    templateUrl: "/modal/modal.template.html",
    controller: function ($scope, $rootScope) {
      $scope.modalName = $rootScope.modal.modalName;
      $scope.modalPayload = $rootScope.modal.modalPayload;
      $scope.handleCloseClick = () => {
        $rootScope.modal.isShown = false;
      };
    },
  })
  .directive("modalContent", function () {
    return {
      restrict: "A",
      scope: {
        modal: "=",
      },

      template: function (elem, attr) {
        console.log();

        // return `<modal-${attr.modalContent}></modal-${attr.modalContent}>`;
        return `<modal-${"{{modal.modalName}}"}></modal-${"{{modal.modalName}}"}>`;
      },
    };
  });
