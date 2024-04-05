import { Product } from "../models/product.model.js";

export class ProductService {
  static async getAllProducts() {
    const products = await Product.find();
    return products;
  }

  static async createProduct(productData) {
    const newProduct = new Product(productData);
    const createdProduct = await newProduct.save();
    return createdProduct;
  }
  static async getProductById(productId) {
    const foundProduct = await Product.findById(productId);
    if (!foundProduct) throw new Error("Product not found!");
    return foundProduct;
  }
  static async updateProduct(productId, updateData) {
    const foundProduct = await this.getProductById(productId);
    Object.assign(foundProduct, updateData);
    const updatedProduct = await foundProduct.save();
    return updatedProduct;
  }
  static async deleteProduct(productId) {
    const response = await Product.findByIdAndDelete(productId);
    if (!response) throw new Error("Product not found!");
  }
}
