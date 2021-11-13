let buildMakeTodo = require("./todo");
let todoSchema = require("./todo-schema");
let todoValidator = require("../validator/")(todoSchema);

let makeTodo = buildMakeTodo(todoValidator);

module.exports = makeTodo;
