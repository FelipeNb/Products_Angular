import { Shop } from '../shop.model';
import * as ShopActions from '../store/shop.actions';


export interface State {
  shops: Shop[];
  editedShop: Shop;
  editedShopIndex: number;
}

export interface AppState {
  shopList: State;
}

const initialState: State = {
  shops: [],
  editedShop: null,
  editedShopIndex: -1
};

export function reducer(state = initialState, action: ShopActions.ShopActions): State {
  switch (action.type) {
    case ShopActions.START_EDIT: {
      return {
        ...state,
        editedShopIndex: action.indexShop,
        editedShop: state.shops[action.indexShop]
      };
    }
    case ShopActions.ADD_SHOP: {
      return {
        ...state,
        shops: [...state.shops, action.shop]
      };
    }
    case ShopActions.STOP_EDIT: {
      return {
        ...state,
        editedShop: null,
        editedShopIndex: -1
      };
    }
    case ShopActions.UPDATE_SHOP: {
      const selectedShop = state.shops[state.editedShopIndex];
      const changedShop = {
        ...selectedShop,
        ...action.updatedShop
      };
      const updatedShop = [...state.shops];
      updatedShop[state.editedShopIndex] = changedShop;
      return {
        ...state,
        shops: updatedShop
      };
    }
    case ShopActions.DELETE_SHOP: {
      const oldShops = [...state.shops];
      oldShops.splice(action.indexShop, 1);
      return {
        ...state,
        shops: oldShops
      };
    }
    default: {
      return state;
    }
  }
}
