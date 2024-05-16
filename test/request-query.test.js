import express from "express";
import request from "supertest";

const app = express();

app.get("/", (request, response) => {
  response.send(`Hello ${request.query.firstName} ${request.query.lastName}`);
});

test("request query test express", async () => {
  const response = await request(app)
    .get("/")
    .query({ firstName: "Hadi", lastName: "Rachmat" });
     expect(response.text).toBe("Hello Hadi Rachmat")
});
