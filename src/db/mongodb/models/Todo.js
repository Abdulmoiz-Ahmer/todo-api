let mongoose = require("../connection");

const TodoSchema = new mongoose.Schema({
  description: String,
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
