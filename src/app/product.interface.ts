export interface Product {
  Name: string;
  Category: string;
  Price: number;
  Date: number;
}

export interface ProductModel {
  [id: string]: Product
}



