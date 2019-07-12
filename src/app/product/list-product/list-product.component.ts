import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import * as ProductsAction from '../store/products.actions';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../shared/product.model';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, OnDestroy {
  productListState: Observable<{ products: Product[] }>;
  mySubscription: Subscription;
  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.productListState = this.store.select('productList');
    this.mySubscription = this.productListState.pipe(
      take(1)
    ).subscribe(
      (data) => {
        if (data.products.length === 0) {
          this.store.dispatch(new ProductsAction.FetchProduct());
        }
      }
    );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

}
