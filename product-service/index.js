const express = require("express");
const client = require("prom-client");

const app = express();

// Collect default system and Node.js metrics
client.collectDefaultMetrics();

// Metrics endpoint for Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Product API endpoint
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

// Start server
app.listen(3001, "0.0.0.0", () => {
  console.log("Product service running");
});