const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API server!");
});

mongoose
  .connect(
    "mongodb+srv://fatima:fatima@backenddb.vrtealu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
