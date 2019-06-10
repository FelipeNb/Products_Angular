import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure-product',
  templateUrl: './configure-product.component.html',
  styleUrls: ['./configure-product.component.css']
})
export class ConfigureProductComponent implements OnInit {

  productListState: Observable<{ products: Product[] }>;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.productListState = this.store.select('productList');
  }

  onEdit() {
    this.router.navigate(['/edit']);
  }

}
