import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cart = this.cartService.getCart();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
