import express from  "express";
import request from "supertest";

const app = express()

app.get("/", (request,response)=>{
    response.send("Hello word");
});

test('test express js', async () => {
  const response = await request(app).get("/");
   expect(response.text).toBe("Hello word");
})
