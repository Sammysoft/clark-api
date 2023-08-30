import express from "express";
import { authMiddlewareService } from "../../Services/middleware.service.js";
import {
  createProductController,
  createProductRequiredController,
} from "../../Controllers/Products/product.post.js";
import { userMiddleware } from "../../Services/user.middleware.service.js";

const ProductRoutes = express.Router();

ProductRoutes.post(
  "/add",
  userMiddleware,
  createProductRequiredController,
  createProductController
);

export default ProductRoutes;
