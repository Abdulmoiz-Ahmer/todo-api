const faker = require("faker");
const makeTodo = require("../../../../src/models/Todo/index");

describe("makeTodo", () => {
  test("must have description", () => {
    const actual = faker.lorem.sentence();
    const todo = makeTodo({
      description: actual,
    });
    const input = todo.getDescription();
    expect(input).toEqual(actual);
  });
});
