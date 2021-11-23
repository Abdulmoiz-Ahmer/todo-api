const faker = require("faker");
const serialize = require("../../../../../src/data-access/todo-db/mongodb/serialize");
describe("Unit test", () => {
  test("check serialize method", () => {
    const dummyTodoObject = {
      description: faker.lorem.sentence(),
      _id: faker.datatype.uuid,
    };

    const responseObject = serialize(dummyTodoObject);
    expect(responseObject).toHaveProperty("id");
    expect(responseObject).not.toHaveProperty("_id");
  });
});
