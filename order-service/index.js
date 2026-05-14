const express = require("express");
const client = require("prom-client");

const app = express();

app.use(express.json());

client.collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

let orders = [];

app.post("/orders", (req, res) => {
  orders.push({ id: orders.length + 1 });
  res.json(orders);
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Order service running");
});