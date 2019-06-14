import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../shared/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import * as ProductActions from '../store/products.actions';

@Component({
  selector: 'app-configure-product',
  templateUrl: './configure-product.component.html',
  styleUrls: ['./configure-product.component.css']
})
export class ConfigureProductComponent implements OnInit {

  productListState: Observable<{ products: Product[] }>;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.productListState = this.store.select('productList');
  }

  onEdit(index: number) {
    this.store.dispatch(new ProductActions.StartEdit(index));
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }

  onDelete(index: number) {
    this.store.dispatch(new ProductActions.DeleteProduct(index));
  }

}
