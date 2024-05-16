import express from "express";
import request from "supertest";

const app = express();
app.get("/", (request,response) => {
    const type = request.get("Accept");
    response.send(`Hello ${type}`)
})

test('request get testing express', async () => {
  const response = await request(app).get("/").set("Accept", "text/plain")
   expect(response.text).toBe("Hello text/plain");
})
