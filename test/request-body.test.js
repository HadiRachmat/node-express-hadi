import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`,
  });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`,
  });
});

test("request body json test express", async () => {
  const response = await request(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({ name: "world" });
  expect(response.body).toEqual({
    hello: "Hello world",
  });
});
test("request body form test express", async () => {
  const response = await request(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=world")
  expect(response.body).toEqual({
    hello : `Hello world`
  });
});