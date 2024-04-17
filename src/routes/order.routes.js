import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";

export const orderRouter = Router();

orderRouter.get("/", OrderController.getAllOrders);
orderRouter.post("/", OrderController.createOrder);
orderRouter.get("/:id", OrderController.getOrderById);
