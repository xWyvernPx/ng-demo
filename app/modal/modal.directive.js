angular.module("app.modal", []).directive("modalContent", function () {
  return {
    template: function (elem, attr) {
      return `<modal-${attr.type}></modal-${attr.type}>`;
    },
  };
});
