const mongoose = require("mongoose");
const faker = require("faker");
const Todo = require("../models/Todo");

// Seeder using async await
const seedDatabase = async function () {
  const todos = [];
  for (let i = 0; i < 5; i++) {
    todos.push({
      description: faker.lorem.sentence(),
    });
  }

  await Todo.create({
    description: faker.lorem.sentence(),
  });
};

// Drop DB then seed

mongoose.connection.dropCollection("todo", async function () {
  await seedDatabase();
  mongoose.connection.close();
});


