angular.module("app.manager", []).config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/manager", {
      templateUrl: "manager/manager.template.html",
      // controller: "MainController",
    });
  },
]);
