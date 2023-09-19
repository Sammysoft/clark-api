import { Product } from "../Models/products.model.js";
import { errorMessage } from "../Helpers/utils.js";

export const addProductService = async (data, res) => {
  try {
    let product = await new Product(data);
    product = await product.save();
    return product;
  } catch (error) {
    console.log(error)
    return errorMessage(401, "Oops could not create product", null)(res);
  }
};
