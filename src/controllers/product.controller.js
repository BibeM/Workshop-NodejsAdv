import { productSchema } from "../schemas/product.schema.js";
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
}
