import * as fromProducts from '../product/store/products.reducers';
import * as fromShop from '../shop/store/shop.reducers';
// import * as fromAuth from '../auth/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  productList: fromProducts.State;
  shopList: fromShop.State;
  // auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  productList: fromProducts.reducer,
  shopList: fromShop.reducer,
  // auth: fromAuth.authReducer
};
