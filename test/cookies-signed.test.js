import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("SANGATLAHRAHASIA"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["login"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/", signed: true });
  res.send(`Hello ${name}`);
});

test("testing cookies express", async () => {
  const res = await request(app)
    .get("/")
    .set("Cookie", "login=s%3AHadi.JZZFwS2PIgBse4uken6yByLX6%2Bc8cRP2tY8p%2FAbn3o4; Path=/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello Hadi");
});

test("testing cookies write", async () => {
  const response = await request(app).post("/login").send({ name: "Hadi" });
  expect(response.get("Set-Cookie").toString()).toContain("Hadi");
  console.info(response.get("Set-Cookie"));
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Hadi");
});
