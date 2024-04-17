import { User } from "../models/user.model.js";
import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

export class UserService {
  static async getAllusers() {
    const users = User.find({});
    return users;
  }
  static async createUser(userData) {
    const newUser = new User(userData);
    const createdUser = await newUser.save();
    return createdUser;
  }
  static async getUserById(userId) {
    const foundUser = await User.findById(userId).populate({
      path: "orders",
      model: Order,
    });
    if (!foundUser) throw new Error("User not found!");
    return foundUser;
  }
  static async updateUser(userId, updateData) {
    const foundUser = await this.getUserById(userId);
    Object.assign(foundUser, updateData);
    const updatedUser = await foundUser.save();
    return updatedUser;
  }
  static async deleteUser(userId) {
    const response = await User.findByIdAndDelete(userId);
    if (!response) throw new Error("User not found!");
  }
}
