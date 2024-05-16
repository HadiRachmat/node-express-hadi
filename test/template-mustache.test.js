import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());


app.get("/", (req, res) => {
    res.send("hello express");
});

test("template test", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("hello express");
});

