import mongoose, { Mongoose } from "mongoose";

const productSchema = mongoose.Schema({
  details: { type: String, default: "" },
  taxIncludedPrice: { type: Number, default: 0 },
  taxExcludedPrice: { type: Number, default: 0 },
  category: { type: String, default: "" },
  title: { type: String, default: "" },
  description: { type: String },
  product_gallery: [],
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
});

export const Product = mongoose.model("Product", productSchema);
