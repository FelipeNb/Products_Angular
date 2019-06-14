import { Recipe } from './recipe.model';

export class Product {
  public name: string;
  public img: string;
  public type: string;
  public price: number;
  public recipe: Recipe;
  public dateInserted: Date;
  public dateUpdate: Date;

  constructor(name: string, img: string, type: string, price: number, dateInserted: Date, dateUpdate: Date, recipe: Recipe = null) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.price = price;
    this.dateInserted = dateInserted;
    this.dateUpdate = dateUpdate;
    this.recipe = recipe;
  }
}
