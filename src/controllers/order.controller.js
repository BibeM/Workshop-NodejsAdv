import { productSchema } from "../schemas/product.schema.js";
import { orderSchema } from "../schemas/order.schema.js";
import { OrderService } from "../services/order.service.js";

export class OrderController {
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  static async createOrder(req, res) {
    try {
      orderSchema.validate(req.body, {
        abortEarly: false,
      });
      const createdOrder = await OrderService.createOrder(req.body);
      res.status(201).json(createdOrder);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  static async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.json(order);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
}
