const express = require("express");
const app = express();

let orders = [];

app.post("/orders", (req, res) => {
  orders.push({ id: orders.length + 1 });
  res.json(orders);
});

app.get("/orders", (req, res) => res.json(orders));

app.listen(3003, () => console.log("Order service running"));