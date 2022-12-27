(function (angular) {
  angular.module("todoService", []).factory("todoManager", function () {
    this.todos = [
      {
        content: "Demo",
        isDone: true,
      },
      {
        content: "Demo 2",
        isDone: false,
      },
    ];
    this.toggleDone = (index) => {
      this.todos[index].isDone = !this.todos[index].isDone;
    };
    this.addNewTodo = (content) => {
      this.todos.push({
        content: content,
        isDone: false,
      });
    };
    this.removeTodo = (index) => {
      this.todos.splice(index, 1);
    };

    return {
      todos: this.todos,
      toggleDone: this.toggleDone,
      addNewTodo: this.addNewTodo,
      removeTodo: this.removeTodo,
    };
  });
})(window.angular);
