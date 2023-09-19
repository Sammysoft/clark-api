import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    full_name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
    profile_img: { type: String, dafault: "" },
    products: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

userSchema.virtual('productDetails', {
  ref: 'Product',
  localField: 'products', // Field in the current schema
  foreignField: '_id', // Field in the referenced schema
  justOne: false, // Set to false to get an array of students
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

export const User = mongoose.model("User", userSchema);
