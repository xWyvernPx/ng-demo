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
    this.getDetailEmp = async (id) => {
      return $http
        .get("https://dummy.restapiexample.com/api/v1/employees/" + id)
        .then((response) => {
          if (response.status === 200) return response?.data?.data;
          return response;
        });
    };
    this.createEmployee = async function (employee) {
      /* prototype employee =>  
      {
        name: string,
         employee_age : number,
        employee_salary : number ,
         profile_image : string
      }
      */
      return $http
        .post(
          "https://dummy.restapiexample.com/api/v1/create",
          JSON.stringify(employee)
        )
        .then((response) => {
          if (response.status === 200) return response?.data?.data;
          return response;
        });
    };
    this.updateEmployee = async ({ id, ...other }) => {
      /* prototype employee =>  
        {
          id:number,
          name: string,
          employee_age : number,
          employee_salary : number ,
          profile_image : string
        }
        */
      return $http
        .put(
          "https://dummy.restapiexample.com/api/v1/update/" + id,
          JSON.stringify(other)
        )
        .then((response) => {
          if (response.status === 200) return response?.data?.data;
          return response;
        });
    };
    this.deleteEmp = async (id) => {
      return $http
        .delete("https://dummy.restapiexample.com/api/v1/delete/" + id)
        .then((response) => {
          if (response.status === 200) return true;
          return false;
        });
    };
    return {
      getAllEmployees: this.getAllEmployees,
      deleteEmp: this.deleteEmp,
      updateEmployee: this.updateEmployee,
      getDetailEmp: this.getDetailEmp,
      createEmployee: this.createEmployee,
    };
  },
]);
