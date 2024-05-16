import express from "express";
import request from "supertest";

const app = express();

app.get("/", (request, response) => {
  response.set({
    "username": "Hadi Rachmat",
    "name": "johnathan",
  });
  response.send("Hello World");
});

test("response header http express", async () => { 
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World");
  expect(response.get("username")).toBe("Hadi Rachmat");
  expect(response.get("name")).toBe("johnathan");
});