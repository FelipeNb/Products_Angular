import * as fromProducts from '../product/store/products.reducers';
// import * as fromAuth from '../auth/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  productList: fromProducts.State;
  // auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  productList: fromProducts.productReducer,
  // auth: fromAuth.authReducer
};
