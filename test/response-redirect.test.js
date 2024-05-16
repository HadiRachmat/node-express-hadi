import express from "express";
import request from "supertest";

const app = express();

app.get("/", (request, response) => {
  //   response.send("hello response");
  response.redirect("/to-next-page");
});

test("test response redirect", async () => {
  const response = await request(app).get("/");
  //   expect(response.text).toBe("hello response");
  expect(response.status).toBe(302);
  expect(response.get("location")).toBe("/to-next-page");
});
