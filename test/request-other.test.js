import express from "express";
import request from "supertest";

const app  = express()

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/contoh.txt")
})

test('testing a GET route', async () => {
  const res = await request(app).get('/');
  expect(res.text).toContain("ini contoh text");
})
