import { errorMessage, successMessage } from "../../Helpers/utils";
import { addProductService } from "../../Services/product.service";
import { isRequired } from "../../Helpers/required";

export const createProductRequiredController = async (req, res, next) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    product_img: req.body.product_img,
    product_gallery: req.body.product_gallery,
  };

  if (!isRequired(data, res)) return;
  return next();
};

export const createProductController = async (req, res, next) => {
  const {
    name,
    price,
    category,
    title,
    description,
    product_img,
    product_gallery,
  } = req.body;
  const data = {
    name,
    price,
    category,
    title,
    description,
    product_img,
    product_gallery,
  };
  const product = await addProductService(data, res);
  if (product) return successMessage(200, "Product Created", product);
  if (!product) return errorMessage(400, "Error creatig product", null);
};
