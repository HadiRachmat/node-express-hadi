import express, { request, response } from "express";

const app = express();

app.get("/", (request,response)=>{
    response.send("hello word")
})
app.get("/hadi", (request,response)=>{
    response.send("hello Hadi")
})

app.listen(3000,()=>{
    console.log("the server is running on port 3000")
})