import { Action } from '@ngrx/store';
import { Shop } from '../shop.model';

export const FETCH_SHOP = 'FETCH_SHOP';
export const STORE_SHOP = 'STORE_SHOP';
export const FINISH_SHOP = 'FINISH_SHOP';

export const ADD_SHOP = 'ADD_SHOP';
export const REMOVE_SHOP = 'REMOVE_SHOP';
export const UPDATE_SHOP = 'UPDATE_SHOP';
export const START_UPDATE = 'START_UPDATE';
export const STOP_UPDATE = 'STOP_UPDATE_';

export class AddShop implements Action {
  readonly type = ADD_SHOP;
  constructor(public payload: Shop) { }
}

export class FetchShop implements Action {
  readonly type = FETCH_SHOP;
}

export class StoreShop implements Action {
  readonly type = STORE_SHOP;
}

export class RemoveShop implements Action {
  readonly type = REMOVE_SHOP;
  constructor(public payload: number) { }
}

export class UpdateShop implements Action {
  readonly type = UPDATE_SHOP;
  constructor(public payload: { updatedProduct: Shop }) { }
}

export class StartUpdate implements Action {
  readonly type = START_UPDATE;
  constructor(public payload: number) { }
}

export class StopUpdate implements Action {
  readonly type = STOP_UPDATE;
}

export class FinishShop implements Action {
  readonly type = FINISH_SHOP;
}

export type ShopActions
  = FetchShop
  | AddShop
  | StoreShop
  | RemoveShop
  | UpdateShop
  | StartUpdate
  | StopUpdate
  | FinishShop;
