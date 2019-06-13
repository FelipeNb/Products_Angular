import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import * as fromApp from '../store/app.reducers';
import * as ProductActions from '../product/store/products.actions';


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
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.products = this.store.select('productList');
  }

  onCreate() {
    this.store.dispatch(new ProductActions.StopEdit());
    this.router.navigate(['/product/edit']);
  }

  onConfigure() {
    this.router.navigate(['configure'], { relativeTo: this.route });
  }

}
