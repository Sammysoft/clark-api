import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.ObjectId, ref: "Category" },
  title: { type: String, default: "" },
  description: { type: String },
  product_img: { type: String },
  product_gallery: [{ type: String }],
});

export const Product = mongoose.model("Product", productSchema);
