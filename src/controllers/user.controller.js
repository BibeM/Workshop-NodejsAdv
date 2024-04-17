import { UserService } from "../services/user.service.js";
import { updateUserSchema, userSchema } from "../schemas/user.schema.js";
import { orderSchema } from "../schemas/order.schema.js";

export class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllusers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  static async createUser(req, res) {
    try {
      userSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      const createdUser = await UserService.createUser(req.body);
      res.status(201).jason(createdUser);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  static async getUserbyId(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
  static async updateUser(req, res) {
    try {
      await updateUserSchema.validateAsync(req.body);
      const updatedUser = UserService.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  static async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id);
      res.status(204);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
}
