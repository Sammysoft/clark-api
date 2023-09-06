import { User } from "../Models/user.model.js";
import bcrypt from "bcrypt";
import { errorMessage, successMessage } from "../Helpers/utils.js";
import { Product } from "../Models/products.model.js";

export const changePasswordService = async (data, password) => {
  try {
    let user = await User.findOne(data);
    let hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user = await user.save();
    return user;
  } catch (error) {
    console.log(error)
    return false;
  }
};

export const updateProductByService = (from, $qry) => async res => {
    try {
      let updateProduct = await Product.findOneAndUpdate(from, $qry);
      if (!updateProduct)
        return errorMessage(400, "Unable to complete Update", null)(res);
      return updateProduct;
    } catch (error) {
      return errorMessage(400, "Unable to complete update", null)(res);
    }
  };
