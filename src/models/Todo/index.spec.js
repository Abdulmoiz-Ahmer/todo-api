const faker = require("faker");
let makeStudent = require("./index");

describe("makeTodo", () => {
  it("throws error if invalid payload", () => {
    let errorMessage = ["description have name as string"].join("\n");

    expect(() => {
      makeTodo({
        description: 12,
      });
    }).to.throw(errorMessage);
  });

  it("must have description", () => {
    let actual = faker.lorem.sentence();
    let todo = makeTodo({
      description: actual,
    });
    let input = todo.getDescription();
    expect(input).to.equal(actual);
  });
});
