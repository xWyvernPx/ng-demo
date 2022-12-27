angular.module("employee", []).factory("EmployeeService", [
  "$http",
  function ($http) {
    this.getAllEmployees = async () => {
      return $http
        .get("https://dummy.restapiexample.com/api/v1/employees")
        .then((response) => {
          if (response.status === 200) return response?.data?.data;
          return response;
        });
    };
    return {
      getAllEmployees: this.getAllEmployees,
    };
  },
]);
