const faker = require("faker");
const validator = require("../validator");
const schema = require("../../models/Todo/todo-schema");

describe("validation", () => {
  test("error should be defined", () => {
    const { error } = validator(schema)({});
    expect(error).not.toBeUndefined();
    expect(error).not.toBeNull();
    expect(error).not.toBe(null);
    expect(error).not.toEqual(null);
    expect(error).not.toBe("");
  });
  test("error should be undefined", () => {
    const { error } = validator(schema)({
      description: faker.lorem.sentence(),
    });
    expect(error).toBeUndefined();
  });
});
