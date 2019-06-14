
export class Recipe {
  public name: string;
  public img: string;
  public ingredients: { ingredient: string, amount: number }[];
  public howPrepare: { name: string }[];
  public kcal: number;
  public portion: number;

  constructor(
    name: string,
    img: string,
    ingredients: { ingredient: string, amount: number }[],
    howPrepare: { name: string }[],
    kcal: number,
    portion: number
  ) {
    this.name = name;
    this.img = img;
    this.ingredients = ingredients;
    this.howPrepare = howPrepare;
    this.kcal = kcal;
    this.portion = portion;
  }
}
