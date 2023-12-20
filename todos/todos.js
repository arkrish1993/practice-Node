const todos = require(".todos.js");

class Todo {
  getTodos = async () => {
    return new Promise((resolve, _) => {
      resolve(todos);
    });
  };

  getTodoById = async (id) => {
    return new Promise((resolve, reject) => {
      const todo = todos.find((t) => t.id === id);
      if (todo) resolve(todo);
      else reject("Todo doesn't exist.");
    });
  };

  addTodo = async (title, description) => {
    return new Promise((resolve, _) => {
      let todo = {
        id: Math.floor(4 + Math.random() * 10),
        title: title,
        description: description,
      };
      todos = [...todos, todo];
      resolve("Todo added successfully");
    });
  };

  deleteTodoById = async (id) => {
    return new Promise((resolve, reject) => {
      const index = todos.findIndex((t) => t.id === id);
      if (index < 0) {
        reject("Todo not found");
      }
      todos.splice(index, 1);
      resolve("Todo deleted successfully");
    });
  };
}

module.exports = Todo;
