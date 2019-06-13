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
    case ShopActions.START_UPDATE: {
      return {
        ...state,
        editedShopIndex: action.payload,
        editedShop: state.shops[action.payload]
      };
    }
    case ShopActions.ADD_SHOP: {
      return {
        ...state,
        shops: [...state.shops, action.payload]
      };
    }
    case ShopActions.STOP_UPDATE: {
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
        ...action.payload.updatedProduct
      };
      const updatedShop = [...state.shops];
      updatedShop[state.editedShopIndex] = changedShop;
      return {
        ...state,
        shops: updatedShop
      };
    }
    case ShopActions.REMOVE_SHOP: {
      const oldShops = [...state.shops];
      oldShops.splice(action.payload, 1);
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
