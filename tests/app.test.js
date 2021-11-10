const { app } = require("../src/drivers/webservers/app");
const supertest = require("supertest");

describe("Server is working", () => {
  //Ping test endpoint
  test("Pinging", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.statusCode).toBe(200);
  });
});
