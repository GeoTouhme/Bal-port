import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CartProductResponse } from 'src/app/models/responses/CartProductResponse';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  loading: boolean = true;
  cart!: CartProductResponse
  constructor(private productService: ProductService) {
    this.productService.getCart().then((res) => {
      this.cart = res.data!
    });
    this.loading = false
  }
  removeFromCart(id: string) {

  }
  updateQuantity(sag: any, a: any) {

  }
  getTotal() {
    return 500
  }

}
