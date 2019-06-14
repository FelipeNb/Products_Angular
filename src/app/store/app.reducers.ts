import { ActionReducerMap } from '@ngrx/store';

import * as fromProducts from '../product/store/products.reducers';
import * as fromShop from '../shop/store/shop.reducers';
import * as fromRecipe from '../recipe/store/recipe.reducers';
// import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
  productList: fromProducts.State;
  shopList: fromShop.State;
  recipeList: fromRecipe.State;
  // auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  productList: fromProducts.reducer,
  shopList: fromShop.reducer,
  recipeList: fromRecipe.reducer,
  // auth: fromAuth.authReducer
};
