const express = require("express");
const router = express.Router();
const todoDB = require("../../../../data-access/todo-db/mongodb/index");

router.get("/todos", (_, response) => {
  todoDB.listTodos().then((data) => response.send(data));
});

router.post("/todo", (request, response, next) => {
  todoDB
    .addTodo(request.body)
    .then((data) => response.send(data))
    .catch(() => next);
});

module.exports = router;
