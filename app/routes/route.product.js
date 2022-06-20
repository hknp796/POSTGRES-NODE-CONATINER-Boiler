import express from "express";
import { getProducts } from "../controllers/controller.products.js";
const product = express.Router();

product.get("/", getProducts);

export default product;
