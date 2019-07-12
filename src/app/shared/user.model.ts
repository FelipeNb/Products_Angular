import { Shop } from './shop.model';

export class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public shops: Shop[];

  constructor(
    name: string,
    email: string,
    password: string,
    shops = null,
    id = null
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.shops = shops;
    this.id = id;
  }
}
