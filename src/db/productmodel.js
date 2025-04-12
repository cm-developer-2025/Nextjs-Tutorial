import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  productId: Number,
  name: String,
  price: Number,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
