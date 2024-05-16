import express from "express";
import request from "supertest";

const app = express();

// app.use(express.static(__dirname + "/static"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send("hello static");
  //   console.info(res)
});

app.get("/contoh.txt", (req, res) => {
  res.send("hello contoh");
});

test("test heelo", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("hello static");
  //   console.log(response);
});

test("test static file", async () => {
  const response = await request(app).get("/contoh.txt");
  expect(response.text).toContain("hello contoh");
});

test("test static file prefix", async () => {
  const response = await request(app).get("/static/contoh.txt");
  expect(response.text).toContain("ini contoh text");
});
