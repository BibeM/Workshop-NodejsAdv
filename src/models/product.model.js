import { Schema, model } from "mongoose";
import validator from "validator";

const productSchema = new Schema({
  title: {
    type: String,
    requared: true,
    minLenght: 3,
  },

  stock: {
    type: Number,
    requared: true,
    min: 0,
  },

  description: {
    type: String,
    requared: true,
    minLenght: 3,
  },

  category: {
    type: String,
    minLenght: 3,
  },
  price: {
    type: Number,
    requared: true,
    min: 0,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});
export const Product = model("Product", productSchema);
