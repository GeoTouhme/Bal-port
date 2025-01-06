import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/responses/CategoryResponse';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  product_id: string = '';
  product!: Product;
  cartForm!: FormGroup;
  mutal_products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Get product ID from route parameters
    this.route.params.subscribe((params) => {
      this.product_id = params['id'];
    });

    // Initialize the form
    this.cartForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }
  Navigate(id: string) {
    this.router.navigateByUrl(`/product/${id}`).then(() => { window.location.reload(); });
  }
  ngOnInit(): void {
    // Fetch product details
    this.productService.getProduct(this.product_id).then((response) => {
      this.product = response.data!;
      if (response.data?.category) {
        this.productService.getMutualProducts(response.data.category).then((res) => {
          this.mutal_products = res.data!;
        })
      }
    });
  }

  addToCart() {
    if (this.cartForm.invalid) {
      return;
    }

    // Prepare the cart item data
    const cartItem = {
      productId: this.product_id,
      quantity: this.cartForm.value.quantity,
    };

    // Call the ProductService to add the item to the cart
    this.productService.addToCart(cartItem.productId, cartItem.quantity, this.product.price).then((res) => {
      if (res.success == true) {
        Swal.fire({
          icon: "success",
          text: `Thank you`
        }).then(() => {

        })
      }
    });
  }
}
