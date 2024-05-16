import express from "express";
import request from "supertest";

const logger = (request, response, next) => {
  console.log(`Recive Request: ${request.method}, ${request.originalUrl}`);
  next();
};

const createdByName = (request, response, next) => {
  response.set("X-Create-By", "Hadi Rachmat Supindar");
  next();
};

const apiKeyMiddleware = (request, response, next) => {
  if (request.query.apikey) {
    next();
  } else {
    response.status(401);
  }
};

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(createdByName);

app.get("/", (request, response) => {
  response.send("Hello Response");
});

app.get("/Login", (request, response) => {
  response.send("Hello Response");
});

test("middleware test express", async () => {
  const response = await request(app).get("/").query({ apikey: "123123" });
  expect(response.get("X-Create-By")).toBe("Hadi Rachmat Supindar");
  expect(response.text).toBe("Hello Response");
});

test("middleware test express second", async () => {
  const response = await request(app).get("/Login").query({ apikey: "123123" });
  expect(response.get("X-Create-By")).toBe("Hadi Rachmat Supindar");
  expect(response.text).toBe("Hello Response");
});
