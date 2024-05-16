import express from "express";
import request from "supertest";

const app = express();

const midlleware = (err, req, res, next) => {
  res.status(500).send(`terjadi error ${err.message}`);
};

app.get("/error", (req, res) => {
  throw new Error("ups");
});
app.use(midlleware);

test("error handling express test", async () => {
  const response = await request(app).get("/error");
  expect(response.status).toBe(500);
  expect(response.text).toBe("terjadi error ups");
});
