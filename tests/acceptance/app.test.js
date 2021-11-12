const app = require("../../src/drivers/webservers/app.js");
const request = require("supertest");
const faker = require("faker");

describe("Server is working", () => {
  //Ping test endpoint
  test("Pinging", async () => {
    const response = await request(app).get("/api/ping").send();
    expect(response.statusCode).toBe(200);
  });

  //Making sure we are sending back json response
  test("Pinging and expecting response to be json", async () => {
    const response = await request(app).get("/api/ping").send();
    expect(response.type).toBe("application/json");
  });
});

describe("Fetching all todos", () => {
  //Ping test endpoint
  test("Fetching all todo's", async () => {
    const response = await request(app).get("/api/todos").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
    if (response.body.length > 0) {
      response.body.forEach((item) => {
        expect(item).toHaveProperty(id);
        expect(item).toHaveProperty(description);
      });
    }
  });
});
