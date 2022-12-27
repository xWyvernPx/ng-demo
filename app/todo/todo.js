// (function (angular) {
angular
  .module("myApp.todo", ["todoService", "ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/todo", {
        templateUrl: "todo/todo.html",
        controller: "MainController",
      });
    },
  ])
  .controller("MainController", [
    "$scope",
    "todoManager",
    function MainController($scope, todoManager) {
      this.inputValue = "";
      $scope.todoList = todoManager.todos;
      this.addTodo = (event) => {
        event.preventDefault();
        todoManager.addNewTodo(this.inputValue);
        this.inputValue = "";
      };
      this.removeTodo = (todo) => {
        const index = todoManager.todos.indexOf(todo);
        todoManager.removeTodo(index, () => {
          this.todoList = todoManager.todos;
        });
      };
      $scope.toggleDone = (todo) => {
        const index = todoManager.todos.indexOf(todo);
        todoManager.toggleDone(index);
      };
    },
  ]);
// })(window.angular);
