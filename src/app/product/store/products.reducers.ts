import { Product } from '../../shared/product.model';
import * as ProductAction from './products.actions';
import { Recipe } from 'src/app/shared/recipe.model';

export interface State {
  products: Product[];
  editedProduct: Product;
  editedProductIndex: number;
}

export interface AppState {
  productsList: State;
}

const initialState: State = {
  products: [
    new Product(
      'Apple',
      'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg',
      'Fruit',
      2.50,
      new Date(),
      new Date(),
      new Recipe(
        'Apple Pie',
        'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg',
        [
          {
            ingredient: 'Apple',
            amount: 3
          }],
        [
          { name: 'Mix together' },
          { name: 'Finished' }
        ],
        200,
        5)
    ),
  ],
  editedProductIndex: -1,
  editedProduct: null
};

// export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
// export const UDPATE_PRODUCT = 'UDPATE_PRODUCT';
// export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export function reducer(state = initialState, action: ProductAction.ProductActions): State {
  switch (action.type) {
    case ProductAction.CREATE_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.product]
      };
    }
    case ProductAction.DELETE_PRODUCT: {
      const oldProducts = [...state.products];
      oldProducts.splice(action.indexProduct, 1);
      return {
        ...state,
        products: oldProducts
      };
    }
    case ProductAction.START_EDIT: {
      return {
        ...state,
        editedProductIndex: action.indexProduct,
        editedProduct: state.products[action.indexProduct]
      };
    }
    case ProductAction.UDPATE_PRODUCT: {
      const editedProduct = state.products[state.editedProductIndex];
      const updateProduct = {
        ...editedProduct,
        ...action.product
      };
      const editedProducts = [...state.products];
      editedProducts[state.editedProductIndex] = updateProduct;
      return {
        ...state,
        products: editedProducts
      };
    }
    case ProductAction.STOP_EDIT: {
      return {
        ...state,
        editedProductIndex: -1,
        editedProduct: null
      };
    }
    case ProductAction.FETCH_PRODUCT: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
