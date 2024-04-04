import { Product } from "../models/product.model.js";

export class ProductService {
  static async getAllProducts() {
    const products = await Product.find();
    return products;
  }

  static async createProduct()

 
}
