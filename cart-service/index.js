const express = require("express");
const client = require("prom-client");

const app = express();

app.use(express.json());

client.collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

let cart = [];

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json(cart);
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(3002, "0.0.0.0", () => {
  console.log("Cart service running");
});