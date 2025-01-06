
interface ProductInCart {
  productId?: string;
  name?: string;
  price: number;
  image?: string;
  quantity: number;
  totalPrice: number
}
export interface CartProductResponse {
  products?: ProductInCart[];
  totalPrice: number
}
