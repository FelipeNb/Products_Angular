export class Product {
  public id: string;
  public name: string;
  public img: string;
  public type: string;
  public price: number;
  public dateInserted: Date;
  public dateUpdate: Date;

  constructor(name: string, img: string, type: string, price: number, dateInserted: Date, dateUpdate: Date, id = null) {
    this.name = name;
    this.id = id;
    this.img = img;
    this.type = type;
    this.price = price;
    this.dateInserted = dateInserted;
    this.dateUpdate = dateUpdate;
  }
}
