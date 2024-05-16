import express from "express";
import request from "supertest";

const app = express();
app.get("/", (request, response) => {
  if (request.query.name) {
    response.status(200);
    response.send(`Hello My Name is ${request.query.name}`);
  } else {
    response.status(400);
    response.end();
  }
});

test("response test express", async () => {
  let response = await request(app).get("/").query({ name: "Hadi" });
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello My Name is Hadi");

  response = await request(app).get("/");
  expect(response.status).toBe(400);
});
