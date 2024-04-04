import { Router } from "express";
import { productRouter } from "../routes/product.routes.js";

export const globalRouter = Router();
globalRouter.use("/products", productRouter);
//globalRouter.use("order", orderRouter);
