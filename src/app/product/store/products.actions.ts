import { Action } from '@ngrx/store';
import { Product } from '../../shared/product.model';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UDPATE_PRODUCT = 'UDPATE_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const STORE_PRODUCT = 'STORE_PRODUCT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;
  constructor(public payload: Product) { }
}

export class UpdateProduct implements Action {
  readonly type = UDPATE_PRODUCT;
  constructor(public payload: Product) { }
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public payload: number) { }
}

export class FetchProduct implements Action {
  readonly type = FETCH_PRODUCT;
}

export class StoreProduct implements Action {
  readonly type = STORE_PRODUCT;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) { }
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ProductActions = CreateProduct | UpdateProduct | RemoveProduct | FetchProduct | StoreProduct | StartEdit | StopEdit;
