const { Verifier } = require("@pact-foundation/pact");
const path = require("path");

// Setup provider server to verify
const app = require("../../src/drivers/webservers/app.js");
const server = app.listen("4009");

describe("Pact Verification", () => {
  test("validates the expectations of consumer contracts", () => {
    const opts = {
      logLevel: "debug",
      providerBaseUrl: "http://localhost:4009",
      provider: "todo-api",
      providerVersion: "1.0.0",
      pactUrls: [path.resolve(__dirname, "./pacts/todo-ui-todo-api.json")],
    };

    return new Verifier(opts)
      .verifyProvider()
      .then((output) => {
        console.log(output);
      })
      .finally(() => {
        server.close();
      });
  });
});
