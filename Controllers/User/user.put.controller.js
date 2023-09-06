import { isRequired } from "../../Helpers/required.js";
import { errorMessage, successMessage } from "../../Helpers/utils.js";
import { User } from "../../Models/user.model.js";
import { changePasswordService } from "../../Services/profile.service.js";
import { updateProductByService } from "../../Services/profile.service.js";


export const changePasswordRequiredController = (req, res, next) => {
  const data = { email: req.body.email, password: req.body.password };
  if (!isRequired(data, res)) return;
  return next();
};

export const changePasswordController = async (req, res, next) => {
  const { password, email } = req.body;
  let user = await changePasswordService({ email: email }, password);
  user = { full_name: user.full_name, email: user.email };
  if (user) return successMessage(200, "Password Changed!", user)(res);
  if (!user)
    return errorMessage(400, "Oops, could not change password!", null)(res);
};

export const updateUserProductsController = async (userID, productID, pull = undefined) => {
  try {
    let user = await User.findOne({ _id: userID });
    if (!user) return false;
    let product = productID;

    if (
      typeof product !== "undefined" ||
      (product !== null && typeof product === "string")
    ) {
      const operation = pull ? "$pull" : "$addToSet";
      await updateProductByService(
        { _id: product },
        { [operation]: { user: user._id } }
      );
      user = await User.findOneAndUpdate(
        { _id: user._id },
        { [operation]: { products: product } },
        { new: true }
      );
      return user;
    }
  } catch (error) {
    return false;
  }
};