import express from "express";
import { authMiddlewareService } from "../../Services/middleware.service";
import {
  createProductController,
  createProductRequiredController,
} from "../../Controllers/Products/product.post";

const ProductRoutes = express.Router();

ProductRoutes.post(
  "/add",
  authMiddlewareService,
  createProductRequiredController,
  createProductController
);


export default ProductRoutes;
