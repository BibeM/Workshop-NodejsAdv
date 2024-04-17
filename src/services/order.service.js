import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

export class OrderService {
  static async getAllOrders() {
    const orders = await Order.find({});
    return orders;
  }

  static async createOrder(orderData) {
    const newOrder = new Order(orderData);
    const createdOrder = await newOrder.save();
    return createdOrder;
  }

  static async getOrderById(orderId) {
    const foundOrder = await Order.findById(orderId).populate({
      path: "products",
      model: Product,
    });
    if (!foundOrder) throw new Error("Order not found!");
    return foundOrder;
  }
}
