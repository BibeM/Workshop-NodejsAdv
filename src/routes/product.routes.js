import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
export const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.post("/", ProductController.createProduct);
productRouter.get("/:id", ProductController.getProductByid);
productRouter.patch("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);
