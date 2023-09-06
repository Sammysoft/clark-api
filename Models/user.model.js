import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    full_name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
    profile_img: { type: String, dafault: "" },
    poducts: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
