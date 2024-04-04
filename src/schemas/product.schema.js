import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().min(3).required(),
  stock: joi.number().min(0).required(),
  description: joi.string().min(3).required(),
  category: joi.string().min(3),
  price: joi.number().min(0).required(),
  rating: joi.number().min(1).max(5),
});
