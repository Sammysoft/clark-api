import { Product } from "../Models/products.model.js";
import { errorMessage } from "../Helpers/utils.js";

export const addProductService = async (data) => {
  try {
    const product = await new Product();
    product = await product.save(data);
    
    return product;
  } catch (error) {
    return errorMessage(400, "Oops could not create product", null);
  }
};
