import {
  productSchema,
  updatedProductSchema,
} from "../schemas/product.schema.js";
import { ProductService } from "../services/product.service.js";

export class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  static async createProduct(req, res) {
    try {
      await productSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  static async getProductByid(req, res) {
    try {
      const foundProduct = await ProductService.getProductById(req.params.id);
      res.json(foundProduct);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
  static async updateProduct(req, res) {
    try {
      await updatedProductSchema.validateAsync(req.body);
      const updatedProduct = ProductService.updateProduct(
        req.params.id,
        req.body
      );
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  static async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
}
