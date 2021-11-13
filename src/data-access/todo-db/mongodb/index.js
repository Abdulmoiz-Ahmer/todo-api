const Todo = require("../../../db/mongodb/models/Todo");
const makeTodo = require("../../../models/Todo/index"); // model
const serialize = require("./serialize"); // serializer custom to db

const listTodos = () => {
  return Todo.find({}).then(serialize);
};

const addTodo = (todoInfo) => {
  const todo = makeTodo(todoInfo);
  const newTodo = {
    description: todo.getDescription(),
  };
  return Todo.create(newTodo).then(serialize);
};

module.exports = {
  listTodos,
  addTodo,
};
