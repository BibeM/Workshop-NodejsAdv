import joi from "joi";

export const userSchema = joi.object({
  firstname: joi.string().required(),
  lastName: joi.string().required(),
  age: joi.number().required().min(18),
  email: joi.string().required().email(),
  country: joi.string().required(),
  orders: joi.array().items(joi.string()),
});

export const updateUserSchema = joi.object({
  firstname: joi.string(),
  lastName: joi.string(),
  age: joi.number().min(18),
  email: joi.string().email(),
  country: joi.string(),
  orders: joi.array().items(joi.string()),
});
