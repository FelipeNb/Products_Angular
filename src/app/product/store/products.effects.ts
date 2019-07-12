import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductsActions from '../store/products.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Product } from 'src/app/shared/product.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductsEffects {

  baseUrl = environment.baseUrlProducts;

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) { }

  @Effect() fetchProduct$ = this.actions$.pipe(
    ofType(ProductsActions.FETCH_PRODUCT),
    switchMap(
      (action: ProductsActions.FetchProduct) => {
        return this.httpClient.get<Product[]>(this.baseUrl);
      }
    ),
    map(
      (products) => {
        return {
          type: ProductsActions.SET_PRODUCTS,
          product: products
        };
      }
    ),
  );

  @Effect() requestCreateProduct$ = this.actions$.pipe(
    ofType(ProductsActions.REQUEST_CREATE_PRODUCT),
    switchMap(
      (action: ProductsActions.RequestCreateProduct) => {
        return this.httpClient.post<Product>(this.baseUrl, action.product);
      }
    ),
    map(
      (products) => {
        return {
          type: ProductsActions.CREATE_PRODUCT,
          product: products
        };
      }
    ),
  );

  @Effect({
    dispatch: false
  }) deleteProducts$ = this.actions$.pipe(
    ofType(ProductsActions.DELETE_PRODUCT),
    map((action: ProductsActions.DeleteProduct) => {
      return action.item.id;
    }),
    switchMap((id) => {
      const req = new HttpRequest('DELETE', this.baseUrl + '/' + id);
      return this.httpClient.request(req);
    }),
  );

  @Effect(
    { dispatch: false }
  ) updateProducts$ = this.actions$.pipe(
    ofType(ProductsActions.UDPATE_PRODUCT),
    map((action: ProductsActions.UpdateProduct) => {
      return action.product;
    }),
    switchMap((product: Product) => {
      const req = new HttpRequest('PUT', this.baseUrl, product);
      return this.httpClient.request(req);
    })
  );
}
