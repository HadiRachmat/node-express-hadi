import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/" });
  res.send(`Hello ${name}`);
});

test("testing cookies express", async () => {
  const res = await request(app)
    .get("/")
    .set("Cookie", "name=Hadi;author=Hadi Rachmat Supindar");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello Hadi");
});

test("testing cookies write", async () => {
  const response = await request(app).post("/login").send({ name: "Hadi" });
  expect(response.get("Set-Cookie").toString()).toBe("login=Hadi; Path=/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Hadi");
});
