import { Product } from '../shared/product.model';

export class Shop {
  public product: Product;
  public amount: number;

  constructor(product: Product, amount: number) {
    this.product = product;
    this.amount = amount;
  }

}
