import { Action } from '@ngrx/store';
import { Shop } from '../shop.model';

export const FETCH_SHOP = 'FETCH_SHOP';
export const STORE_SHOP = 'STORE_SHOP';
export const FINISH_SHOP = 'FINISH_SHOP';

export const ADD_SHOP = 'ADD_SHOP';
export const DELETE_SHOP = 'DELETE_SHOP';
export const UPDATE_SHOP = 'UPDATE_SHOP';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT_';
export const CLEAR_SHOP = 'CLEAR_SHOP';

export class AddShop implements Action {
  readonly type = ADD_SHOP;
  constructor(public shop: Shop) { }
}

export class ClearShop implements Action {
  readonly type = CLEAR_SHOP;
}

export class FetchShop implements Action {
  readonly type = FETCH_SHOP;
}

export class StoreShop implements Action {
  readonly type = STORE_SHOP;
}

export class DeleteShop implements Action {
  readonly type = DELETE_SHOP;
  constructor(public indexShop: number) { }
}

export class UpdateShop implements Action {
  readonly type = UPDATE_SHOP;
  constructor(public updatedShop: Shop) { }
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public indexShop: number) { }
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export class FinishShop implements Action {
  readonly type = FINISH_SHOP;
}

export type ShopActions
  = FetchShop
  | AddShop
  | ClearShop
  | StoreShop
  | DeleteShop
  | UpdateShop
  | StartEdit
  | StopEdit
  | FinishShop;
