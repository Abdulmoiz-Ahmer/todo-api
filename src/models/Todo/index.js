const buildMakeTodo = require("./build-make-todo.js");
const todoSchema = require("./todo-schema");
const todoValidator = require("../validator")(todoSchema);

const makeTodo = buildMakeTodo(todoValidator);
module.exports = makeTodo;
