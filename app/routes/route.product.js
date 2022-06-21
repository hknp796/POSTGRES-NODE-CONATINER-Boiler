import express from "express";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/controller.product.js";

const Product = express.Router();

// CRUD

Product.get("/", getAll);

Product.get("/:id", getOne);

Product.post("/", createOne);

Product.put("/", updateOne);

Product.delete("/:id", deleteOne);

export default Product;
