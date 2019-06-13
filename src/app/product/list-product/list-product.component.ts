import { Component, OnInit } from '@angular/core';

import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../shared/product.model';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productListState: Observable<{ products: Product[] }>;
  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.productListState = this.store.select('productList');
  }

}
