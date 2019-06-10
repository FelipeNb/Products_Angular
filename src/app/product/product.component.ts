import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers'
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<{ products: Product[] }>;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.products = this.store.select('productList');
  }

  onCreate() {
    this.router.navigate(['/edit']);
  }

  onConfigure() {
    this.router.navigate(['/configure']);
  }

}
