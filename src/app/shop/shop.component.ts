import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as ShopActions from '../shop/store/shop.actions';
import { Observable } from 'rxjs';
import { Shop } from './shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopListState: Observable<{ shops: Shop[] }>;
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.shopListState = this.store.select('shopList');
  }

  onFinish() {

  }

  onDelete(index: number) {
    this.store.dispatch(new ShopActions.RemoveShop(index));
  }

}
