import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private static cart = [
    { id: 1, name: 'Product 1', price: 50, quantity: 1 },
    { id: 2, name: 'Product 2', price: 100, quantity: 2 },
  ];

  constructor() { }

  // Get all items in the cart
  getCart() {
    return CartService.cart;
  }

  // Add a product to the cart
  addToCart(product: any) {
    const existingProduct = CartService.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity if already in cart
    } else {
      CartService.cart.push({ ...product, quantity: 1 }); // Add new product
    }
  }

  // Remove a product from the cart
  removeFromCart(productId: number) {
    CartService.cart = CartService.cart.filter((item) => item.id !== productId);
  }

  // Update the quantity of a product
  updateQuantity(productId: number, quantity: number) {
    const product = CartService.cart.find((item) => item.id === productId);
    if (product && quantity > 0) {
      product.quantity = quantity;
    }
  }

  // Calculate the total price of the cart
  getTotal() {
    return CartService.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
