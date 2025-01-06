export interface Product {
  _id: string,
  name: string;
  image: string;
  price: number;
  stock: number
  category?: string
}

export interface Category {
  name: string;
  items: Product[];
}
