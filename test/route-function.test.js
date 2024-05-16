import express from "express";
import request from "supertest"


const app = express();

app.route("/product")
    .get((request,response) => {
        response.send("get product")
    })
    .post((request,response) => {
        response.send("create product")
    })
    .put((request,response) => {
        response.send("update product")
    });

test('Route function test', async () => {
  let response = await request(app).get("/product")
   expect(response.text).toBe("get product");

   response = await request(app).post("/product")
   expect(response.text).toBe("create product");

   response = await request(app).put("/product")
   expect(response.text).toBe("update product");
   
})
