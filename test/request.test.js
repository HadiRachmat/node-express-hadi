import express from "express";
import request from "supertest";

const app = express()

app.get("/", (request,response) => {
    response.send(`Hello ${request.query.name}`);
})

test('request http express', async () => {
  const response = await request(app).get("/").query({name : "World"}); 
   expect(response.text).toBe("Hello World");
})
