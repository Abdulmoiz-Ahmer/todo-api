const express = require("express");
const router = express.Router();
const todoDB = require("../../../../data-access/todo-db/mongodb/index");

router.get("/todos", (_, response) => {
  todoDB.listTodos().then((data) => response.send(data));
});

module.exports = router;
