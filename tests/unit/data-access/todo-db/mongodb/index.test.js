const faker = require("faker");
const todoRepository = require("../../../../../src/data-access/todo-db/mongodb/index");

describe("addTodo", () => {
  test("must have description and id", async () => {
    const actual = faker.lorem.sentence();
    const input = await todoRepository.addTodo({ description: actual });
    expect(input).toHaveProperty("id");
    expect(input).toHaveProperty("description");
    expect(input.description).toBe(actual);
  });
});

describe("listTodo", () => {
  test("must not returned empty", async () => {
    const response = await todoRepository.listTodos();
    expect(response).not.toHaveLength(0);
  });
});
