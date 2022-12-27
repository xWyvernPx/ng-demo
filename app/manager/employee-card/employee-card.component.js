angular.module("employeeCard", []).component("empCard", {
  templateUrl: "manager/employee-card/employee-card.template.html",
  bindings: {
    employee: "=",
  },
});
