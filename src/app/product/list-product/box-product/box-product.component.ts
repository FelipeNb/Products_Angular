import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '../../../shared/product.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducers';
import * as ShopActions from '../../../shop/store/shop.actions';
import { Shop } from 'src/app/shop/shop.model';

@Component({
  selector: 'app-box-product',
  templateUrl: './box-product.component.html',
  styleUrls: ['./box-product.component.css']
})
export class BoxProductComponent implements OnInit {

  @Input() item: Product;
  showDetails: boolean;
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.showDetails = false;
  }

  onAddCar() {
    const shopItem = new Shop(this.item, 1);
    this.store.dispatch(new ShopActions.AddShop(shopItem));
  }
}
