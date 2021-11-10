const app = require("../src/drivers/webservers/app.js");
const request = require("supertest");

describe("Server is working", () => {
  //Ping test endpoint
  test("Pinging", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.statusCode).toBe(200);
  });

  //Making sure we are sending back json response
  test("Pinging and expecting response to be json", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.type).toBe("application/json");
  });
});
