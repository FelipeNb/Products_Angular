import { Recipe } from './recipe.model';

export class Product {
  public name: string;
  public img: string;
  public price: number;
  public recipe: Recipe;

  constructor(name: string, img: string, price: number, recipe: Recipe) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.recipe = recipe;
  }
}
