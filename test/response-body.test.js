import express from "express";
import request from "supertest";

const app = express();

app.get("/", (request, response) => {
  response.set("Content-Type", "text/html");
  response.send(`<html><body>Hello word</body></html>`);
});

test('Test Response Body', async () => {
  const response = await request(app).get("/")
   expect(response.get("Content-Type")).toContain("text/html")
   expect(response.text).toBe(`<html><body>Hello word</body></html>`)
})

