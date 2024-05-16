import express from "express";
import request from "supertest";

const app = express();

app.get("/hello/world", (request, response) => {
  response.json({
    path: request.path,
    originalUrl: request.originalUrl,
    hostname: request.hostname,
    protocol: request.protocol,
    secure: request.secure,
  });
});

test("test request url express", async () => {
  const response = await request(app)
    .get("/hello/world")
    .query({ name: "Hadi" });
     expect(response.body).toEqual({
        path :"/hello/world",
        originalUrl :"/hello/world?name=Hadi",
        hostname :"127.0.0.1",
        protocol :"http",
        secure : false
     });
});
