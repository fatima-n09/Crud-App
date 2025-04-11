const express = require("express");
const product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updatedProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
