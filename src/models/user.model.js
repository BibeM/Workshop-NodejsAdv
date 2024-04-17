import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
  firstName: {
    type: String,
    requared: true,
    minLenght: 3,
  },
  lastName: {
    type: String,
    requared: true,
    minLenght: 3,
  },
  age: {
    type: Number,
    requared: true,
    min: 18,
  },
  email: {
    type: String,
    requared: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (error) => `${error.value} is not a valid email!`,
    },
  },
  country: {
    type: String,
    requared: true,
    minLength: 3,
  },

  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

export const User = model("User", userSchema);
