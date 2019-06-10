import { Action } from '@ngrx/store';
import { Product } from '../product.model';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UDPATE_PRODUCT = 'UDPATE_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;
  constructor(public payload: Product) { }
}

export class UpdateProduct implements Action {
  readonly type = UDPATE_PRODUCT;
  constructor(public payload: { updatedProduct: Product }) { }
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public payload: number) { }
}

export class FetchProduct implements Action {
  readonly type = FETCH_PRODUCT;
}

export type ProductActions = CreateProduct | UpdateProduct | RemoveProduct | FetchProduct;
