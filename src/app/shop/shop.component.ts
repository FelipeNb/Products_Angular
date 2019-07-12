import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as ShopActions from '../shop/store/shop.actions';
import { Observable, Subscription } from 'rxjs';
import { Shop } from '../shared/shop.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  shopListState: Observable<{ shops: Shop[] }>;
  mySubscription: Subscription;
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.shopListState = this.store.select('shopList');
    this.mySubscription = this.shopListState.pipe(
      take(1)
    ).subscribe(
      (data) => {
        if (data.shops.length === 0) {
          this.store.dispatch(new ShopActions.FetchShop());
        }
      }
    );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  onFinish() {
    this.store.dispatch(new ShopActions.StoreShop());
  }

  onDelete(index: number) {
    this.store.dispatch(new ShopActions.DeleteShop(index));
  }

}
