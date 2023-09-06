import { errorMessage, successMessage } from "../../Helpers/utils.js";
import { addProductService } from "../../Services/product.service.js";
import { isRequired } from "../../Helpers/required.js";
import { updateUserProductsController } from "../User/user.put.controller.js";

export const createProductRequiredController = async (req, res, next) => {
  const data = {
    details: req.body.details,
    taxIncludedPrice: req.body.taxIncludedPrice,
    taxExcludedPrice: req.body.taxExcludedPrice,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    product_gallery: req.body.product_gallery,
    userID: req.body.userID,
  };

  if (!isRequired(data, res)) return;
  return next();
};

export const createProductController = async (req, res, next) => {
  const {
    details,
    taxIncludedPrice,
    taxExcludedPrice,
    category,
    title,
    description,
    product_gallery,
    userID,
  } = req.body;
  const data = {
    details,
    taxIncludedPrice,
    taxExcludedPrice,
    category,
    title,
    description,
    product_gallery,
    userID,
  };
  const product = await addProductService(data, res);
  if (product) {
    const userProduct = await updateUserProductsController(userID, product._id);
    if (userProduct) return successMessage(200, "Product Created", userProduct);
    if (!userProduct)
      return errorMessage(400, "Error in creating Product", null);
  }
  if (!product) return errorMessage(400, "Error creatig product", null);
};
