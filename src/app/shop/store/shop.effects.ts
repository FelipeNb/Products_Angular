import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { withLatestFrom, switchMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as ShopActions from '../store/shop.actions';
import * as fromApp from '../../store/app.reducers';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Shop } from '../../shared/shop.model';
import { User } from 'src/app/shared/user.model';

@Injectable()
export class ShopEffects {

  baseUrl = environment.baseUrlUser;

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private httpClient: HttpClient,
  ) { }

  @Effect({ dispatch: false }) storeShop$ = this.actions$.pipe(
    ofType(ShopActions.STORE_SHOP),
    withLatestFrom(this.store.select('shopList')),
    switchMap(([action, state]) => {
      const req = new HttpRequest('POST', this.baseUrl, state.shops);
      return this.httpClient.request(req);
    })
  );

  @Effect() fetchProduct$ = this.actions$.pipe(
    ofType(ShopActions.FETCH_SHOP),
    switchMap(
      (action: ShopActions.FetchShop) => {
        return this.httpClient.get<User>(this.baseUrl + '/5d27bd8c4b283707e87271e0');
      }
    ),
    map(
      (user: User) => {
        console.log(user);
        return {
          type: ShopActions.SET_SHOP,
          shop: user.shops
        };
      }
    ),
  );


}
