import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BaseResponse } from 'src/app/models/responses/BaseResponse';
import { CartProductResponse } from 'src/app/models/responses/CartProductResponse';
import { Category, Product } from 'src/app/models/responses/CategoryResponse';
import { LoginResposnse } from 'src/app/models/responses/LoginResponse';
import { api } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }
  getItems(): Promise<BaseResponse<Category[]>> {
    return this.http.get<BaseResponse<Category[]>>(api.GET_PRODUCTS).toPromise() as Promise<BaseResponse<Category[]>>;
  }
  getProduct(id: string): Promise<BaseResponse<Product>> {
    return this.http.get<BaseResponse<Product>>(api.GET_PRODUCT + `?id=${id}`).toPromise() as Promise<BaseResponse<Product>>;
  }
  getMutualProducts(category: string): Promise<BaseResponse<Product[]>> {
    return this.http.get(api.GET_M_PRODUCT + `?category=${category}`).toPromise() as Promise<BaseResponse<Product[]>>;
  }
  addToCart(productId: string, quantity: number, price: number): Promise<BaseResponse<Product>> {
    const body = { productId, quantity, price }
    return this.http.post<BaseResponse<Product>>(api.ADD_CART, body).toPromise() as Promise<BaseResponse<Product>>;
  }
  getCart(): Promise<BaseResponse<CartProductResponse>> {
    return this.http.get(api.ADD_CART).toPromise() as Promise<BaseResponse<CartProductResponse>>;
  }

}
